import {Process} from "../processor";
import {select} from "d3-selection";
import {scaleBand, scaleLinear, scaleOrdinal, schemeCategory20} from "d3-scale";
import {axisBottom, axisRight} from "d3-axis";
import {line} from "d3-shape";

let width: number;
let height: number;
let margin = {top: 20, right: 20, bottom: 30, left: 20};
let svg = select("#resourceMonitor");
let domainX: any[];
let domainY: any[];
let ticks: any[];
let xScaler: any;
let yScaler: any;
let xAxis: any;
let yAxis: any;
let lineGroup: any;
let activeLineGroup: any;
let startGroup: any;
let endGroup: any;
let flagGroup: any;
let bandSize: number = 110;
let circleHOffset: number = bandSize * (3 / 5);
let yOffset: number = 35;
let flagOffset: number = 15;
let drawingArea: any;
let startPoints: any[] = [];
let endPoints: any[] = [];
let lifelines: any[] = [];
let activeLifeLines: any[] = [];
let firedEvents: any[] = [];
let color = scaleOrdinal(schemeCategory20);
let flagWidth: number = 30;
let flagHeight: number = 30;
let flagYOffset: number = 65;
let lineGenerator: any = line()
        .x(function (d: any) {
            return xScaler(d.x);
        })
        .y(function (d: any) {
            return yScaler(d.y) + circleHOffset + yOffset;
        });

/**
 * Initializes resource monitor.
 * @param processList
 */
function initResMonitor(processList: Process[]) {
    domainX = [0, 20];
    domainY = [];
    processList.sort(function (a: Process,b: Process) {return a.arrival - b.arrival;});
    processList.forEach( function (p) {domainY.push(p.name);});
    setSizeResMon();

    let rect = document.getElementById("resourceMonitor").getBoundingClientRect();
    width = rect.width - margin.left - margin.right;
    height = rect.height - margin.top - margin.bottom;
    xScaler = scaleLinear().rangeRound([0, width]);
    yScaler = scaleBand().rangeRound([0, domainY.length * bandSize]);
    xScaler.domain(domainX);
    yScaler.domain(domainY);

    drawingArea = svg.append("g")
        .attr("class", "drawingAreaResMon")
        .attr("id", "drawingAreaResMon")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let defs = drawingArea.append("defs");
    defs
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("x", -20)
        .attr("y", 0)
        .attr("width", width + margin.left)
        .attr("height", height);
    defs
        .append("clipPath")
        .attr("id", "clipx")
        .append("rect")
        .attr("x", -3)
        .attr("y", -10)
        .attr("width", width + 10)
        .attr("height", height + margin.bottom);
    defs
        .append("clipPath")
        .attr("id", "clipy")
        .append("rect")
        .attr("x", -margin.left)
        .attr("y", -10)
        .attr("width",margin.left+1)
        .attr("height", height + 15);

    xAxis = drawingArea.append("g")
        .attr("clip-path", "url(#clipx)")
        .append("g")
        .attr("class", "axis axis--x")
        .attr("id", "xAxisResMon")
        .attr("transform", "translate(0," + height + ")")
        .call(axisBottom(xScaler).ticks(20));

    yAxis = axisRight(yScaler);

    drawingArea.append("g")
        .attr("class", "jorst")
        .attr("id", "yAxisResMon")
        .call(customYAxis);

    function customYAxis(g: any){
        g.call(yAxis);
        g.select(".domain").remove();
    }

    lineGroup = drawingArea.append("g")
        .attr("clip-path", "url(#clip)");

    activeLineGroup = drawingArea.append("g")
        .attr("clip-path", "url(#clip)");

    startGroup = drawingArea.append("g")
        .attr("clip-path", "url(#clip)");

    endGroup = drawingArea.append("g")
        .attr("clip-path", "url(#clip)");

    flagGroup = drawingArea.append("g")
        .attr("clip-path", "url(#clip)");
}

/**
 * Updates resource monitor after processes where added to the simulation.
 * Seems to be a bit clumsy but due to possible animation purposes it maybe is better not to reuse the init function.
 * @param processList
 */
