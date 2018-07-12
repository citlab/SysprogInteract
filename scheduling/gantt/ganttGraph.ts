import {Process} from "../processor";
import {select, selectAll, style} from "d3-selection";
import {scaleBand, scaleLinear, scaleOrdinal, schemeCategory20} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {event, transition, zoomIdentity} from "d3";
import {zoom} from "d3-zoom";
import {updateStats} from "../statistics";


//visuals
var bandSize = 50;

let xScaler,
    yScaler,
    gxAxis,
    gyAxis,
    xAxis,
    yAxis,
    width,
    height,
    domainY,
    domainX,
    margin = {top: 20, right: 20, bottom: 30, left: 100},
    processBlocks = [],
    iteratorVal = 0,
    color = scaleOrdinal(schemeCategory20),
    blockGroup,
    ticks = [];


let svg = select("#gantt");



function initGantt(processList) {
    clearGantt();

    let rect = document.getElementById("gantt").getBoundingClientRect();
    width = rect.width - margin.left - margin.right;
    height = rect.height - margin.top - margin.bottom;
/*

*/
    let   drawingArea = svg.append("g")
            .attr("class", "drawingAreaGantt")
            .attr("id", "drawingAreaGantt")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");





    let calcLength = 0,
        initialWait = null;
    processList.forEach(function (p) {
        calcLength += p.remainingLength;
        if(initialWait == null || (p.arrival < initialWait)){
            initialWait = p.arrival;
        }
    })


    domainX = [0,10];//calcLength+initialWait
    domainY = [];
    processList.forEach(function (p) {
        domainY.push(p.name)
    })


    var zoomo = zoom()

        //.scaleExtent([1, Infinity])
        .translateExtent([[0,0], [domainY.length * bandSize, domainY.length * bandSize]])
        .extent([[0,0],[width,height]])
        .on("zoom", zoomfunc)

    svg.call(zoomo)
        .on("wheel.zoom", null)
        .on("dblclick.zoom", null);



    xScaler = scaleLinear().rangeRound([0, width]);
    yScaler = scaleBand().rangeRound([0,domainY.length * bandSize]);
    xScaler.domain(domainX);
    yScaler.domain(domainY);


    var defs = drawingArea.append("defs");

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


    function zoomfunc() {

        yScaler.range([0, domainY.length*bandSize].map(function(d){
            return event.transform.applyY(d);
        }));
        yAxis.call(axisLeft(yScaler));
        update();


        /*
        //UPDATE
        let blocks = blockGroup.selectAll("rect").data(processBlocks, p => p.id)
        blocks.each(function (b) {
            select(this)
                .attr("x", xScaler(b.start))
                .attr("y", yScaler(b.name))
                .attr("width", xScaler(b.end - b.start))
        })
        */



    }

    function animateGantt(process : Process, timePassed : number, color : string) {
        let block = {
                name: process.getName(),
                start: timePassed,
                end: timePassed + 1,
                id : idIterator(),
                color: color
            };
        processBlocks.push(block);

        //concatenate();


        let blocks = blockGroup.selectAll("rect").data(processBlocks, function (p) {return p.id })
        blocks.exit().remove();
        blocks = blocks.enter().append("rect")
            .attr("x", function (b) {
                return xScaler(b.start);
            })
            .attr("y", function (b) {
                return yScaler(b.name);
            })
            .attr("class", "ganttRect")
            .attr("id", b => b.id)
            .attr("height", 40)
            .attr("width", b => xScaler(b.end - b.start))
            .attr("clip-path", "url(#clipPath)")
            .style("fill", b => b.color)
            .style("fill-opacity", 1)

            .style("shape-rendering", "crispEdges")


        calcTicks()
        xAxis.call(axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));

        if(timePassed > domainX[1]){
            /*
            TODO ticksize
             */
            domainX = [0, timePassed + 10];
            xScaler = scaleLinear().rangeRound([0,width])
            xScaler.domain(domainX)
            xAxis.transition().duration(100).call(<any> axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));

            update()

        }
        //UPDATE
        blocks.each(<any>function () {
            select(this)
                .attr("x", <any> function (b) {
                    return xScaler(b.start)
                })
                .attr("y", <any> function (b) {
                    return yScaler(b.name)
                })
                .attr("width", <any> function (b) {
                    return xScaler(b.end - b.start)
                })

        })
    }

    function update() {
        blockGroup.selectAll("rect").each(function () {

            select(this)
                .attr("x", <any>function (b) {
                    return xScaler(b.start);
                })
                .attr("y", <any> function (b) {
                    return yScaler(b.name)
                })
                .attr("width",<any> function (b) {
                    return xScaler(b.end-b.start)
                })
        });
    }

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

    if(blockGroup != null){
        blockGroup.selectAll("rect").remove();

    }
    if(document.getElementById("drawingAreaGantt")) document.getElementById("drawingAreaGantt").remove();



    }

    function concatenate() {

        let pblo = processBlocks.reduce(function (x,y) {

            if(x.name == y.name && x.end == y.start){
                let block = {
                    name: x.name,
                    start: x.start,
                    end: y.end,
                    id : idIterator(),
                    color: color
                };
                return block;
            }
        });

        console.log("new array:", pblo)
    }

    function calcTicks(){
        ticks = [];
        if(processBlocks.length == 0) return ticks;

        ticks.push(processBlocks[0].start);
        ticks.push(processBlocks[processBlocks.length-1].end);

        processBlocks.forEach(function (b, index) {
            if(processBlocks.length > index+1){
                if(b.name != processBlocks[index+1].name){
                    ticks.push(b.end)
                }
            }
        })

        console.log(ticks)

        return;
    }

    function idIterator() {
    let i = iteratorVal;
    iteratorVal++;
    return i;

    }


export {animateGantt, initGantt}