/*
 * Created by Clemens Gläser on 15.05.18 14:47
 */

import {Map, map} from "d3-collection";
import {Process} from "../processor";

export const swapNameToOriginalProcess: Map<Process> = map();

export function swappingProcess(timePassed: number): (p: Process) => Process {
    return (process: Process) => {
        const duration: number = Math.ceil(process.getMemoryUsage() / 10);
        const name = `SWAPPING-${process.getName()}`;
        swapNameToOriginalProcess.set(name, process);
        return new Process(timePassed, duration, 999, name, 0, 0);
    };
}

export const restoreNameToOriginalProcess: Map<Process> = map();

export function restoringProcess(timePassed: number): (p: Process) => Process {
    return (process: Process) => {
        const duration: number = Math.ceil(process.getMemoryUsage() / 10);
        const name = `RESTORING-${process.getName()}`;
        restoreNameToOriginalProcess.set(name, process);
        return new Process(timePassed, duration, 999, name, 0, 0);
    };
}

/**
 * Adds the process to the beginning of the list if the process is a swapping process
 * @param {Process} process - the process to be added
 * @param {Process[]} list - the list of processes
 * @returns {boolean} - if the process has been added to the list
 */
export function handleSwappingProcess(
    process: Process,
    list: Process[]
): boolean {
    if (!process.isSwappingProcess()) {
        return false;
    }

    list.unshift(process);
    return true;
}

/**
 * interrupts the currently running process and inserts it at newIndex in the processList
 * @param {Process[]} processList
 * @param {number} newIndex
 */
export function interruptActiveProcess(
    processList: Process[],
    newIndex: number
) {
    processList[0].interrupt();
    processList.splice(newIndex, 0, ...processList.splice(0, 1));
}
