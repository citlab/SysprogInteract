import {ascending, merge} from "d3-array";
import {set} from "d3-collection";
import {interpolate} from "d3-interpolate";
import {ScaleOrdinal, scaleOrdinal, schemeCategory20} from "d3-scale";
import {event, select} from "d3-selection";
import {arc as createArc, pie as createPie} from "d3-shape";
import "d3-transition";
import {BlockState, Disk, PieData} from "./diskModels";
import {Process} from "./processor";

export interface DiskSpaceAnimator {
    /**
     * Set the duration in ms for all the animations done by a DiskSpace animator.
     * @param {number} n - duration in ms
     */
    setTransitionDuration(n: number): void;

    /**
     * Called during the initialization phase which is at the beginning of a new simulation run.
     * @param {Disk} disk
     */
    initDiskSpaceVisually(disk: Disk): void;

    /**
     * This method gets called when a process is supposed to be allocated on disk.
     * type represents before and after the allocation.
     * Do note that the allocation might fail and a "pre" event might never get a "post" event
     * @param {Process} process - the process to be allocated
     * @param {Disk} disk - context for the allocation
     * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
     */
    animateDiskSpaceAllocation(
        process: Process,
        disk: Disk,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void;

    /**
     * This method gets called when a process is supposed to be deallocated.
     * @param {Process} process - the process to be deallocated
     * @param {Disk} disk - context for the deallocation
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
     */
    animateDiskSpaceDeallocation(
        process: Process,
        disk: Disk,
        type: "pre" | "post"
    ): void;

    /**
     * Called at the end of a simulation run for cleanup purposes.
     * @param {Disk} disk
     */
    resetDiskSpaceAnimation(disk: Disk): void;
}

export class OldPieChart implements DiskSpaceAnimator {
    private svg: any;
    private pie: any;
    private mainArc: any;
    private label: any;
    private colorScale: ScaleOrdinal<string, string> = scaleOrdinal(
        schemeCategory20
    );
    private transitionDuration: number = 500;

    /**
     * Set the duration in ms for all the animations done by a DiskSpace animator.
     * @param {number} n - duration in ms
     */
    public setTransitionDuration(n: number): void {
        this.transitionDuration = n;
    }

    /**
     * Called during the initialization phase which is at the beginning of a new simulation run.
     * @param {Disk} disk
     */
    public initDiskSpaceVisually(disk: Disk): void {
        const margin = {top: 10, right: 10, bottom: 10, left: 10};

        const svgWidth = 900 + margin.left + margin.right;
        const svgHeight = 500 + margin.top + margin.bottom;
        const radius = Math.min(svgWidth, svgHeight) / 2;

        this.mainArc = createArc()
            .outerRadius(radius * 0.8)
            .innerRadius(0);
        this.label = createArc()
            .outerRadius(radius * 0.9)
            .innerRadius(radius * 0.9);
        this.svg = select("#diskSpaceSvg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform", `translate(${svgWidth / 2},${svgHeight / 2})`);

        this.pie = createPie()
            .sort(null)
            .value((d: any) => d.size /*d.index ?*/);

        this.changeColor(disk);
    }

    /**
     * This method gets called when a process is supposed to be allocated on disk.
     * type represents before and after the allocation.
     * Do note that the allocation might fail and a "pre" event might never get a "post" event
     * @param {Process} process - the process to be allocated
     * @param {Disk} disk - context for the allocation
     * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
     */
    public animateDiskSpaceAllocation(
        process: Process,
        disk: Disk,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        this.colorScale = color;
        this.changeColor(disk);
    }

    /**
     * This method gets called when a process is supposed to be deallocated.
     * @param {Process} process - the process to be deallocated
     * @param {Disk} disk - context for the deallocation
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
     */
    public animateDiskSpaceDeallocation(
        process: Process,
        disk: Disk,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        const pieData = disk.toPieDataOld();
        if (pieData.length === 1 && pieData[0].owner === "") {
            // do not animate de-allocation of a single element
            // it causes flickering as allocation gets called immediately afterwards
            return;
        }
        this.changeColor(disk);
    }

