import {Process} from "../processor";
import {select} from "d3-selection";
import {scaleBand, scaleLinear, scaleOrdinal, schemeCategory20} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {event} from "d3";
import {zoom} from "d3-zoom";

let bandSize = 50;
let xScaler: any;
let yScaler: any;
let xAxis: any;
let yAxis: any;
let width: number;
let height: number;
let domainY: any;
let domainX: any;
let margin = {top: 20, right: 20, bottom: 30, left: 100};
let processBlocks: any = [];
let iteratorVal = 0;
let color = scaleOrdinal(schemeCategory20);
let blockGroup: any;
let ticks: any = [];
let svg = select("#gantt");

/**
 * Initializes the gantt graph.
 * @param processList List of process to be represented by the gantt graph.
 */
function initGantt(processList: Process[]) {
    clearGantt();
    let rect = document.getElementById("gantt").getBoundingClientRect();
    width = rect.width - margin.left - margin.right;
    height = rect.height - margin.top - margin.bottom;

    let drawingArea = svg.append("g")
            .attr("class", "drawingAreaGantt")
            .attr("id", "drawingAreaGantt")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    let calcLength: number = 0,
        initialWait: number = null;

    processList.forEach(function (p) {
        calcLength += p.remainingLength;
        if(initialWait == null || (p.arrival < initialWait)){
            initialWait = p.arrival;
        }
    });

    domainX = [0,10];
    domainY = [];
    processList.forEach(function (p) {
        domainY.push(p.name)
    });

    let zoomo = zoom()
        .translateExtent([[0,0], [domainY.length * bandSize, domainY.length * bandSize]])
        .extent([[0,0],[width,height]])
        .on("zoom", zoomfunc);

    svg.call(zoomo)
        .on("wheel.zoom", null)
        .on("dblclick.zoom", null);

    xScaler = scaleLinear().rangeRound([0, width]);
    yScaler = scaleBand().rangeRound([0,domainY.length * bandSize]);
    xScaler.domain(domainX);
    yScaler.domain(domainY);

    let defs = drawingArea.append("defs");
    defs
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height);
    defs
        .append("clipPath")
        .attr("id", "clipx")
        .append("rect")
        .attr("x", -3)
        .attr("y", -10)
        .attr("width", width+3)
        .attr("height", height+margin.bottom);
    defs
        .append("clipPath")
        .attr("id", "clipy")
        .append("rect")
        .attr("x", -margin.left)
        .attr("y", -10)
        .attr("width", margin.left+1)
        .attr("height", height+15);

     xAxis = drawingArea.append("g")
        .attr('clip-path', "url(#clipx)")
        .append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(axisBottom(xScaler).ticks(1).tickSize(-height));

    yAxis = drawingArea.append("g")
        .attr("clip-path", "url(#clipy)")
        .append("g")
        .attr("class", "axis axis--y")
        .call(axisLeft(yScaler));

    blockGroup = drawingArea.append("g")
        .attr("clip-path", "url(#clip)")
}

/**
 * Defines the zooming behaviour.
 */
function zoomfunc() {
    yScaler.range([0, domainY.length*bandSize].map(function(d){
        return event.transform.applyY(d);
    }));
    yAxis.call(axisLeft(yScaler));
    update();
}

/**
 * Animates the progress of one Process.
 * @param process The process to be animated.
 * @param timePassed Time passed since last animation-cycle.
 * @param color Color of the process.
 */
function animateGantt(process : Process, timePassed : number, color : string) {
    let block = {
        name: process.getName(),
        start: timePassed,
        end: timePassed + 1,
        id : idIterator(),
        color: color
    };

    processBlocks.push(block);
    let blocks = blockGroup.selectAll("rect").data(processBlocks, function (p: any) {return p.id });
    blocks.exit().remove();
    blocks = blocks.enter().append("rect")
        .attr("x", function (b: any) {
            return xScaler(b.start);
        })
        .attr("y", function (b: any) {
            return yScaler(b.name);
        })
        .attr("class", "ganttRect")
        .attr("id", function(b: any){return b.id})
        .attr("height", 40)
        .attr("width", function(b: any){return xScaler(b.end - b.start)})
        .attr("clip-path", "url(#clipPath)")
        .style("fill", function(b: any){return b.color})
        .style("fill-opacity", 1)
        .style("shape-rendering", "crispEdges");

    calcTicks();
    xAxis.call(axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));

    if(timePassed > domainX[1]){
        domainX = [0, timePassed + 10];
        xScaler = scaleLinear().rangeRound([0,width]);
        xScaler.domain(domainX);
        xAxis.transition().duration(100).call(<any> axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));
        update()
    }

    blocks.each(<any>function () {
        select(this)
            .attr("x", <any> function (b:any) {
                return xScaler(b.start)
            })
            .attr("y", <any> function (b: any) {
                return yScaler(b.name)
            })
            .attr("width", <any> function (b: any) {
                return xScaler(b.end - b.start)
            })
    })
}

/**
 * d3.js update cycle.
 */
function update() {
    blockGroup.selectAll("rect").each(function () {
        select(this)
            .attr("x", <any>function (b: any) {
                return xScaler(b.start);
            })
            .attr("y", <any> function (b: any) {
                return yScaler(b.name)
            })
            .attr("width",<any> function (b:any) {
                return xScaler(b.end-b.start)
            })
    });
}

/**
 * Resets the gantt-graph.
 */
function clearGantt() {
    xScaler = null;
    yScaler = null;
    width = null;
    height = null;
    domainY = [];
    domainX = [0, 20];
    processBlocks = [];
    iteratorVal = 0;
    color = scaleOrdinal(schemeCategory20);

    if(blockGroup != null) blockGroup.selectAll("rect").remove();
    if(document.getElementById("drawingAreaGantt")) document.getElementById("drawingAreaGantt").remove();
}


/**
 * Calculates the tick-indices.
 */
function calcTicks(){
    ticks = [];
    if(processBlocks.length == 0) return ticks;
    ticks.push(processBlocks[0].start);
    ticks.push(processBlocks[processBlocks.length-1].end);

    processBlocks.forEach(function (b: any, index: number) {
        if(processBlocks.length > index+1){
            if(b.name != processBlocks[index+1].name){
                ticks.push(b.end)
            }
        }
    });
    return;
}

/**
 * Helps generating a continuous id.
 */
function idIterator() {
    let i = iteratorVal;
    iteratorVal++;
    return i;
}

/**
 * Removes the corresponding <g>.
 */
function removeGantt() {
    select("#drawingAreaGantt").remove();
}

export {animateGantt, initGantt, removeGantt}