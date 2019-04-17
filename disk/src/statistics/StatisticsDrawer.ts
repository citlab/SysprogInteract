/*
 * Created by Clemens Gläser on 08.04.18 12:58
 */

import {extent, max, min} from "d3-array";
import {axisBottom, axisLeft} from "d3-axis";
import {
    ScaleLinear,
    scaleLinear,
    ScaleOrdinal,
    scaleOrdinal,
    schemeCategory20
} from "d3-scale";
import {select, Selection} from "d3-selection";
import {Line, line} from "d3-shape";
import {Coordinate} from "./models";

export interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface StatLike {
    statName: string;
    coordinates: Coordinate[];
}

interface Change {
    updated: {
        x: boolean;
        y: boolean;
    };
}

export interface DrawerOptions {
    margin: Margin;
    maxX: number;
    maxY: number;
}

const getX = (d: any): number => d.x;
const getY = (d: any): number => d.y;
const index0 = (d: any): number => d[0];
const index1 = (d: any): number => d[1];

export class StatisticsDrawer {
    public disabledStats: string[] = [];
    private svg: Selection<SVGSVGElement, {}, HTMLElement, any>;
    private readonly svgWidth: number = 0;
    private readonly svgHeight: number = 0;
    private readonly options: DrawerOptions = {
        margin: {
            bottom: 30,
            left: 50,
            right: 20,
            top: 20
        },
        maxX: 20,
        maxY: 30
    };
    private drawingArea: Selection<SVGGElement, {}, HTMLElement, any>;
    private xAxisGroup: Selection<SVGGElement, {}, HTMLElement, any>;
    private yAxisGroup: Selection<SVGGElement, {}, HTMLElement, any>;
    private legendGroup: Selection<SVGGElement, {}, HTMLElement, any>;
    private pathGroup: Selection<SVGGElement, {}, HTMLElement, any>;

    private domainX: number[] = [];
    private domainY: number[] = [];

    private xScaler!: ScaleLinear<number, number>;
    private yScaler!: ScaleLinear<number, number>;
    private lineGenerator: Line<Coordinate>;
    private colorScale: ScaleOrdinal<string, string> = scaleOrdinal(
        schemeCategory20
    );

    constructor(
        private htmlId: string,
        private statArray: StatLike[],
        options: Partial<DrawerOptions> = {}
    ) {
        this.options = {...this.options, ...options};

        const rect = document.getElementById(htmlId)!.getBoundingClientRect();
        const {margin} = this.options;
        this.svgWidth = rect.width - margin.left - margin.right;
        this.svgHeight = rect.height - margin.top - margin.bottom;
        this.svg = select(`#${htmlId}`);
        this.drawingArea = this.svg
            .append<SVGGElement>("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        this.xAxisGroup = this.drawingArea
            .append<SVGGElement>("g")
            .attr("transform", `translate(0,${this.svgHeight})`)
            .attr("class", "x axis");
        this.yAxisGroup = this.drawingArea
            .append<SVGGElement>("g")
            .attr("class", "y axis");
        this.legendGroup = this.drawingArea
            .append<SVGGElement>("g")
            .attr("transform", "translate(10, 10)");
        this.pathGroup = this.drawingArea.append<SVGGElement>("g");

        this.lineGenerator = line<Coordinate>()
            .x((d: Coordinate) => this.xScaler(d.x))
            .y((d: Coordinate) => this.yScaler(d.y));

        this.resetScales();
        this.initLegend();
    }

    public draw() {
        const filteredStats = this.statArray.filter(
            (s) => this.disabledStats.lastIndexOf(s.statName) === -1
        );

        this.drawPath(filteredStats, this.getLineGen);
    }

    public resetScales() {
        this.domainX = [0, this.options.maxX];
        this.domainY = [0, this.options.maxY];
        this.xScaler = scaleLinear()
            .rangeRound([0, this.svgWidth])
            .domain(this.domainX);
        this.yScaler = scaleLinear()
            .rangeRound([this.svgHeight, 0])
            .domain(this.domainY);
        this.xAxisGroup.call(this.newXAxis());
        this.yAxisGroup.call(this.newYAxis());
    }

    private getLineGen: (d: StatLike) => string | null = (d: StatLike) =>
        this.lineGenerator(d.coordinates);

    private drawPath(
        stats: StatLike[],
        lineGenAccessor: (d: StatLike) => string | null
    ) {
        let paths: Selection<
            SVGPathElement,
            StatLike,
            SVGGElement,
            any
        > = this.pathGroup
            .selectAll<SVGPathElement, StatLike>("path")
            .data(stats, (d: StatLike): string => d.statName);

        paths.exit().remove();
        paths = paths
            .enter()
            .append<SVGPathElement>("path")
            .attr("fill", "none")
            .attr("stroke", (d: StatLike) => this.colorScale(d.statName))
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 1.5)
            .merge(paths);

        // update paths
        paths.each(function(this: any) {
            select<SVGPathElement, StatLike>(this).attr("d", lineGenAccessor);
        });

        const newDomain = this.updateDomains(stats);

        const scaleChangedX: boolean = newDomain.updated.x;
        const scaleChangedY: boolean = newDomain.updated.y;
        // update if they domains were changed
        if (scaleChangedX || scaleChangedY) {
            if (scaleChangedX) {
                this.xScaler.domain(this.domainX);
                this.xAxisGroup
                    .transition()
                    .duration(100)
                    .call(this.newXAxis());
            }

            if (scaleChangedY) {
                this.yScaler.domain(this.domainY);
                this.yAxisGroup
                    .transition()
                    .duration(100)
                    .call(this.newYAxis());
            }

            // redraw paths
            paths.each(function(this: any) {
                select<SVGPathElement, StatLike>(this)
                    .transition()
                    .duration(100)
                    .attr("d", lineGenAccessor);
            });
        }
    }

