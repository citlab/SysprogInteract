import {easeLinear} from "d3-ease";
import {scaleOrdinal, schemeCategory20} from "d3-scale";
import {event, select} from "d3-selection";
import {BestFit, FirstFit, MemoryAlgorithm, RotatingFirstFit, WorstFit} from "./memory/memoryAlgorithms";
import {animateMemoryAllocation, animateMemoryDeallocation, resetMemoryAnimation} from "./memory/memoryAnimations";
import {Memory} from "./memory/memoryController";
import {clearMemStats, drawMemStats, updateMemStats} from "./memory/memoryStatistics";
import {Process, Processor} from "./processor";
import {Fifo, Lifo, RR, SchedulingAlgorithm, Priority, SJN, SRTN, HRRN} from "./algorithms";
import {names} from "./names"
import {clearStats, updateStats, drawStats} from "./statistics";
import {statNames} from "./StatNames";
import "d3-transition";
import {animateGantt, initGantt, removeGantt} from "./gantt/ganttGraph";
import {arrivalResMon, deleteResMon, finishingResMon, initResMonitor, progressDataResMonitor, removeProcessRes,
        resetResMon, updateResMon} from "./ResourceManagement/resourceMonitor";
import {createDefaultEvents, createExclusiveResEvent} from "./ResourceManagement/eventCreator";
import {checkProcessingRes, resetEvents} from "./ResourceManagement/resourceControl";
import {ExclusiveResource} from "./exclusiveResource";
import {BestFitRes, FifoRes, FirstFitRes, ResourceAlgorithm} from "./ResourceManagement/resourceAlgorithms";
import {
    HTMLaddProcess, HTMLaddEvents, toggleProcessForm, HTMLselectSchedulingAlgorithm, enableGanttGraph,
    enableMemory, disableControlItems, togglePauseControlItems, enableControlItems
} from "./setUpHTML";
import {addMemoryVisually, initMemorySvg} from "./memory/memoryMonitor";
import {loadConfig} from "./loading_saving/load";
import {saveConfig} from "./loading_saving/save";

let n: number = 0;
const color = scaleOrdinal(schemeCategory20);
const processList: Process[] = [];
let algorithm: SchedulingAlgorithm;
let processor: Processor;
let timePassed = 0;
let count = 0;
let index = 0;
let simulationSpeed: number;
let simulationTimeout: number;
let transitionDuration: number;
let simulationPaused: boolean = false;
let simulationStopped: boolean = true;
let simulationStepByStep: boolean = false;
let simulationStepRunning: boolean = false;
let nextSimulationFunction: () => void;
let simulateGantt : boolean = false;
let firstRun : boolean = true;
let ramShortage = false;
let memory: Memory;
let memoryAlgorithm: MemoryAlgorithm;
let memSize = 1024;
let memoryAllowed = false;
let resManAllowed= false;
let exclusiveResource : ExclusiveResource;
let resourceAlgorithm : ResourceAlgorithm;

/*##################################
----- adding listeners to html -----
##################################*/
$(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    })
});

$(function (){
   $('#infoSidebarCollapse').on('click', function () {
       $('#infoSidebar').toggleClass('active');
   })
});

select("#processForm").on("submit", function () {
    HTMLaddProcess(event, resManAllowed);
});

select("#eventBtn").on("click", function () {
    HTMLaddEvents();
});

select("#openProcessFormBtn").on("click", toggleProcessForm);

select("#startSimulation").on("click", function() {
    if (simulationStopped) {
        startSimulation();
    } else if (simulationPaused) {
        resumeSimulation();
        console.log("resuming simulation");
    }
});

select("#pauseSimulation").on("click", function() {
    if (!simulationStopped && !simulationPaused) {
        pauseSimulation();
        console.log("pausing simulation");
    }
});

select("#stopSimulation").on("click", function() {
    if (!simulationStopped) {
        stopSimulation();
        console.log("stopping simulation");
    }
});

select("#stepByStep").on("click", function () {
    if(simulationStopped){
        simulationStepByStep = true;
        startSimulation();
    }else if(simulationPaused){
        simulationStepByStep = true;
        if(typeof nextSimulationFunction != "function") nextSimulationFunction = startSimulationStep;
        console.log("resume. sBs", simulationStepRunning);
        resumeSimulation();
    }
});

