/*
 * Created by Clemens Gläser on 16.04.18 16:51
 */

import {ScaleOrdinal} from "d3-scale";
import {BlockState, Disk} from "../diskModels";
import * as diskViz from "../diskSpaceAnimations";
import {get} from "../localStorage/helpers";
import {LocalStorageKeys} from "../localStorage/keys";
import * as memoryViz from "../memoryAnimations";
import {Memory} from "../memoryController";
import {Process} from "../processor";
import {
    restoreNameToOriginalProcess,
    swapNameToOriginalProcess
} from "../util/processHelpers";
import {createSwapStrategy} from "./SwappingStrategy";

let memory: Memory;
let disk: Disk;
let memoryEnabled: boolean;
let diskEnabled: boolean;
let swappingEnabled: boolean;

export type AddProcessResultEnum = Success | Noop | Failure;
export interface AddProcessResult {
    status: AddProcessResultEnum;
    swapTargets: Process[];
}

export enum Success {
    ADDED = 1,
    NEED_SWAP_OTHERS,
    RETRIEVE_FROM_SWAP
}

export enum Noop {
    PROCESS_ALREADY_ADDED = 50,
    IS_SWAPPING_PROCESS,
    IS_RESTORING_PROCESS
}

export enum Failure {
    DISK_NO_SPACE = 100,
    MEMORY_NO_SPACE,
    SWAP_IMPOSSIBLE
}

export function isSuccess(
    result: AddProcessResult | AddProcessResultEnum
): boolean {
    const status = typeof result === "number" ? result : result.status;

    return 0 < status && status < 50;
}

export function isNoop(
    result: AddProcessResult | AddProcessResultEnum
): boolean {
    const status = typeof result === "number" ? result : result.status;
    return 50 <= status && status < 100;
}

export function isFailure(
    result: AddProcessResult | AddProcessResultEnum
): boolean {
    const status = typeof result === "number" ? result : result.status;
    return 100 <= status;
}

function done(
    status: AddProcessResultEnum,
    swapTargets: Process[] = []
): AddProcessResult {
    return {
        status,
        swapTargets
    };
}

export function init(m: Memory, d: Disk) {
    memory = m;
    disk = d;
    memoryViz.addMemoryVisually(m);
    diskViz.updateDiskSpaceAnimator(d);
    diskViz.addDiskVisually(d);
    memoryEnabled = get<boolean>(LocalStorageKeys.MEMORY_ENABLED);
    diskEnabled = get<boolean>(LocalStorageKeys.DISK_ENABLED);
    swappingEnabled = get<boolean>(LocalStorageKeys.SWAPPING_ENABLED);
}

export function addProcess(
    process: Process,
    color: ScaleOrdinal<string, string>
): AddProcessResult {
    if (process.isSwappingProcess()) {
        if (process.hasMemory) {
            return done(Noop.IS_SWAPPING_PROCESS);
        }

        const op = swapNameToOriginalProcess.get(process.getName());
        if (!op) {
            throw new Error("Illegal swapping process");
        }

        removeFromMemory(op);
        addToDiskCurried(color)(BlockState.SWAP)(op);

        process.setHasMemory(true);
        swapNameToOriginalProcess.remove(process.getName());

        return done(Noop.IS_SWAPPING_PROCESS);
    }

    if (process.isRestoringProcess()) {
        if (process.hasMemory) {
            return done(Noop.IS_RESTORING_PROCESS);
        }

        const op = restoreNameToOriginalProcess.get(process.getName());
        if (!op) {
            throw new Error("Illegal restoring process");
        }

        removeFromDiskCurried(BlockState.SWAP)(op);
        addToMemoryCurried(color)(op);

        process.setHasMemory(true);
        restoreNameToOriginalProcess.remove(process.getName());

        return done(Noop.IS_RESTORING_PROCESS);
    }

    if (memoryEnabled && diskEnabled && swappingEnabled) {
        return addProcessConsiderSwap(process, color);
    }

    if (process.hasMemory) {
        handleProcessAlreadyAllocated(process);
        return done(Noop.PROCESS_ALREADY_ADDED);
    }

    let allocatedMemory = !memoryEnabled;
    let allocatedDisk = !diskEnabled;

    if (memoryEnabled) {
        memoryViz.animateMemoryAllocation(process, memory, color, "pre");
        const added = memory.addProcess(process);
        allocatedMemory = allocatedMemory || added;
        process.setHasMemory(added);
    }

    // add to disk only if disk is enabled
    // and memory is either disabled
    // or the process got added to memory successfully
    if (diskEnabled && allocatedMemory) {
        diskViz.animateDiskSpaceAllocation(process, disk, color, "pre");
        const added = disk.allocateSpace(process);
        allocatedDisk = allocatedDisk || added;
    }

    // animate post state
    if (memoryEnabled && allocatedMemory) {
        memoryViz.animateMemoryAllocation(process, memory, color, "post");
    }
    if (diskEnabled && allocatedDisk) {
        diskViz.animateDiskSpaceAllocation(process, disk, color, "post");
    }
    return done(Success.ADDED);
}

/**
 * Tries adding a process to memory and disk and will also attempt to swap other processes from memory to disk
 * @param {Process} process - the process to be added
 * @param {ScaleOrdinal<string, string>} color - maps from a processes' name to its color
 */
