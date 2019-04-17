import {extent, max, min} from "d3-array";
import {axisBottom, axisLeft} from "d3-axis";
import {scaleLinear, scaleOrdinal, schemeCategory20} from "d3-scale";
import {select} from "d3-selection";
import {line} from "d3-shape";
import "d3-transition";
import {MemStat, memStatArray} from "./memoryStatistics";
import {memStatNames} from "../StatNames";

let margin = {top: 20, right: 20, bottom: 30, left: 50};
let rect = undefined;
let width : number = 0;
let height : number = 0;
let drawingArea = null;
let xAxis: any = null;
let yAxis: any = null;
let legend: any = null;
let pathGroup: any = null;
let domainX = [0, 20];
let domainY = [0, 30];
let xScaler: any = null;
let yScaler: any = null;
let lineGenerator: any = null;
const svg = select("#memStats");
const disabledStats: string[] = [];
const color = scaleOrdinal(schemeCategory20);

/**
 * Initializes memory statistics components.
 */
function initMemStatDrawing() {
    rect = document.getElementById("memStats").getBoundingClientRect();
    width = rect.width - margin.left - margin.right;
    height = rect.height - margin.top - margin.bottom;

    drawingArea = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    xAxis = drawingArea.append("g").attr("transform", "translate(0," + height + ")").attr("class", "axis");
    yAxis = drawingArea.append("g").attr("class", "axis");
    legend = drawingArea.append("g").attr("transform", "translate(10, 10)");
    pathGroup = drawingArea.append("g");
    xScaler = scaleLinear().rangeRound([0, width]).domain(domainX);
    yScaler = scaleLinear().rangeRound([height, 0]).domain(domainY);

    lineGenerator = line()
        .x(function(d: any) {return xScaler(d.x);})
        .y(function(d: any) {return yScaler(d.y);});
    xAxis.call(axisBottom(xScaler));
    yAxis.call(axisLeft(yScaler).ticks(10).tickSize(-width));
    initLegend();
}

/**
 * Draws each not disabled stat.
 */
function drawMemData() {
    const stats: MemStat[] = [];
    memStatArray.forEach(function(s) {
        if (disabledStats.lastIndexOf(s.statName) === -1) {
            stats.push(s);
        }
    });
    drawPath(stats);
}

/**
 * Draws stat paths.
 * @param stats
 */
function drawPath(stats: MemStat[]) {
    let paths = pathGroup.selectAll("path").data(stats, function(d: MemStat) {return d.statName;});
    paths.exit().remove();
    paths = paths.enter().append("path")
        .attr("fill", "none")
        .attr("stroke", function(d:any) {return color(d.statName);})
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 1.5)
        .merge(paths);

    paths.each(function() {
        select(this).attr("d", function(d: any) {return lineGenerator(d.coordinates);} as any);
    });

    const xExtents = stats.map(function(stat) {
        return extent(stat.coordinates, ((d) => d.x));
    });
    const yExtents = stats.map(function(stat) {
        return extent(stat.coordinates, ((d) => d.y));
    });

    const xExtent = [min(xExtents, (d) => d[0]), max(xExtents, (d) => d[1])];
    const yExtent = [min(yExtents, (d) => d[0]), max(yExtents, (d) => d[1])];
    let scaleChangedX = false;
    let scaleChangedY = false;

    if ((xExtent[1] * 1.5 < domainX[1] && (xExtent[1] > 20 || domainX[1] > 20)) ||
        (yExtent[1] * 1.5 < domainY[1] && (yExtent[1] > 30 || domainY[1] > 30))) {
        while (xExtent[1] * 1.5 < domainX[1]) {
            domainX[1] /= 1.5;
            scaleChangedX = true;
        }
        while (yExtent[1] * 1.5 < domainY[1]) {
            domainY[1] /= 1.5;
            scaleChangedY = true;
        }
    } else if (xExtent[1] > domainX[1] || yExtent[1] > domainY[1]) {
        while (xExtent[1] > domainX[1]) {
            domainX[1] *= 1.5;
            scaleChangedX = true;
        }
        while (yExtent[1] > domainY[1]) {
            domainY[1] *= 1.5;
            scaleChangedY = true;
        }
    }

    if (scaleChangedX || scaleChangedY) {
        if (scaleChangedX) {
            if (domainX[1] < 20) { domainX[1] = 20; }
            xScaler.domain(domainX);
            xAxis.transition().duration(100).call(axisBottom(xScaler) as any);
        }
        if (scaleChangedY) {
            if (domainY[1] < 30) { domainY[1] = 30; }
            yScaler.domain(domainY);
            yAxis.transition().duration(100).call(axisLeft(yScaler).ticks(10).tickSize(-width) as any);
        }
        paths.each(function() {
            select(this).transition().duration(100).attr("d", function(d: any) { return lineGenerator(d.coordinates); } as any);
        });
    }
}

/**
 * Resets x,y scales of memory graph.
 */
function resetMemScales() {
    domainX = [0, 20];
    domainY = [0, 30];
    xScaler = scaleLinear().rangeRound([0, width]).domain(domainX);
    yScaler = scaleLinear().rangeRound([height, 0]).domain(domainY);
    xAxis.call(axisBottom(xScaler));
    yAxis.call(axisLeft(yScaler).ticks(10).tickSize(-width));
}

/**
 * Initializes memory statistics legend.
 */
function initLegend() {
    let lineCount = -.2;
    const lineHeight = 20;
    memStatNames.forEach(function(s) {
        lineCount++;
        const g = legend.append("g")
            .on("click", toggleStatEnabled)
            .attr("transform", "translate(10, " + lineCount * lineHeight + ")")
            .style("cursor", "pointer");
        g.append("circle").attr("fill", color(s)).attr("r", 5);
        g.append("text").text(s).attr("transform", "translate(10, " + lineHeight / 4 + ")");
    });
    legend.insert("rect", "g").attr("width", 200).attr("height",
        (legend.node() as SVGGElement).getBBox().height + lineHeight).attr("class", "legend-box");
}

/**
 * Enables or disables stats.
 */
function toggleStatEnabled() {
    const statName = select(this).select("text").text();
    const idx = disabledStats.lastIndexOf(statName);
    select(this).classed("faded", () => idx === -1);
    if (idx !== -1) disabledStats.splice(idx, 1);
    else disabledStats.push(statName);
    drawMemData();
}

export {drawMemData, resetMemScales, initMemStatDrawing};