select("#animationSpeed").on("change", function() {
    const value = parseInt((this as HTMLInputElement).value, 10);
    setSimulationSpeed(value);
});

select("#schedulingAlgorithm").on("change", function () {
    HTMLselectSchedulingAlgorithm((this as HTMLSelectElement).value);
});

select("#memSizeControl").on("change", function(){
    memSize = parseInt((this as HTMLInputElement).value, 10);
    initMemorySvg(memSize);
});

select("#memSizeControl").on("input", function () {
    memSize = parseInt((this as HTMLInputElement).value, 10);
    initMemorySvg(memSize);
});

select("#addRandomProcesses").on("click", addRandomProcesses);

select("#plottedStat").selectAll("option").data(statNames).enter().append("option").text((d) => d);

select("#enableGanttGraph").on("click", function () {
    if (simulateGantt) {
        removeGantt();
        enableGanttGraph(!simulateGantt)
    }
    simulateGantt = !simulateGantt;
});

select("#memorySwitch").on("click", function () {
    memoryAllowed = !memoryAllowed;
    memSize = parseInt((this as HTMLInputElement).value, 10) || memSize;
    if (resManAllowed) document.getElementById("resourceSwitch").click();
});

select("#resourceSwitch").on("click", function () {
    if(!resManAllowed){
        if(!memoryAllowed) document.getElementById("memorySwitch").click();
        resManAllowed = true;
        document.getElementById("resourceMonitor").style.display = "block";
        document.getElementById("resourceQueueContainer").style.display = "block";
        document.getElementById("exclusiveQueueContainer").style.display = "block";
        select("#eventBtn").style("display", "inline-block");
        initResMonitor(processList);
    }else{
        resManAllowed = false;
        deleteResMon(true);
        document.getElementById("resourceMonitor").style.display = "none";
        document.getElementById("resourceQueueContainer").style.display = "none";
        document.getElementById("exclusiveQueueContainer").style.display = "none";
        select("#eventBtn").style("display", "none");
    }
});

select("#resourceAlgorithm").on("change", function () {
   let value : string = (this as HTMLSelectElement).value;
   if (value == "Best Fit"){
       (document.getElementById("memoryAlgorithm") as HTMLSelectElement).selectedIndex = 1;
   }
});

if((<HTMLSelectElement>document.getElementById("schedulingAlgorithm")).value == "Round Robin"){
    document.getElementById("rrQuantumContainer").style.display = "flex";
}