    public resetDiskSpaceAnimation(disk: Disk): void {
        select("#diskSpaceSvg")
            .selectAll("*")
            .remove();
    }

    private changeColor(
        disk: Disk,
        duration: number = this.transitionDuration
    ) {
        this.change(disk.toPieDataOld(), duration);
    }

    private change(
        data: PieData[],
        duration: number = this.transitionDuration
    ) {
        const path = this.svg
            .datum(data)
            .selectAll("path.slice")
            .data(this.pie);
        path.selectAll("text").remove();
        path.enter()
            .append("path")
            .attr("class", "slice")
            .attr("d", this.mainArc)
            .attr("stroke", "#ffffff")
            .attr("fill", "#555555") // default path color
            .each(function(this: any, d: any) {
                this._current = d;
            });
        // redo color for all path elements
        path.attr("fill", (d: any) => {
            const dataEl = d.data;
            if (dataEl.owner === "") {
                return "#555555";
            }
            return this.colorScale(dataEl.owner);
        });
        path.transition()
            .duration(duration)
            .attrTween("d", this.createArcTween(this));
        path.exit().remove();
        // TODO: following does not work currently
        path.append("text")
            .attr(
                "transform",
                (d: any) => `translate(${this.label.centroid(d)})`
            )
            .attr("text-anchor", "middle")
            .attr("fill", "#ffffff")
            .text((d: any) => d.data.owner);
    }

    // from http://jsbin.com/hegob/1/edit?js,console,output
    // Store the displayed angles in _current.
    // Then, interpolate from _current to the new angles.
    // During the transition, _current is updated in-place by d3.interpolate.
    private createArcTween(self: OldPieChart) {
        return function(this: any, a: any) {
            const i = interpolate(this._current, a);
            this._current = i(0);
            return function(t: number) {
                return self.mainArc(i(t));
            };
        };
    }
}

export class DiskUsagePieChart implements DiskSpaceAnimator {
    private svg: any;
    private pie: any;
    private mainArc: any;
    private label: any;
    private colorScale: ScaleOrdinal<string, string> = scaleOrdinal(
        schemeCategory20
    );
    private transitionDuration: number = 500;
    private radius: number = 250;

    /**
     * Set the duration in ms for all the animations done by a DiskSpace animator.
     * @param {number} n - duration in ms
     */
    public setTransitionDuration(n: number): void {
        this.transitionDuration = n;
    }

    /**
     * Called during the initialization phase which is at the beginning of a new simulation run.
     * @param {Disk} disk
     */
    public initDiskSpaceVisually(disk: Disk): void {
        const margin = {top: 10, right: 10, bottom: 10, left: 10};

        const svgWidth = 900 + margin.left + margin.right;
        const svgHeight = 500 + margin.top + margin.bottom;
        this.radius = Math.min(svgWidth, svgHeight) / 2;

        this.mainArc = createArc()
            .outerRadius(this.radius * 0.8)
            .innerRadius(this.radius * 0.5);
        this.label = createArc()
            .outerRadius(this.radius * 0.9)
            .innerRadius(this.radius * 0.9);
        this.svg = select("#diskSpaceSvg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform", `translate(${svgWidth / 2},${svgHeight / 2})`);

        this.svg.append("g").attr("class", "slices");
        this.svg.append("g").attr("class", "labels");
        this.svg.append("g").attr("class", "lines");

        this.pie = createPie()
            .sort(null)
            .value((d: any) => d.size /*d.index ?*/);

        this.changeColor(disk);
    }

    /**
     * This method gets called when a process is supposed to be allocated on disk.
     * type represents before and after the allocation.
     * Do note that the allocation might fail and a "pre" event might never get a "post" event
     * @param {Process} process - the process to be allocated
     * @param {Disk} disk - context for the allocation
     * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
     */
    public animateDiskSpaceAllocation(
        process: Process,
        disk: Disk,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        this.colorScale = color;
        this.changeColor(disk);
    }

    /**
     * This method gets called when a process is supposed to be deallocated.
     * @param {Process} process - the process to be deallocated
     * @param {Disk} disk - context for the deallocation
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
     */
    public animateDiskSpaceDeallocation(
        process: Process,
        disk: Disk,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        const pieData = disk.toPieData();
        if (pieData.length === 1 && pieData[0].owner === "") {
            // do not animate de-allocation of a single element
            // it causes flickering as allocation gets called immediately afterwards
            return;
        }
        this.changeColor(disk);
    }

