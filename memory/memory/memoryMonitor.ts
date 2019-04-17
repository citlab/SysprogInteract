import {Memory, MemoryBlock} from "./memoryController";
import {select} from "d3-selection";

const blockWidth = 10;
const blockHeight = 20;
const blockOffsetX = 17.5;
const blockOffsetY = 25;

/**
 * Initialize the svg for memory-visualization.
 * @param size
 */
function initMemorySvg(size: number){
    const margin = {top: 10, right: 10, bottom: 10, left: 10};
    const rect = document.getElementById("memSvg").getBoundingClientRect();
    const width = rect.width - margin.left - margin.right;
    const blocksPerRow = Math.floor(width / (blockWidth + (blockOffsetX - blockWidth)));
    const rows = Math.ceil(size/ (blocksPerRow));
    const svgHeight = rows * blockOffsetY + margin.top + margin.bottom;
    document.getElementById("memSvg").setAttribute("height", svgHeight + "px");
}

/**
 * Visualizes the memory-blocks according the configuration.
 * @param m
 */
function addMemoryVisually(m: Memory) {
    const margin = {top: 10, right: 10, bottom: 10, left: 10};
    const rect = document.getElementById("memSvg").getBoundingClientRect();
    const width = rect.width - margin.left - margin.right;
    const blocksPerRow = Math.floor(width / (blockWidth + (blockOffsetX - blockWidth)));
    const rows = Math.ceil(m.getSize() / (blocksPerRow));
    const svgHeight = rows * blockOffsetY + margin.top + margin.bottom;

    document.getElementById("memSvg").setAttribute("height", svgHeight + "px");

    const listItems = select("#memSvg").selectAll("rect").data(m.getMemoryList(), function(mb: MemoryBlock) {
        return mb.getId() + "";
    });

    listItems.enter().append("rect")
        .attr("class", "memory-block")
        .attr("id", (mb) => mb.getId())
        .attr("width", blockWidth)
        .attr("height", blockHeight)
        .attr("ry", 1)
        .attr("rx", 1)
        .attr("x", function(d) {return (d.getId() % blocksPerRow) * blockOffsetX;})
        .attr("y", function(d) {return (Math.floor(d.getId() / blocksPerRow)) * blockOffsetY;})
        .style("fill", "#ffffff");
}

export {initMemorySvg, addMemoryVisually}