if ((document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value === "Priority") {
    document.getElementById("interruptCheckBoxContainer").style.display = "flex";
}

/*##################################
-------    Upload Dialog     -------
##################################*/
let fileSelector = document.createElement('input');
fileSelector.type = 'file';
fileSelector.onchange = () => {
    let file : File = fileSelector.files[0];
    deleteProcesses();
    loadConfig(file, memoryAllowed, resManAllowed);
    fileSelector.value = null;
};

select("#loadButton").on("click", function () {
    fileSelector.click();
    return false;
});

/*##################################
-------   Download Dialog    -------
##################################*/
select("#saveButton").on("click", function () {
    let cpuAlgorithm : string = (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value;
    let preEmption : boolean = (document.getElementById("interruptCheckBox") as HTMLInputElement).checked;
    let quantum : string = (document.getElementById("quantum") as HTMLInputElement).value;
    let memAlgorithm : string = "";
    let memSize : string = "";
    let resAlgorithm : string = "";

    if (memoryAllowed) {
        memAlgorithm = (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value;
        memSize = (document.getElementById("memSizeControl") as HTMLInputElement).value;
    }
    if (resManAllowed) {
        resAlgorithm = (document.getElementById("resourceAlgorithm") as HTMLSelectElement).value;
    }
    saveConfig(cpuAlgorithm, preEmption.toString(), quantum, memAlgorithm, memSize, resAlgorithm, processList,
                memoryAllowed, resManAllowed);
});


/*##################################
------- Scheduling Lifecycle -------
##################################*/
/**
 * Adds process to process list.
 */
function addProcess() {
    if (!simulationStopped) {
        return;
    }
    n++;
    const duration: number = parseInt((document.getElementById("duration") as HTMLInputElement).value, 10);
    const arrival: number = parseInt((document.getElementById("arrival") as HTMLInputElement).value, 10);
    const priority: number = parseInt((document.getElementById("priority") as HTMLInputElement).value, 10);
    const name = generateRandomName();
    const memoryUsage: number = parseInt((document.getElementById("memoryUsage") as HTMLInputElement).value, 10);
    const events: any[] = createDefaultEvents(arrival, memoryUsage, duration);

    let evntForms = document.getElementsByClassName("event-form");
    let l = evntForms.length;
    for(let i = 0; i < l; i++){
        let form = evntForms.item(i);
        let eventType = (form.lastChild.firstChild as HTMLSelectElement).value;
        switch (eventType){
            case "-- select event --":
                break;

            case "allocate exclusive resource":
                let eventResDuration = parseInt((form.lastChild.lastChild.firstChild.nextSibling.firstChild as HTMLSelectElement).value);
                let eventResTime = parseInt((form.lastChild.lastChild.lastChild.firstChild as HTMLSelectElement).value);
                let evtns : any[] = createExclusiveResEvent(eventResTime, eventResDuration);
                 evtns.forEach(x => events.push(x));
                 break;
        }
    }
    createProcess(duration, arrival, priority, name, memoryUsage, false, events);
}

/**
 * Creates new process.
 * @param duration
 * @param arrival
 * @param priority
 * @param name
 * @param memoryUsage
 * @param hasMemory
 * @param events
 */
function createProcess(duration: number, arrival: number, priority: number, name: string, memoryUsage: number, hasMemory: boolean, events: any[]) {
    const newProcess = new Process(arrival, duration, priority, name, memoryUsage, hasMemory, events);
    processList.push(newProcess);
    if(resManAllowed) updateResMon(processList);
    addProcessVisually(newProcess);
}

/**
 * Adds/Creates random processes.
 */
function addRandomProcesses() {
    if (!simulationStopped) return;
    let duration;
    let arrival;
    let priority;
    let name;
    let memoryUsage;
    let events;
    const hasMemory = false;
    for (let i = 0; i < 10; i++) {
        duration = 1 + Math.floor(Math.random() * 10);
        arrival = Math.floor(Math.random() * 11);
        priority = 1 + Math.floor(Math.random() * 10);
        name = generateRandomName();
        memoryUsage = generateRandomMemory();
        events = createDefaultEvents(arrival, memoryUsage, duration);

        /*#############################################
        ## - adding exclusive-event by probability - ##
        #############################################*/
        //TODO
        createProcess(duration, arrival, priority, name, memoryUsage, hasMemory, events);
    }
}

/**
 * Adds process to process-monitor.
 * @param p
 */
function addProcessVisually(p: Process) {
    select(".list-group")
        .append("a")
        .attr("id", p.getName())
        .attr("href", "#")
        .on("click", removeProcess)
        .classed("list-group-item process-list-item", true)
        .html(getListItemHTML(p))
        .style("opacity", 0)
        .transition()
        .duration(400)
        .style("opacity", 1);
    select(".list-group").transition();
}

/**
 * Return random name from names.ts.
 */
function generateRandomName(): string {
    let name = names[Math.floor(Math.random() * names.length)];
    while (processList.filter(function(p: Process) {
        return p.getName() === name;
    }).length !== 0) {
        name += Math.floor(Math.random() * 10);
    }
    return name;
}

/**
 * Generates random memory-needs for random generated processes.
 */
function generateRandomMemory(): number {
    const min: number = 1;
    const max: number = 51; // 201
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Removes process from process list and visually.
 */
function removeProcess() {
    if (!simulationStopped) return;
    const elem = select(this);
    const name = elem.attr("id");
    for (let i = 0; i < processList.length; i++) {
        if (processList[i].getName() === name) {
            processList.splice(i, 1);
            break;
        }
    }
    elem.transition().style("opacity", 0).duration(100).remove();
    removeProcessRes(resManAllowed, processList);
}

/**
 * Starts simulation.
 */
function startSimulation() {
    disableControlItems(simulationStepByStep, memoryAllowed, resManAllowed);
    simulationStopped = false;
    algorithm = createAlgorithm();
    processor = new Processor(algorithm);
    if (memoryAllowed) memSize = parseInt((document.getElementById("memSizeControl") as HTMLInputElement).value);

    if (memoryAllowed){
        enableMemory(memoryAllowed, memSize);
        memoryAlgorithm = createMemoryAlgorithm();
        memory = new Memory([], memoryAlgorithm, memSize);
        memory.initMemory();
        addMemoryVisually(memory);
    }

    if(simulateGantt){
        enableGanttGraph(simulateGantt);
        initGantt(processList);
    }

    if(resManAllowed){
        exclusiveResource = new ExclusiveResource("Printer");
        resourceAlgorithm = createResourceAlgorithm();
    }

    if (!simulationSpeed) {
        setSimulationSpeed(parseInt((document.getElementById("animationSpeed") as HTMLInputElement).value, 10));
    }

    processList.sort(function(a, b) {
        return a.getArrival() - b.getArrival();
    });

    clearListItems();
    clearStats();
    clearMemStats(memoryAllowed);
    resetResMon(resManAllowed);
    resetEvents(processList, resManAllowed);
    startSimulationStep();
}

/**
 * resumes simulation.
 */
function resumeSimulation() {
    let stopButton = <HTMLInputElement>document.getElementById("stopSimulation");
    let stepByStep = <HTMLInputElement>document.getElementById("stepByStep");

    stopButton.disabled = false;
    simulationPaused = false;
    if(!simulationStepByStep) stepByStep.disabled = true;

    nextSimulationFunction();
}

/**
 * Pauses simulation.
 */
function pauseSimulation() {
    togglePauseControlItems();
    simulationPaused = true;

    if (nextSimulationFunction != startSimulationStep) {
        document.getElementById("stepByStep").innerText = "...";
    }else{
        document.getElementById("stepByStep").innerText = "+1";
    }
}

/**
 * Stops simulation.
 */
function stopSimulation() {
    enableControlItems(memoryAllowed, resManAllowed);
    simulationStepByStep = false;
    simulationStopped = true;

    if (!simulationStepRunning) {
        window.clearTimeout(simulationTimeout);
        resetVisualization();
    }
}

/**
 * Resets simulation
 */
function resetVisualization() {
    simulationStepRunning = false;
    simulationPaused = false;
    clearListItems();
    processList.forEach(function(p: Process, i) {
        p.resetRemainingLength();
        p.listIndex = i;
        p.resetInterruptCount();
        p.hasMemory = false;
    });
    processList.forEach(addProcessVisually);
    timePassed = 0;
    index = 0;
    firstRun = true;
    if(memoryAllowed) {
        resetMemoryAnimation(memory);
        memory.initMemory();
    }
    resetResMon(resManAllowed);
}

/**
 * Sets simulation speed which influences most transitions.
 * @param value
 */
function setSimulationSpeed(value: number) {
    simulationSpeed = 2000 - (value * 1980 / 100);
    transitionDuration = simulationSpeed / 4;
}

/**
 * Creates scheduling algorithm.
 */
function createAlgorithm(): SchedulingAlgorithm {
    switch ((document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value) {
        case "First in, First out" :
            return new Fifo();
        case "Last in, First out" :
            return new Lifo((<HTMLInputElement>document.getElementById("interruptCheckBox")).checked);
        case "Round Robin" :
            return new RR(parseInt((document.getElementById("quantum") as HTMLInputElement).value, 10));
        case "Priority" :
            return new Priority((document.getElementById("interruptCheckBox") as HTMLInputElement).checked);
        case "Shortest Job Next" :
            return new SJN();
        case "Shortest Remaining Time Next" :
            return new SRTN();
        case "Highest Response Ratio Next" :
            return new HRRN();
    }
    return null;
}

/**
 * Creates memory algorithm.
 */
function createMemoryAlgorithm(): MemoryAlgorithm {
    switch ((document.getElementById("memoryAlgorithm") as HTMLSelectElement).value) {
        case "First Fit":
            return new FirstFit();
        case "Best Fit":
            return new BestFit();
        case "Worst Fit":
            return new WorstFit();
        case "Rotating First Fit":
            return new RotatingFirstFit();
    }
}

/**
 * Creates resource management algorithm.
 */
function createResourceAlgorithm() : ResourceAlgorithm {
    let value : String = (document.getElementById("resourceAlgorithm") as HTMLSelectElement).value;
    switch(value){
        case "First in, First out":
            return new FifoRes([], []);
        case "First Fit":
            return new FirstFitRes([], []);
        case "Best Fit":
            return new BestFitRes([], []);
    }
}

/**
 * Starts simulation cycle.
 */
function startSimulationStep() {
    if (simulationStepRunning) return;
    simulationStepRunning = true;
    updateStats(timePassed, processList);
    drawStats();

    if(memoryAllowed){
        updateMemStats(timePassed, processList, memory.getSize());
        drawMemStats();
    }

    if (simulationStopped || (index === processList.length && processor.getProcessList().length === 0)) {
        simulationStepRunning = false;
        stopSimulation();
    } else {
        simulateNewProcesses();
    }
}

/**
 * Simulates newly arriving processes.
 */
function simulateNewProcesses() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const additions = [];
    while (processList[index] && processList[index].getArrival() === timePassed) {
        additions.push(processList[index]);
        index++;
    }
    processor.addProcesses(additions, timePassed);
    if(resManAllowed) {
        arrivalResMon(additions, timePassed);
    }
    animateNewProcesses();
}

/**
 * Animates newly arriving processes.
 */
function animateNewProcesses() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    let nextFunctionCalled = false;
    const currentProcesses = processor.getProcessList();
    const listItems = select(".list-group").selectAll("a").data(currentProcesses, function(p: Process) {
        return p.getName();
    });
    listItems.enter().append("a")
        .attr("href", "#")
        .attr("id", (p) => p.getName())
        .on("click", removeProcess)
        .classed("list-group-item process-list-item", true)
        .html(getListItemHTML)
        .style("opacity", 0)
        .style("left", "-100px")
        .transition()
        .duration(transitionDuration)
        .style("opacity", 1)
        .style("left", "0px")
        .on("end", function() {
            if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if(!ramShortage) {
                    if (simulationPaused) {
                        nextSimulationFunction = simulateListReorder;
                        console.log("paused at simulateProgress");
                    } else {
                        simulateListReorder();
                    }
                }else{
                    processor.getProcessList().forEach(function (p,i) {p.listIndex = i;});
                    if (simulationPaused) {
                        nextSimulationFunction = simulateProgress;
                        console.log("paused at simulateProgress");
                    } else {
                        simulateProgress();
                    }
                }
            }
        });
    if(listItems.enter().empty()) simulateListReorder();
}

/**
 * Simulates list reorder according to algorithm rules.
 */
function simulateListReorder(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    processor.updateProcessList(timePassed);
    animateListReorder();
}

/**
 * Animates list reorder.
 */
function animateListReorder(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    let currentProcesses = processor.getProcessList();
    let listItems = select("#simulatedProcesses").selectAll("a").data(currentProcesses, function(p : Process){return p.getName();});
    let reorder = false;
    let nextFunctionCalled = false;

    if(firstRun){
        processList.forEach(function (p,i) {
            p.listIndex = i;
        });
        firstRun = false;
    }

    if(algorithm.getName() == "hrrn" && currentProcesses[0] && currentProcesses[0].listIndex != 0){
        currentProcesses.forEach(p => p.listIndex--);
    }

    switch (algorithm.getName()) {
        case "rr":
            listItems.each(function (li, i) {
                if (li.listIndex < i) {
                    reorder = true;
                    select(this)
                        .transition()
                        .style("left", "-100px")
                        .style("opacity", 0)
                        .remove()
                        .on("end", function () {
                            if (!nextFunctionCalled) {
                                nextFunctionCalled = true;
                                if (simulationPaused) {
                                    nextSimulationFunction = simulateProgress;
                                    console.log("paused at simulateProgress");
                                } else {
                                    simulateProgress();
                                }
                            }
                        });
                }
                li.listIndex = i;
            });
            break;

        case "hrrn":
            listItems.each(function (li, i) {
                if (li.listIndex != i) {
                    reorder = true;
                    select(this)
                        .transition()
                        .style("left", "-100px")
                        .style("opacity", 0)
                        .remove()
                        .on("end", function () {
                            if (!nextFunctionCalled) {
                                nextFunctionCalled = true;
                                if (simulationPaused) {
                                    nextSimulationFunction = simulateProgress;
                                    console.log("paused at simulateProgress");
                                } else {
                                    simulateProgress();
                                }
                            }
                        });
                }
                li.listIndex = i;
            });
            break;

        case "srtn":
            listItems.each(function (li, i) {
                if(li.listIndex < i){
                    reorder = true;
                    select(this)
                        .transition()
                        .style("left", "-100px")
                        .style("opacity", 0)
                        .remove()
                        .on("end", function () {
                            if(!nextFunctionCalled){
                                nextFunctionCalled = true;
                                if (simulationPaused){
                                    nextSimulationFunction = simulateProgress;
                                    console.log("paused at simulateProgress");
                                } else {
                                    simulateProgress();
                                }
                            }
                        });
                }
                li.listIndex = i;
            });
            break;

        default:
            break;
    }

    if(!reorder){
        simulateProgress();
    }
}

/**
 * Simulates progress for active process.
 */
function simulateProgress() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }

    ramShortage = false;
    if(processor.getProcessList()[0] != null){
        let p: Process = processor.getProcessList()[0];
        let status : boolean[];

        if(resManAllowed) {
            status = checkProcessingRes(memoryAllowed, resManAllowed, false, p, memory, color, timePassed, exclusiveResource, resourceAlgorithm);

            if (status.every(s => s != false)) {
                processor.calculationStep();
                if (simulateGantt) animateGantt(p, timePassed, color(p.getName()));
                progressDataResMonitor(processor.getProcessList(), timePassed);
                timePassed++;
                animateProgress();
            } else {
                if (!status[0]) {
                    simulateRamShortage();
                }
                if (!status[1]) {
                    simulateRamShortage();
                }
            }
        }else if(memoryAllowed){
            if (p.hasMemory){
                processor.calculationStep();
                if(simulateGantt && processor.getProcessList()[0]) {
                    let ptemp = processor.getProcessList()[0];
                    animateGantt(ptemp, timePassed, color(ptemp.getName()));
                }
                timePassed++;
                animateProgress();
            } else {
                status = [memory.fits(p)[0]];
                if (status[0]) {
                    memory.addProcess(p);
                    p.setHasMemory(true);
                    animateMemoryAllocation(p, memory, color);
                    processor.calculationStep();
                    if (simulateGantt) animateGantt(p, timePassed, color(p.getName()));
                    timePassed++;
                    animateProgress();
                }else{
                    ramShortage = true;
                    simulateRamShortage();
                }
            }
        }else{
            processor.calculationStep();
            if (simulateGantt) animateGantt(p, timePassed, color(p.getName()));
            timePassed++;
            animateProgress();
        }
    }else{
        timePassed++;
        animateProgress();
    }
}