function addProcessConsiderSwap(
    process: Process,
    color: ScaleOrdinal<string, string>
): AddProcessResult {
    const d = debug(process);
    if (process.hasMemory) {
        d("memory already allocated");
        handleProcessAlreadyAllocated(process);
        return done(Noop.PROCESS_ALREADY_ADDED);
    }

    const inSwap = disk.hasProcess(process, BlockState.SWAP);

    const addToMemory = addToMemoryCurried(color);
    const addToDisk = addToDiskCurried(color)(BlockState.DISK);

    if (inSwap) {
        d("found process in swap");
        if (!disk.hasProcess(process, BlockState.DISK)) {
            throw new Error(
                `Illegal state: process '${process.getName()}' was swapped without having regular disk space allocated`
            );
        }
        // restoring process is not directly possible
        if (!memory.hasSpaceForProcess(process)) {
            d("direct restore not possible, trying to swap other processes");
            // try swapping processes in memory to disk
            const swapTargets = createSwapStrategy()(
                memory.getMemoryList(),
                process
            );
            if (swapTargets.length === 0) {
                // swapping failed
                d("direct restore swap failed, no swap targets found");
                process.reject();
                return done(Failure.MEMORY_NO_SPACE);
            }
            return done(Success.NEED_SWAP_OTHERS, swapTargets);
        }
        // restore process
        d("retrieving process from swap");
        return done(Success.RETRIEVE_FROM_SWAP, [process]);
    }
    d("process not found in swap");
    if (!memory.hasSpaceForProcess(process)) {
        // swap another process to disk to make space
        d("trying swapping to make space for process");
        const swapTargets = createSwapStrategy()(
            memory.getMemoryList(),
            process
        );
        if (swapTargets.length === 0) {
            d("swapping failed: no targets found");
            process.reject();
            return done(Failure.SWAP_IMPOSSIBLE);
        }
        return done(Success.NEED_SWAP_OTHERS, swapTargets);
    } else {
        // normal case, process not in swap and memory has space for it
        d("Normal case, process not in swap and memory has space");
        if (!disk.hasSpaceForProcess(process, BlockState.DISK)) {
            d("Disk has no space for process");
            process.reject();
            return done(Failure.DISK_NO_SPACE);
        }
        addToMemory(process);
        addToDisk(process);
        d("Added successfully");
        return done(Success.ADDED);
    }
}

function handleProcessAlreadyAllocated(process: Process) {
    if (!diskEnabled) {
        return;
    }
    const onDisk = disk.hasProcess(process, BlockState.DISK);
    if (!onDisk) {
        throw new Error(
            `Illegal state: process '${process.getName()}' has memory but not disk space allocated!`
        );
    }

    const removeFromSwap = removeFromDiskCurried(BlockState.SWAP);
    // handle swap deletion if it exists for the process
    if (disk.hasProcess(process, BlockState.SWAP)) {
        removeFromSwap(process);
    }
}

export function removeProcess(process: Process) {
    const removeFromDisk = removeFromDiskCurried(BlockState.DISK);
    const removeFromSwap = removeFromDiskCurried(BlockState.SWAP);

    if (memoryEnabled) {
        removeFromMemory(process);
        process.setHasMemory(false);
    }

    if (diskEnabled) {
        removeFromDisk(process);
    }

    if (swappingEnabled) {
        removeFromSwap(process);
    }
}

export function reset() {
    memoryViz.resetMemoryAnimation(memory);
    memory.initMemory();
    diskViz.resetDiskSpaceAnimation(disk);
    disk.initDisk();
}

function addToMemoryCurried(
    color: ScaleOrdinal<string, string>
): (p: Process) => void {
    return (p: Process) => _addToMemoryNoCurry(p, color);
}

const removeFromMemory: (p: Process) => void = _removeFromMemoryNoCurry;

function _addToMemoryNoCurry(
    process: Process,
    color: ScaleOrdinal<string, string>
) {
    memoryViz.animateMemoryAllocation(process, memory, color, "pre");
    memory.addProcess(process);
    memoryViz.animateMemoryAllocation(process, memory, color, "post");
}

function _removeFromMemoryNoCurry(process: Process) {
    memoryViz.animateMemoryDeallocation(process, memory, "pre");
    memory.removeProcess(process);
    process.setHasMemory(false);
    memoryViz.animateMemoryDeallocation(process, memory, "post");
}

function addToDiskCurried(
    color: ScaleOrdinal<string, string>
): (s: BlockState.DISK | BlockState.SWAP) => (p: Process) => void {
    return (state) => (p) => _addToDiskNoCurry(p, color, state);
}

function removeFromDiskCurried(
    state: BlockState.DISK | BlockState.SWAP
): (p: Process) => void {
    return (p) => _removeFromDiskNoCurry(p, state);
}

function _addToDiskNoCurry(
    process: Process,
    color: ScaleOrdinal<string, string>,
    state: BlockState.DISK | BlockState.SWAP
) {
    diskViz.animateDiskSpaceAllocation(process, disk, color, "pre");
    disk.allocateSpace(process, state);
    diskViz.animateDiskSpaceAllocation(process, disk, color, "post");
}

function _removeFromDiskNoCurry(
    process: Process,
    state: BlockState.DISK | BlockState.SWAP
) {
    diskViz.animateDiskSpaceDeallocation(process, disk, "pre");
    disk.removeFromDisk(process, state);
    diskViz.animateDiskSpaceDeallocation(process, disk, "post");
}

function debug(p: Process): (t: string) => void {
    return (message: string) => console.log("Swap:", p.getName(), ":", message);
}
