/*
 * Created by Clemens Gläser on 19.04.18 19:49
 */

import {map, Map} from "d3-collection";
import {select} from "d3-selection";
import {MemoryBlock} from "../memoryController";
import {Process} from "../processor";
import {getOrDefault, indexOfMin} from "../util/collectionHelpers";

/**
 * A Swapping strategy suggests processes to be swapped to disk.
 * Parameters are the memory blocks and the process which will be added to memory
 */
export type SwappingStrategy = (
    memoryBlocks: MemoryBlock[],
    processToBeAdded: Process
) => Process[];

/**
 * A Process picker picks processes from an array of processes.
 * Picker have to modify the process array
 * => use shift(), pop() and splice!
 * Return an empty array if picking failed
 */
export type ProcessPicker = (pList: Process[]) => Process[];

const nonNullProcesses: (m: MemoryBlock[], p: Process) => Process[] = (
    memBlocks: MemoryBlock[],
    p: Process
) =>
    memBlocks
        .map((v) => v.getProcess())
        .filter((v) => v != null)
        .filter((v) => v !== p) as Process[];

const pickFirst: ProcessPicker = (pList) => {
    const p = pList.shift();
    return p ? [p] : [];
};

const pickLast: ProcessPicker = (pList) => {
    const p = pList.pop();
    return p ? [p] : [];
};

// the resulting memory might not be continuous!
const pickLowestPriority: ProcessPicker = (pList) => {
    const minIndex = indexOfMin(pList, (t) => t.getPriority());
    if (minIndex === -1) {
        return [] as Process[];
    }
    return pList.splice(minIndex, 1);
};

/**
 * Applies a picker repeatedly until the memory requirement is fulfilled or until the picker fails.
 * @param {ProcessPicker} picker
 * @returns {(m, p) => Process[]}
 */
const applyPicker: (picker: ProcessPicker) => SwappingStrategy = (picker) => (
    m,
    p
) => {
    const possibleSwapTargets = nonNullProcesses(m, p);
    const swapTargets: Process[] = [];
    const memRequirement = p.getMemoryUsage();
    let currentMemory = 0;
    while (currentMemory < memRequirement) {
        const picked = picker(possibleSwapTargets);
        if (picked.length > 0) {
            swapTargets.push(...picked);
            currentMemory += picked.reduce(
                (prev, curr) => prev + curr.getMemoryUsage(),
                0
            );
        } else {
            break;
        }
    }
    if (currentMemory < memRequirement) {
        return [] as Process[];
    }
    return swapTargets;
};

const firstProcesses: SwappingStrategy = applyPicker(pickFirst);

const lastProcesses: SwappingStrategy = applyPicker(pickLast);

const lowestPriorityProcesses: SwappingStrategy = applyPicker(
    pickLowestPriority
);

let useFirst = true;

const alternateFirstLast: SwappingStrategy = (m, p) => {
    let strategy: SwappingStrategy = lastProcesses;
    if (useFirst) {
        strategy = firstProcesses;
    }
    useFirst = !useFirst;
    return strategy(m, p);
};

const strategies: Map<SwappingStrategy> = map<SwappingStrategy>()
    .set("first", firstProcesses)
    .set("last", lastProcesses)
    .set("alternate-first-last", alternateFirstLast)
    .set("lowest-priority", lowestPriorityProcesses);

export function createSwapStrategy(): SwappingStrategy {
    const selected = (select("#swappingStrategy").node() as HTMLSelectElement)
        .value;
    return getOrDefault(strategies, selected, firstProcesses);
}
