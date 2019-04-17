import {select} from "d3-selection";
import {Memory} from "./memoryController";
import {Process} from "../processor";

/**
 * Animates memory allocation by coloring memory-blocks with corresponding color. 
 * @param process
 * @param memory
 * @param color
 */
function animateMemoryAllocation(process: Process, memory: Memory, color: any) {
    const updateMbs = memory.getMemoryList().filter(function(mb) {
        return mb.getProcess() != null && mb.getProcess().getName() === process.getName();
    });
    updateMbs.forEach(function(mb) {
        const rect = select("#memSvg").select("rect[id='" + mb.getId() + "']");
        rect.style("fill", color(process.getName()));
    });
}

/**
 * Animates memory deallocation by de-coloring memory-blocks allocated by the given process.
 * @param process
 * @param memory
 */
function animateMemoryDeallocation(process: Process, memory: Memory) {
    const updateMbs = memory.getMemoryList().filter(function(mb) {
        return mb.getProcess() != null && mb.getProcess().getName() === process.getName();
    });
    updateMbs.forEach(function(mb) {
        const rect = select("#memSvg").select("rect[id='" + mb.getId() + "']");
        rect.style("fill", "#ffffff");
    });
}

/**
 * Resets all memory-blocks.
 * @param memory
 */
function resetMemoryAnimation(memory: Memory) {
    memory.getMemoryList().forEach(function(mb) {
        const rect = select("#memSvg").select("rect[id='" + mb.getId() + "']");
        rect.style("fill", "#ffffff");
    });
}

export {animateMemoryAllocation, animateMemoryDeallocation, resetMemoryAnimation};