/**
 * Handles insufficient memory.
 */
function simulateRamShortage() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    processor.handleRamShortage();
    animateRamShortage();
}

/**
 * Animates insufficient memory.
 */
function animateRamShortage() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }

    let nextFunctionCalled = false;

    select("#simulatedProcesses")
        .select("a")
        .transition()
        .duration(transitionDuration)
        .style("border-color", "red")
        .transition()
        .duration(transitionDuration)
        .style("border-color", "#7aff63")
        .transition()
        .style("left", "-100px")
        .style("opacity", 0)
        .duration(transitionDuration)
        .remove()
        .on("end", function() {
            if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if (simulationPaused) {
                    nextSimulationFunction = animateNewProcesses;
                    console.log("animateNewProcesses");
                } else {
                    animateNewProcesses();
                }
            }
        });
}

/**
 * animates progress for active process.
 */
function animateProgress() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const currentProcesses = processor.getProcessList();
    const listItems = select(".list-group").selectAll("a").data(currentProcesses, function(p: Process) {
        return p.getName();
    });
    let nextFunctionCalled = false;
    listItems.select(".progress-bar").transition()
        .duration(transitionDuration)
        .style("width", function(p: Process) {
            return (100 * (1 - p.getRemainingLength() / p.getLength())) + "%";
        })
        .ease(easeLinear)
        .on("end", function() {
            if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if (simulationPaused) {
                    nextSimulationFunction = simulateFinishedProcess;
                    console.log("pausing at simulateFinishedProcess");
                } else {
                    simulateFinishedProcess();
                }
            }
        });
    listItems.select("#remainingLength").text(function(p: Process) {
        return "remaining length: " + p.getRemainingLength() + "ms";
    });

    if (listItems.empty()) {
        simulateFinishedProcess();
    }
}

