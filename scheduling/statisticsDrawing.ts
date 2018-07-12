/**
 * Created by vhenning on 19.07.17.
 */
import {Stat, statArray} from "./statistics";
import {statNames} from "./StatNames";
import {select} from "d3-selection";
import {scaleLinear, scaleOrdinal, schemeCategory20} from "d3-scale";
import {line} from "d3-shape";
import {axisBottom, axisLeft} from "d3-axis";
import {extent, min, max} from "d3-array";
import "d3-transition";

//general stuff initialization
let margin = {top: 20, right: 20, bottom: 30, left: 50},
    rect = document.getElementById("stats").getBoundingClientRect(),
    width = rect.width - margin.left - margin.right,
    height = rect.height - margin.top - margin.bottom,
    svg = select("#stats"),
    disabledStats = [];

//d3 stuff initialization
let drawingArea = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
    xAxis = drawingArea.append("g").attr("transform", "translate(0," + height + ")").attr("class", "axis"),
    yAxis = drawingArea.append("g").attr("class", "axis"),
    legend = drawingArea.append("g").attr("transform", "translate(10,10)"),
    pathGroup = drawingArea.append("g"),
    domainX = [0,20],
    domainY = [0,30],
    xScaler = scaleLinear().rangeRound([0,width]).domain(domainX),
    yScaler = scaleLinear().rangeRound([height,0]).domain(domainY),
    lineGenerator = line()
        .x(function(d : any) { return xScaler(d.x); })
        .y(function(d : any) { return yScaler(d.y); }),
    color = scaleOrdinal(schemeCategory20);

xAxis.call(axisBottom(xScaler));
yAxis.call(axisLeft(yScaler).ticks(10).tickSize(-width));
initLegend();


function drawData(){
    let stats = [];
    statArray.forEach(function(s){
        if (disabledStats.lastIndexOf(s.statName) == -1){
            stats.push(s);
        }
    })
    drawPaths(stats);
}

function drawPaths(stats : Stat[]){
    let paths = pathGroup.selectAll("path").data(stats, function(d : Stat){return d.statName});
    paths.exit().remove();
    paths = paths.enter().append("path")
        .attr("fill", "none")
        .attr("stroke", function(d){return color(d.statName)})
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .merge(paths);

    //update paths
    paths.each(function(){
        select(this).attr("d", <any> function(d){ return lineGenerator(d.coordinates)});
    });

    //calculate extent of the data
    let xExtents = stats.map(function(stat){
            return extent(stat.coordinates, (d => {return d.x}))
        }),
        yExtents = stats.map(function(stat){
            return extent(stat.coordinates, (d => {return d.y}))
        });
    let xExtent = [min(xExtents, d => {return d[0]}), max(xExtents, d => {return d[1]})],
        yExtent = [min(yExtents, d => {return d[0]}), max(yExtents, d => {return d[1]})];


    let scaleChangedX = false, scaleChangedY = false;
    if((xExtent[1]*1.5 < domainX[1] && (xExtent[1] > 20 || domainX[1] > 20)) || (yExtent[1]*1.5 < domainY[1] && (yExtent[1] > 30 || domainY[1] > 30))){
        while(xExtent[1]*1.5 < domainX[1]) {
            domainX[1] /= 1.5;
            scaleChangedX = true;
        }
        while(yExtent[1]*1.5 < domainY[1]){
            domainY[1] /= 1.5;
            scaleChangedY = true;
        }
    } else if(xExtent[1] > domainX[1] || yExtent[1] > domainY[1]){
        while(xExtent[1] > domainX[1]) {
            domainX[1] *= 1.5;
            scaleChangedX = true;
        }
        while(yExtent[1] > domainY[1]){
            domainY[1] *= 1.5;
            scaleChangedY = true;
        }
    }

    if(scaleChangedX || scaleChangedY){
        if(scaleChangedX){
            if (domainX[1] < 20) domainX[1] = 20;
            xScaler.domain(domainX);
            xAxis.transition().duration(100).call(<any>axisBottom(xScaler));

        }
        if(scaleChangedY){
            if (domainY[1] < 30) domainY[1] = 30;
            yScaler.domain(domainY);
            yAxis.transition().duration(100).call(<any>axisLeft(yScaler).ticks(10).tickSize(-width));
        }
        paths.each(function(){
            select(this).transition().duration(100).attr("d",<any> function(d){ return lineGenerator(d.coordinates)});
        });
    }
}

function resetScales(){
    domainX = [0,20];
    domainY = [0,30];
    xScaler = scaleLinear().rangeRound([0,width]).domain(domainX);
    yScaler = scaleLinear().rangeRound([height,0]).domain(domainY);
    xAxis.call(axisBottom(xScaler));
    yAxis.call(axisLeft(yScaler).ticks(10).tickSize(-width));
}

function initLegend(){
    let lineCount = -.2, lineHeight = 20;
    statNames.forEach(function(s){
        lineCount ++;
        let g = legend.append("g")
            .on("click", toggleStatEnabled)
            .attr("transform", "translate(10, " + lineCount * lineHeight + ")")
            .style("cursor", "pointer");
        g.append("circle").attr("fill", color(s)).attr("r", 5);
        g.append("text").text(s).attr("transform", "translate(10," + lineHeight/4 + ")");
    })
    legend.insert("rect", "g").attr("width", 200).attr("height", (<SVGGElement> legend.node()).getBBox().height + lineHeight).attr("class", "legend-box");
}

function toggleStatEnabled(){
    let statName = select(this).select("text").text();
    let idx =  disabledStats.lastIndexOf(statName);
    select(this).classed("faded", () => {return idx == -1});
    if(idx != -1){
        disabledStats.splice(idx,1);
    } else {
        disabledStats.push(statName);
    }
    drawData();
}

export {drawData, resetScales};