    /**
     * Called at the end of a simulation run for cleanup purposes.
     * @param {Disk} disk
     */
    public resetDiskSpaceAnimation(disk: Disk): void {
        select("#diskSpaceSvg")
            .selectAll("*")
            .remove();
    }

    private changeColor(disk: Disk) {
        const pieData = disk
            .toPieData()
            .sort((a, b) => ascending(a.owner, b.owner));
        this.change(pieData);
    }

    private change(data: PieData[]) {
        let data0 = this.svg
            .select(".slices")
            .selectAll("path.slice")
            .data()
            .map((d: any) => d.data);
        if (data0.length === 0) {
            data0 = data;
        }
        const was = mergeWithFirstEqualZero(data, data0);
        const is = mergeWithFirstEqualZero(data0, data);

        /* ------- SLICE ARCS -------*/

        let slice = this.svg
            .select(".slices")
            .selectAll("path.slice")
            .data(this.pie(was as any), keyOwner);

        slice
            .enter()
            .insert("path")
            .attr("class", "slice")
            .style("fill", (d: any) => {
                if (d.data.owner === "") {
                    return "#555555";
                }
                return this.colorScale(d.data.owner);
            })
            .each(function(this: any, d: any) {
                this._current = d;
            });

        slice = this.svg
            .select(".slices")
            .selectAll("path.slice")
            .data(this.pie(is as any), keyOwner);

        slice
            .transition()
            .duration(this.transitionDuration)
            .attrTween("d", this.sliceTween(this));

        slice = this.svg
            .select(".slices")
            .selectAll("path.slice")
            .data(this.pie(data as any), keyOwner);

        slice
            .exit()
            .transition()
            .delay(this.transitionDuration)
            .duration(0)
            .remove();

        /* ------- TEXT LABELS -------*/

        let text = this.svg
            .select(".labels")
            .selectAll("text")
            .data(this.pie(was as any), keyOwner);

        text.enter()
            .append("text")
            .attr("dy", ".35em")
            .style("opacity", 0)
            .text((d: any) => (d.data.owner === "" ? "(empty)" : d.data.owner))
            .each(function(this: any, d: any) {
                this._current = d;
            });

        text = this.svg
            .select(".labels")
            .selectAll("text")
            .data(this.pie(is as any), keyOwner);

        text.transition()
            .duration(this.transitionDuration)
            .style("opacity", function(d: any) {
                return d.data.size === 0 ? 0 : 1;
            })
            .attrTween("transform", this.textTween(this))
            .styleTween("text-anchor", function(this: any, d: any) {
                const i = interpolate(this._current, d);
                return function(t: number) {
                    const d2 = i(t);
                    return midAngle(d2) < Math.PI ? "start" : "end";
                };
            });

        text = this.svg
            .select(".labels")
            .selectAll("text")
            .data(this.pie(data as any), keyOwner);

        text.exit()
            .transition()
            .delay(this.transitionDuration)
            .remove();

        /* ------- SLICE TO TEXT POLYLINES -------*/

        let polyline = this.svg
            .select(".lines")
            .selectAll("polyline")
            .data(this.pie(was as any), keyOwner);

        polyline
            .enter()
            .append("polyline")
            .style("opacity", 0)
            .each(function(this: any, d: any) {
                this._current = d;
            });

        polyline = this.svg
            .select(".lines")
            .selectAll("polyline")
            .data(this.pie(is as any), keyOwner);

        polyline
            .transition()
            .duration(this.transitionDuration)
            .style("opacity", (d: any) => (d.data.value === 0 ? 0 : 0.5))
            .attrTween("points", this.polylineTween(this));

        polyline = this.svg
            .select(".lines")
            .selectAll("polyline")
            .data(this.pie(data as any), keyOwner);

        polyline
            .exit()
            .transition()
            .duration(this.transitionDuration)
            .style("opacity", 0)
            .transition()
            .duration(0)
            .remove();
    }

