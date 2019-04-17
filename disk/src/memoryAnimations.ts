/**
 * Created by Joe on 08.12.17.
 */
import {ScaleOrdinal} from "d3-scale";
import {createMemoryAnimator} from "./factoryMethods";
import {MemoryAnimator} from "./MemoryAnimator";
import {Memory} from "./memoryController";
import {Process} from "./processor";

let memoryAnimator: MemoryAnimator = createMemoryAnimator();

function updateMemoryAnimator() {
    memoryAnimator = createMemoryAnimator();
}

function addMemoryVisually(m: Memory) {
    memoryAnimator.initMemoryVisually(m);
}

function animateMemoryAllocation(
    process: Process,
    memory: Memory,
    color: ScaleOrdinal<string, string>,
    type: "pre" | "post"
) {
    memoryAnimator.animateMemoryAllocation(process, memory, color, type);
}

function animateMemoryDeallocation(
    process: Process,
    memory: Memory,
    type: "pre" | "post"
) {
    memoryAnimator.animateMemoryDeallocation(process, memory, type);
}

function resetMemoryAnimation(memory: Memory) {
    memoryAnimator.resetMemoryAnimation(memory);
}

export {
    addMemoryVisually,
    animateMemoryAllocation,
    animateMemoryDeallocation,
    resetMemoryAnimation,
    updateMemoryAnimator
};
