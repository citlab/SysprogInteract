import {ScaleLinear, scaleLinear, scaleOrdinal, ScaleOrdinal} from "d3-scale";
import {select} from "d3-selection";
import {Memory, MemoryBlock} from "./memoryController";
import {Process} from "./processor";

export interface MemoryAnimator {
    initMemoryVisually(memory: Memory): void;

    /**
     * This method gets called when a process is supposed to be allocated in memory.
     * type represents before and after the allocation.
     * Do note that the allocation might fail and a "pre" event might never get a "post" event
     * @param {Process} process - the process to be allocated
     * @param {Memory} memory - context for the allocation
     * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
     */
    animateMemoryAllocation(
        process: Process,
        memory: Memory,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void;

    /**
     * This method gets called when a process is supposed to be deallocated.
     * @param {Process} process - the process to be deallocated
     * @param {Memory} memory - context for the deallocation
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
     */
    animateMemoryDeallocation(
        process: Process,
        memory: Memory,
        type: "pre" | "post"
    ): void;
    resetMemoryAnimation(memory: Memory): void;
}

export function createFilterByName(
    process: Process
): (mb: MemoryBlock) => boolean {
    return (mb: MemoryBlock) =>
        mb.getProcess() != null &&
        mb.getProcess()!.getName() === process.getName();
}

const blockWidth = 10;
const blockHeight = 20;
const blockOffsetX = 15; // remember: real offset = blockOffsetX - Blockwidth!
const blockOffsetY = 25; // -"-

export class DefaultMemoryAnimator implements MemoryAnimator {
    public initMemoryVisually(memory: Memory): void {
        // calculate boundaries for svg "container"
        const margin = {top: 10, right: 10, bottom: 10, left: 10};
        const rect = document.getElementById("memSvg")!.getBoundingClientRect();
        const width = rect.width - margin.left - margin.right;
        const blocksPerRow = Math.floor(
            width / (blockWidth + (blockOffsetX - blockWidth))
        );
        const rows = Math.ceil(memory.getSize() / blocksPerRow);
        const svgHeight = rows * blockOffsetY + margin.top + margin.bottom;

        // fill svg with
        const listItems = select("#memSvg")
            .attr("width", rect.width)
            .attr("height", svgHeight + "px") // set svg boundaries
            .selectAll("rect")
            .data(memory.getMemoryList(), (mb: any) => mb.getId() + "");
        listItems
            .enter()
            .append("rect")
            .attr("class", "memory-block")
            .attr("id", (mb) => `memory-block-id-${mb.getId()}`)
            .attr("width", blockWidth)
            .attr("height", blockHeight)
            .attr("ry", 1)
            .attr("rx", 1)
            .attr("x", (d) => (d.getId() % blocksPerRow) * blockOffsetX)
            .attr(
                "y",
                (d) => Math.floor(d.getId() / blocksPerRow) * blockOffsetY
            )
            .style("fill", "#ffffff");
    }

    public animateMemoryAllocation(
        process: Process,
        memory: Memory,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        const filterFunc = createFilterByName(process);
        this.changeColor(memory, filterFunc, color(process.getName()));
    }

    public animateMemoryDeallocation(
        process: Process,
        memory: Memory,
        type: "pre" | "post"
    ): void {
        if (type === "post") {
            return;
        }
        // we need the old memory to remove the process properly
        const filterFunc = createFilterByName(process);
        this.changeColor(memory, filterFunc);
    }

    public resetMemoryAnimation(memory: Memory): void {
        this.changeColor(memory);
    }

    private changeColor(
        memory: Memory,
        pred: (mb: MemoryBlock) => boolean = () => true,
        color: string = "#ffffff"
    ) {
        memory
            .getMemoryList()
            .filter(pred)
            .forEach((mb) => {
                select("#memSvg")
                    .select(`rect[id='memory-block-id-${mb.getId()}']`)
                    .style("fill", color);
            });
    }
}

export class BuddySystemAnimator implements MemoryAnimator {
    private scaleWidth: ScaleLinear<number, number> = scaleLinear()
        .domain([0, 0])
        .rangeRound([0, 0]);

    private colorScaler: ScaleOrdinal<string, string> = scaleOrdinal();
    private rowHeight: number = 25;
    // different from the defined padding to properly render the borders
    private margin = {top: 15, right: 15, bottom: 15, left: 10};

    public initMemoryVisually(memory: Memory): void {
        const rect = document.getElementById("memSvg")!.getBoundingClientRect();
        const width = rect.width - this.margin.left - this.margin.right;
        const svgHeight = this.rowHeight + this.margin.top + this.margin.bottom;
        select("#memSvg")
            .attr("width", rect.width)
            .attr("height", svgHeight);

        const sum = memory
            .getMemoryList()
            .map((v) => v.size)
            .reduce((prev, curr) => prev + curr);

        this.scaleWidth = scaleLinear()
            .domain([0, sum])
            .rangeRound([0, width]);

        this.change(memory);
    }

    public animateMemoryAllocation(
        process: Process,
        memory: Memory,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        this.colorScaler = color;
        this.change(memory);
    }

    public animateMemoryDeallocation(
        process: Process,
        memory: Memory,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            select("#memSvg")
                .selectAll(`rect[data-proc-name=${this.getName(process)}]`)
                .attr("fill", "#ffffff");
        } else {
            this.change(memory);
        }
    }

    public resetMemoryAnimation(memory: Memory): void {
        select("#memSvg")
            .selectAll("*")
            .remove();
    }

    private change(memory: Memory) {
        const listItems = select("#memSvg")
            .selectAll("rect")
            .data(
                memory.getMemoryList(),
                (mb: any) => mb.getId() + "-" + mb.size
            );

        listItems
            .enter()
            .append("rect")
            .attr("class", "memory-block-buddy")
            .attr("width", (d) => this.scaleWidth(d.size))
            .attr("height", this.rowHeight)
            .attr("x", (d) => this.scaleWidth(d.getId()))
            .attr("y", 0)
            .merge(listItems)
            .attr("fill", (d) => this.getColor(d.getProcess()))
            .attr("data-proc-name", (d) => this.getName(d.getProcess()));

        listItems.exit().remove();
    }

    private getName(process: Process | null) {
        if (process) {
            return process.getName();
        }
        return "(empty)";
    }

    private getColor(process: Process | null = null) {
        if (process) {
            return this.colorScaler(process.getName());
        }
        return "#ffffff";
    }
}