/**
 * Simulates finished processes.
 */
function simulateFinishedProcess() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    if (processor.getProcessList()[0] != null && processor.getProcessList()[0].getRemainingLength() <= 0 && memoryAllowed) {
        count++;
        animateMemoryDeallocation(processor.getProcessList()[0], memory);
        memory.removeProcess(processor.getProcessList()[0]);
        processor.getProcessList()[0].setHasMemory(false);
    }
    if(resManAllowed && processor.getProcessList()[0] != null && processor.getProcessList()[0].getRemainingLength() <= 0){
        finishingResMon(processor.getProcessList()[0], timePassed);
    }
    processor.removeFinishedProcesses(timePassed);
    animateFinishedProcess();
}

/**
 * Animates finished processes
 */
function animateFinishedProcess() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const currentProcesses = processor.getProcessList();
    const listItems = select(".list-group").selectAll("a").data(currentProcesses, function(p: Process) {
        return p.getName();
    });
    if (listItems.exit().empty()) {
        simulationStepRunning = false;

        if(simulationStepByStep){
            simulationStepByStep = false;
            nextSimulationFunction  = startSimulationStep;
            pauseSimulation();
        }else{
            simulationTimeout = window.setTimeout(startSimulationStep, 100);
        }
    } else {
        listItems.exit()
            .transition()
            .style("left", "-100px")
            .style("opacity", 0)
            .duration(transitionDuration)
            .remove()
            .on("end", function() {
                simulationStepRunning = false;
                if(simulationStepByStep){
                    simulationStepByStep = false;
                    nextSimulationFunction = startSimulationStep;
                    pauseSimulation();
                }else{
                    simulationTimeout = window.setTimeout(startSimulationStep, 100);
                }
            });
    }
}