function updateResMon(processList: Process[]) {
    deleteResMon(true);
    initResMonitor(processList);
}

/**
 * Controls the progress animation of the resource monitor.
 * Passive lines "- - - - -" for all arrived and unfinished processes.
 * Active Lines "---------" for all active Processes.
 * Pushes two points into []. One at t=actual and one at t+1 to create a line.
 * LineGenerator does some weird stuff so some 'workaround-ish' code appears.
 * @param processList
 * @param timePassed
 */
function progressDataResMonitor(processList : Process[], timePassed: number) {
    processList.forEach(function (p: Process) {
        lifelines.forEach(function (l: any) {
            if(l.name == p.name){
                l.coordinates.push({x: timePassed, y: l.name});
                animateDataResMonitor("processing_passive", timePassed);
                l.coordinates.push({x: timePassed+1, y: l.name});
                animateDataResMonitor("processing_passive", timePassed);
            }
        });
    });

    if(processList[0]) {
        let p: Process = processList[0];
        if (activeLifeLines.length == 0) {
            let activeLifeLine: any = {
                id: timePassed,
                name: p.name,
                color: color(p.name),
                coordinates: [{x: timePassed, y: p.name}]
            };
            activeLifeLines.push(activeLifeLine);
            animateDataResMonitor("processing_active", timePassed);
            activeLifeLines[activeLifeLines.length-1].coordinates.push({x: timePassed+1, y: p.name});
            animateDataResMonitor("processing_active", timePassed);
        } else {
            let x : any = activeLifeLines[activeLifeLines.length-1];
            if(x.name == p.name){
                x.coordinates.push({x: timePassed+1, y: p.name});
                animateDataResMonitor("processing_active", timePassed);
            } else {
                let activeLifeLine: any = {
                    id: timePassed,
                    name: p.name,
                    color: color(p.name),
                    coordinates: [{x: timePassed, y: p.name}]
                };
                activeLifeLines.push(activeLifeLine);
                animateDataResMonitor("processing_active", timePassed);

                activeLifeLines[activeLifeLines.length-1]
                    .coordinates.push({x: timePassed+1, y: p.name});
                animateDataResMonitor("processing_active", timePassed);
            }
        }
    }
}

/**
 * Adds the start to a process-lifeline.
 * @param processes
 * @param timePassed
 */
function arrivalResMon(processes: Process[], timePassed: number) {
    processes.forEach(function (p) {
        let start = {
            name: p.name,
            arrival: p.arrival,
            color: color(p.name),
        };
        startPoints.push(start);

        let x: any[] = [];
        let lifeline = {
            name: p.name,
            color: color(p.name),
            coordinates: x
        };
        lifelines.push(lifeline);
    });
    animateDataResMonitor("arrival", timePassed);
}

/**
 * Adds the end to a process-lifeline.
 * @param process
 * @param timePassed
 */
function finishingResMon(process: Process, timePassed: number) {
    let end = {
        name: process.name,
        end: timePassed,
        color: color(process.name)
    };
    endPoints.push(end);
    animateDataResMonitor("finishing", timePassed)
}

/**
 * Animates the resource monitor.
 * @param status
 * @param timePassed
 */