    private updateDomains(stats: StatLike[]): Change {
        const [, xMax, , yMax] = extents(stats);

        let changedX: boolean = false;
        let changedY: boolean = false;

        // scale down if data range is significantly smaller than current domain
        if (
            (xMax * 1.5 < this.domainX[1] &&
                (xMax > this.options.maxX ||
                    this.domainX[1] > this.options.maxX)) ||
            (yMax * 1.5 < this.domainY[1] &&
                (yMax > this.options.maxY ||
                    this.domainY[1] > this.options.maxY))
        ) {
            // scale down x
            while (xMax * 1.5 < this.domainX[1]) {
                this.domainX[1] /= 1.5;
                changedX = true;
            }
            // scale down y
            while (yMax * 1.5 < this.domainY[1]) {
                this.domainY[1] /= 1.5;
                changedY = true;
            }
        } else if (xMax > this.domainX[1] || yMax > this.domainY[1]) {
            // data range is bigger than current domain
            // scale up x
            while (xMax > this.domainX[1]) {
                this.domainX[1] *= 1.5;
                changedX = true;
            }
            // scale up y
            while (yMax > this.domainY[1]) {
                this.domainY[1] *= 1.5;
                changedY = true;
            }
        }

        // New Domain cannot be smaller than the default domain
        if (changedX) {
            this.domainX[1] = Math.max(this.domainX[1], this.options.maxX);
        }
        if (changedY) {
            this.domainY[1] = Math.max(this.domainY[1], this.options.maxY);
        }

        return {
            updated: {
                x: changedX,
                y: changedY
            }
        };
    }

    private initLegend() {
        let lineCount = -0.2;
        const lineHeight = 20;
        this.statArray.map((v) => v.statName).forEach((s) => {
            lineCount++;
            const g = this.legendGroup
                .append("g")
                .on("click", createToggleCallback(this))
                .attr(
                    "transform",
                    "translate(10, " + lineCount * lineHeight + ")"
                )
                .style("cursor", "pointer");
            g.append("circle")
                .attr("fill", this.colorScale(s))
                .attr("r", 5);
            g.append("text")
                .text(s)
                .attr("transform", "translate(10, " + lineHeight / 4 + ")");
        });

        // TODO testing

        this.legendGroup
            .insert("rect", "g")
            .attr("width", 200)
            .attr(
                "height",
                (this.legendGroup.node() as SVGGElement).getBBox().height +
                    lineHeight
            )
            .attr("class", "legend-box");
    }

    // creates new axis objects every time if necessary, so the numbers update properly
    private newXAxis() {
        return axisBottom(this.xScaler);
    }

    private newYAxis() {
        return axisLeft(this.yScaler)
            .ticks(10)
            .tickSize(-this.svgWidth);
    }
}

function createToggleCallback(
    drawer: StatisticsDrawer
): (thisArg: any) => void {
    return function(this: any) {
        const statName = select(this)
            .select("text")
            .text();
        const idx = drawer.disabledStats.lastIndexOf(statName);
        select(this).classed("faded", () => idx === -1);

        if (idx !== -1) {
            drawer.disabledStats.splice(idx, 1);
        } else {
            drawer.disabledStats.push(statName);
        }
        drawer.draw();
    };
}

function extents(stats: StatLike[]): number[] {
    const xExtents = stats.map((stat) => extent(stat.coordinates, getX));
    const yExtents = stats.map((stat) => extent(stat.coordinates, getY));

    if (!xExtents || !yExtents) {
        throw new Error("Stats mapping not possible!");
    }

    const xExtent = [min(xExtents, index0), max(xExtents, index1)]!;
    const yExtent = [min(yExtents, index0), max(yExtents, index1)]!;

    return [xExtent[0]!, xExtent[1]!, yExtent[0]!, yExtent[1]!];
}