/**
 * Clears all items from process monitor.
 */
function clearListItems() {
    select(".list-group").selectAll("a").remove();
}

/**
 * Returns innerHTML from given process.
 * @param p
 */
function getListItemHTML(p: Process) {
    const percentageDone = 100 * (1 - p.getRemainingLength() / p.getLength());
    return '<div class="progress progress-custom">' +
        '<div class="process-list-item-content">' +
        '<div class="row">' +
        '<div class="col-md-6">' +
        '<h5 class="list-group-item-heading">Process: ' + p.getName() + "</h5>" +
        '<p class="list-group-item-text">Priority: ' + p.getPriority() + "</p>" +
        "</div>" +
        '<div class="col-md-6">' +
        '<p class="list-group-item-text">Arrival: ' + p.getArrival() + "ms</p>" +
        '<p class="list-group-item-text" id="remainingLength">Remaining Length: ' + p.getRemainingLength() + "ms</p>" +
        '<p class="list-group-item-text" id="memoryUSage">Memory Usage.: ' + p.getMemoryUsage() + "MB</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="progress-bar progress-bar-striped process-list-progress-bar" role="progressbar" style="width:' + percentageDone + "%; background-color:" + color(p.getName()) + '"></div>' +
        "</div>";
}

/**
 * Clears all items from process list.
 */
function deleteProcesses() {
    while (processList.length != 0) {
        processList.pop();
    }
    clearListItems();
}

export {createAlgorithm, createMemoryAlgorithm, createProcess, startSimulation, stopSimulation, resumeSimulation, pauseSimulation, addProcess};