function animateDataResMonitor(status: String, timePassed: number) {
    switch (status) {
        case "arrival":
            let starts = startGroup.selectAll("circle").data(startPoints, function (l: any) { return l.name });
            starts.exit().remove();
            starts = starts.enter().append("circle")
                .attr("cx", function (l: any) {
                    return xScaler(l.arrival);
                })
                .attr("cy", function (l: any) {
                    return yScaler(l.name) + circleHOffset + yOffset;
                })
                .attr("r", 5)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .style("fill", function (l: any) {
                    return l.color;
                });
            break;

        case "processing_passive":
            let paths = lineGroup.selectAll("path").data(lifelines, function (l: any) {return l.name});
            paths.exit().remove();
            paths.enter().append("path")
                .attr("fill", "none")
                .attr("stroke",function (l: any) {
                    return l.color;
                })
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 2)
                .merge(paths);

            paths.each(function () {
                select(this)
                    .attr("d", function(d: any){
                        return lineGenerator(d.coordinates);
                    } as any)
                    .attr("stroke-dasharray", "3,3")

            });
            break;

        case "processing_active":
            let activePaths = activeLineGroup.selectAll("path").data(activeLifeLines, function (l: any) {
                return l.id;
            });
            activePaths.exit().remove();
            activePaths.enter().append("path")
                .attr("fill", "none")
                .attr("stroke", function (l: any) {
                    return l.color;
                })
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 4.0)
                .merge(activePaths);
            activePaths.each(function () {
                select(this)
                    .attr("d", function (d: any) {return lineGenerator(d.coordinates);} as any)
            });
            break;

        case "finishing":
            let ends = endGroup.selectAll("circle").data(endPoints, function (l: any) { return l.name});
            ends.exit().remove();
            ends = ends.enter().append("circle")
                .attr("cx", function (l: any) {
                    return xScaler(l.end);
                })
                .attr("cy", function (l: any) {
                    return yScaler(l.name) + circleHOffset + yOffset;
                })
                .attr("r", 5)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .style("fill", function (l: any) {
                    return l.color;
                });
            break;
    }

    calcTicks();
    xAxis.transition().duration(100).call(<any> axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));
    if(timePassed > domainX[1] - 1){
        domainX[1] = domainX[1] + ((domainX[1] * 5) / 100);
        xScaler = scaleLinear().rangeRound([0,width]);
        xScaler.domain(domainX);
        xAxis.transition().duration(100).call(<any> axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));
        update();
    }
}

/**
 * Updates drawing.
 */
function update(){
    startGroup.selectAll("circle").each(function () {
        select(this)
            .attr("cx", function (l: any) {
               return xScaler(l.arrival);
            })
    });

    lineGroup.selectAll("path").each(function () {
        select(this)
            .attr("d", function (d: any) {
                return lineGenerator(d.coordinates);
            } as any)
    });

    activeLineGroup.selectAll("path").each(function () {
        select(this)
            .attr("d", function (d: any) {
                return lineGenerator(d.coordinates);
            } as any)
    });

    endGroup.selectAll("circle").each(function () {
        select(this)
            .attr("cx", function (l: any) {
                return xScaler(l.end)
            })
    });

    flagGroup.selectAll("rect").each(function () {
       select(this)
            .attr("x", function (e: any) {
                return xScaler(e.timePassed) - flagOffset;
            })
    });

    flagGroup.selectAll("text").each(function () {
        select(this)
            .attr("x", function (e: any) {
                return xScaler(e.timePassed) - flagOffset + flagWidth/2;
        })
    });

    flagGroup.selectAll("tspan").each(function () {
        select(this)
            .attr("x", function (e: any) {
                return xScaler(e.timePassed) - flagOffset + flagWidth/2;
            })
    });
}

/**
 * Adds a triggered event to the resource monitor.
 * @param event
 * @param status
 * @param timePassed
 * @param processName
 */