    private sliceTween(self: DiskUsagePieChart) {
        return function(this: any, d: any) {
            const i = interpolate(this._current, d);
            const _this = this;
            return function(t: number) {
                _this._current = i(t);
                return self.mainArc(_this._current)!;
            };
        };
    }

    private textTween(self: DiskUsagePieChart) {
        return function(this: any, d: any) {
            const i = interpolate(this._current, d);
            const _this = this;
            return function(t: number) {
                const d2 = i(t);
                _this._current = d2;
                const pos = self.label.centroid(d2);
                pos[0] = self.radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        };
    }

    private polylineTween(self: DiskUsagePieChart) {
        return function(this: any, d: any) {
            const i = interpolate(this._current, d);
            const _this = this;
            return function(t: number) {
                const d2 = i(t);
                _this._current = d2;
                const pos = self.label.centroid(d2);
                pos[0] = self.radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return (
                    [self.mainArc.centroid(d2), self.label.centroid(d2), pos] +
                    ""
                );
            };
        };
    }
}

export class FixedSegmentDonutChart implements DiskSpaceAnimator {
    private svg: any;
    private pie: any;
    private mainArc: any;
    private label: any;
    private colorScale: ScaleOrdinal<string, string> = scaleOrdinal(
        schemeCategory20
    );
    private transitionDuration: number = 500;
    private radius: number = 250;
    private colorEmpty: string = "#555555";
    private currentData: PieDataWithState[] = [];

    constructor() {}

    /**
     * Set the duration in ms for all the animations done by a DiskSpace animator.
     * @param {number} n - duration in ms
     */
    public setTransitionDuration(n: number): void {
        this.transitionDuration = n;
    }

    /**
     * Called during the initialization phase which is at the beginning of a new simulation run.
     * @param {Disk} disk
     */
    public initDiskSpaceVisually(disk: Disk): void {
        const margin = {top: 10, bottom: 10, left: 10, right: 10};

        const svgWidth = 900 + margin.left + margin.right;
        const svgHeight = 500 + margin.top + margin.bottom;
        this.radius = Math.min(svgWidth, svgHeight) / 2;

        this.mainArc = createArc()
            .outerRadius(this.radius * 0.8)
            .innerRadius(this.radius * 0.5);
        this.label = createArc()
            .outerRadius(this.radius * 0.9)
            .innerRadius(this.radius * 0.9);

        this.svg = select("#diskSpaceSvg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform", `translate(${svgWidth / 2},${svgHeight / 2})`);

        this.svg.append("g").attr("class", "slices");

        this.pie = createPie()
            .sort(null)
            .value((d: any) => d.size);

        // setup tooltip
        const tooltip = select("#diskSpaceSvgContainer")
            .append("div")
            .attr("id", "diskSpaceSvgTooltip")
            .classed("tooltip", true)
            .style("display", "none");

        tooltip
            .append("div")
            .classed("headline", true)
            .append("p")
            .append("strong")
            .classed("headline-value", true)
            .text("Block info");

        tooltip
            .append("div")
            .classed("process-name", true)
            .append("p")
            .html(`Process: <span class="process-name-value"></span>`);

        tooltip
            .append("div")
            .classed("size-used", true)
            .append("p")
            .html(`Blocks used: <span class="size-used-value"></span>`);

        tooltip
            .append("div")
            .classed("disk-type", true)
            .append("p")
            .html(`Type of Data stored: <span class="disk-type-value"></span>`);

        this.updateChart(disk, true);
    }

    /**
     * This method gets called when a process is supposed to be allocated on disk.
     * type represents before and after the allocation.
     * Do note that the allocation might fail and a "pre" event might never get a "post" event
     * @param {Process} process - the process to be allocated
     * @param {Disk} disk - context for the allocation
     * @param {ScaleOrdinal<string, string>} color - maps from a process' name to its color
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the allocation
     */
    public animateDiskSpaceAllocation(
        process: Process,
        disk: Disk,
        color: ScaleOrdinal<string, string>,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        this.colorScale = color;
        this.updateChart(disk);
    }