function flagEvent(event: any, status: string, timePassed: number, processName: String) {
    let firedEvent : any = {
        event: event,
        status: status,
        timePassed: timePassed,
        processName: processName,
        id: firedEvents.length
    };
    firedEvents.push(firedEvent);
    let events = flagGroup.selectAll("rect").data(firedEvents, function (e: any) {return e.id});
    events.exit().remove();

    switch (event.kind){
        case "initialMemory":
            events.enter().append("rect")
                .attr("x", function (e: any){
                    return xScaler(e.timePassed) - flagOffset;
                })
                .attr("y", function (e: any){
                    return yScaler(e.processName) + flagYOffset;
                })
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("height", flagHeight)
                .attr("width", flagWidth)
                .style("stroke", function (e: any) {
                    if(e.status == "granted") return "green";
                    if(e.status == "declined") return "red";
                })
                .style("fill", function (e: any) {
                    if(e.status == "granted") return "#33cc33";
                    if(e.status == "declined") return "red";
                })
                .style("fill-opacity", .5)
                .attr("pointer-events", "all");
            break;

        case "closingMemory":
            events.enter().append("rect")
                .attr("x", function (e: any) {
                    return xScaler(e.timePassed) - flagOffset;
                })
                .attr("y", function (e: any){
                    return yScaler(e.processName) + flagYOffset;
                })
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("height", flagHeight)
                .attr("width", flagWidth)
                .style("stroke", "grey")
                .style("fill", "grey")
                .style("fill-opacity", 0.5);
            break;

        case "addMemory":
            events.enter().append("rect")
                .attr("x", function (e: any) {
                    return xScaler(e.timePassed) - flagOffset;
                })
                .attr("y", function (e: any) {
                    return yScaler(e.processName) + flagYOffset;
                })
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("height", flagHeight)
                .attr("width", flagWidth)
                .style("stroke", function (e: any) {
                    if(e.status == "granted") return "green";
                    if(e.status == "declined") return "red";
                })
                .style("fill", function (e: any) {
                    if(e.status == "granted") return "#33cc33";
                    if(e.status == "declined") return "red";
                })
                .style("fill-opacity", .5);
            break;

        case "exclusiveRes":
            events.enter().append("rect")
                .attr("x", (e : any) => xScaler(e.timePassed) - flagOffset)
                .attr("y", (e : any) => yScaler(e.processName) + flagYOffset)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("height", flagHeight)
                .attr("width", flagWidth)
                .style("stroke", function (e: any) {
                    if(e.status == "granted") return "black";
                    if(e.status == "declined") return "red";
                })
                .style("fill", function (e: any) {
                    if(e.status == "granted") return "#9999ff";
                    if(e.status == "declined") return "red"
                })
                .style("fill-opacity", .5);
            break;

        case "freeExRes":
            events.enter().append("rect")
                .attr("x", (e : any) => xScaler(e.timePassed) - flagOffset)
                .attr("y", (e : any) => yScaler(e.processName) + flagYOffset)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("height", flagHeight)
                .attr("width", flagWidth)
                .style("stroke", "black")
                .style("fill", "#9900ff")
                .style("fill-opacity", .5);
            break;
    }
    let texts = flagGroup.selectAll("text").data(firedEvents, function (e: any) {return e.id});
    texts.exit().remove();

    switch (event.kind){
        case "initialMemory":
            if(status == "granted"){
                texts.enter().append("text")
                    .attr("x", function (e: any) {
                        return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                    })
                    .attr("y", function (e: any) {
                        return yScaler(e.processName) + flagYOffset + flagHeight/2;
                    })
                    .attr("class", "fa")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "20px")
                    .text("\uf1b2")
                    .style("fill", "white");
            }
            if(status == "declined"){
                texts.enter().append("text")
                    .attr("x", function (e: any) {
                        return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                    })
                    .attr("y", function (e: any) {
                        return yScaler(e.processName) + flagYOffset + flagHeight/2;
                    })
                    .attr("class", "fa")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "20px")
                    .text("\uf1b2")
                    .style("fill", "white");

            }
            break;

        case "closingMemory":
            texts.enter().append("text")
                .attr("x", function (e: any) {
                    return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                })
                .attr("y", function (e: any) {
                    return yScaler(e.processName) + flagYOffset + flagHeight/2;
                })
                .attr("class", "fa")
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "central")
                .attr("font-size", "20px")
                .text("\uf1b2")
                .style("fill", "white");
            break;

        case "addMemory":
            if(status == "granted"){
                texts.enter().append("text")
                    .attr("x", function (e: any) {
                        return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                    })
                    .attr("y", function (e: any) {
                        return yScaler(e.processName) + flagYOffset + flagHeight/2;
                    })
                    .attr("class", "fa")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "20px")
                    .text("\uf1b3")
                    .style("fill", "white");
            }
            if(status == "declined"){
                texts.enter().append("text")
                    .attr("x", function (e: any) {
                        return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                    })
                    .attr("y", function (e: any) {
                        return yScaler(e.processName) + flagYOffset + flagHeight/2;
                    })
                    .attr("class", "fa")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "20px")
                    .text("\uf1b3")
                    .style("fill", "white");
            }
            break;

        case "exclusiveRes":
            if(status == "granted"){
                texts.enter().append("text")
                    .attr("x", function (e: any) {
                        return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                    })
                    .attr("y", function (e: any) {
                        return yScaler(e.processName) + flagYOffset + flagHeight/2;
                    })
                    .attr("class", "fa")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "20px")
                    .text("\uf15c")
                    .style("fill", "white");
            }
            if(status == "declined"){
                texts.enter().append("text")
                    .attr("x", function (e: any) {
                        return xScaler(e.timePassed) - flagOffset + flagWidth/2;
                    })
                    .attr("y", function (e: any) {
                        return yScaler(e.processName) + flagYOffset + flagHeight/2;
                    })
                    .attr("class", "fa")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "20px")
                    .text("\uf15c")
                    .style("fill", "white");
            }
            break;

        case "freeExRes":
            texts.enter().append("text")
                .attr("x", (e : any) => xScaler(e.timePassed) - flagOffset + flagWidth/2)
                .attr("y", (e : any) => yScaler(e.processName) + flagYOffset + flagHeight/2)
                .attr("class", "fa")
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "central")
                .attr("font-size", "20px")
                .text("\uf15c")
                .style("fill", "white");
            break;
    }
}

/**
 * Calculates appropriate size for svg.
 */
function setSizeResMon() {
    let size: number;
    if ((size = domainY.length * bandSize + margin.top + margin.bottom) > 50) {
        document.getElementById("resourceMonitor").setAttribute("height", size + "px");
    } else {
        document.getElementById("resourceMonitor").setAttribute("height", 50 + "px");
    }
}

/**
 * Deletes drawing area html element.
 * @param resManAllowed
 */
function deleteResMon(resManAllowed: boolean) {
    if(resManAllowed){
        let x: Element = document.getElementById("drawingAreaResMon");
        x.parentNode.removeChild(x);
    }
}

/**
 * Updates resource monitor with given process list. If used with [], all processes will be removed.
 * @param resManAllowed
 * @param processList
 */
function removeProcessRes(resManAllowed: boolean, processList: Process[]){
    if(resManAllowed) updateResMon(processList);
}

/**
 * Resets resource Monitor
 * @param resManAllowed
 */
function resetResMon(resManAllowed: boolean) {
    if(resManAllowed){
        activeLineGroup.selectAll("path").remove();
        endGroup.selectAll("circle").remove();
        lineGroup.selectAll("path").remove();
        startGroup.selectAll("circle").remove();
        flagGroup.selectAll("rect").remove();
        domainX = [0, 20];
        xScaler = scaleLinear().rangeRound([0, width]);
        xScaler.domain(domainX);
        domainY = [];
        ticks = [];
        startPoints = [];
        endPoints = [];
        lifelines = [];
        activeLifeLines = [];
        firedEvents = [];
        xAxis.transition().duration(100).call(<any> axisBottom(xScaler).ticks(ticks.length).tickValues(ticks).tickSize(-height));
        update();
    }
}

/**
 * Calculates reasonable ticks.
 */
function calcTicks(){
    ticks = [];
    ticks.splice(ticks.length-1, 1);
    ticks.push(domainX[1]);
    activeLifeLines.forEach(function (l, index) {
        if(activeLifeLines[index+1]){
            if (activeLifeLines[index].name != activeLifeLines[index+1].name) {
                ticks.push(activeLifeLines[index].id);
            }
            if(activeLifeLines[index].id != activeLifeLines[index+1].id + 1){
                ticks.push(activeLifeLines[index].id);
            }
        }else{
            ticks.push(activeLifeLines[index].id);
        }
    })
}

export {initResMonitor, deleteResMon, updateResMon, arrivalResMon, finishingResMon, progressDataResMonitor, flagEvent, resetResMon, removeProcessRes};