    /**
     * This method gets called when a process is supposed to be deallocated.
     * @param {Process} process - the process to be deallocated
     * @param {Disk} disk - context for the deallocation
     * @param {"pre" | "post"} type - the call point, either before ("pre") or after ("post") the deallocation
     */
    public animateDiskSpaceDeallocation(
        process: Process,
        disk: Disk,
        type: "pre" | "post"
    ): void {
        if (type === "pre") {
            return;
        }
        this.updateChart(disk);
    }

    /**
     * Called at the end of a simulation run for cleanup purposes.
     * @param {Disk} disk
     */
    public resetDiskSpaceAnimation(disk: Disk): void {
        select("#diskSpaceSvg")
            .selectAll("*")
            .remove();

        select("#diskSpaceSvgTooltip").remove();
    }

    private calculatePieData(disk: Disk): PieDataWithState[] {
        const ownerOrEmpty = (p: Process | null) => (p ? p.getName() : "");
        const pieData: PieDataWithState[] = [];
        disk.blocks.forEach((value, index) => {
            const owner = ownerOrEmpty(value.owner);
            pieData.push({owner, index, size: 1, state: value.state});
        });
        return pieData;
    }

    private updateChart(disk: Disk, addMouseListener: boolean = false) {
        this.currentData = this.calculatePieData(disk);

        let slice = this.svg
            .select(".slices")
            .selectAll("path.slice")
            .data(this.pie(this.currentData), (d: any) => d.data.index + "");

        slice = slice
            .enter()
            .insert("path")
            .attr("class", "slice")
            .attr("d", this.mainArc)
            .merge(slice);

        slice.style("fill", (datum: any) => {
            if (datum.data.owner === "") {
                return this.colorEmpty;
            }
            return this.colorScale(datum.data.owner);
        });

        slice.exit().remove();

        if (!addMouseListener) {
            return;
        }

        const tooltip = select("#diskSpaceSvgTooltip");

        slice.on("mouseenter", function() {
            tooltip.style("display", "block").style("opacity", 1);
            tooltip.transition(); // this removes the scheduled transition in mouseleave
        });

        slice.on("mouseover", this.tooltipMouseOver(this));

        slice.on("mousemove", function() {
            tooltip
                .style("top", `${event.layerY + 10}px`)
                .style("left", `${event.layerX + 10}px`);
        });

        slice.on("mouseleave", function() {
            tooltip
                .transition()
                .delay(3000)
                .style("display", "none");
        });
    }

    private tooltipMouseOver(self: FixedSegmentDonutChart): (d: any) => void {
        return function(d: any) {
            const processName = nonEmpty(d.data.owner);
            const blocksUsed = self.currentData
                .filter((v) => v.owner === d.data.owner)
                .filter((v) => v.state === d.data.state)
                .reduce((prev, curr) => prev + curr.size, 0);

            const readableState = blockStateToString(d.data.state);
            const tooltip = select("#diskSpaceSvgTooltip");
            tooltip.select(".process-name-value").text(processName);
            tooltip.select(".size-used-value").text(blocksUsed);
            tooltip.select(".disk-type-value").text(readableState);
        };
    }
}

const keyOwner = (d: any) => d.data.owner;

function mergeWithFirstEqualZero(
    first: PieData[],
    second: PieData[]
): PieData[] {
    const secondSet = set();
    second.forEach((d: PieData) => secondSet.add(d.owner));
    const onlyFirst = first
        .filter((d: PieData) => !secondSet.has(d.owner))
        .map(({owner}) => ({owner, size: 0}));
    const result: PieData[] = merge([second, onlyFirst]);
    return result.sort((a, b) => ascending(a.owner, b.owner));
}

function midAngle(d: {startAngle: number; endAngle: number}): number {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
}

function nonEmpty(value: string, emptyAlternative: string = "(empty)") {
    return value === "" ? emptyAlternative : value;
}

function blockStateToString(state: BlockState): string {
    switch (state) {
        case BlockState.EMPTY:
            return "EMPTY";
        case BlockState.DISK:
            return "DISK";
        case BlockState.SWAP:
            return "SWAP";
        default:
            return "???";
    }
}

interface PieDataWithState extends PieData {
    owner: string;
    size: number;
    index: number;
    state: BlockState;
}
