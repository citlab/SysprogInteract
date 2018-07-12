import {Process, Processor} from "./processor";
import {Fifo, Lifo, RR, SchedulingAlgorithm, Priority, SJN, SRTN, HRRN} from "./algorithms";
import {names} from "./names"
import {clearStats, updateStats, drawStats} from "./statistics";
import {statNames} from "./StatNames";
import {scaleOrdinal, schemeCategory20} from "d3-scale";
import {select, event} from "d3-selection";
import "d3-transition";
import {easeLinear} from "d3-ease";
import {animateGantt, initGantt} from "./gantt/ganttGraph";
/**
* Created by Vincent Hennig on 30.05.17.
*/
let n : number = 0;
let color =  scaleOrdinal(schemeCategory20);
let processList = [];
let algorithm : SchedulingAlgorithm;
let processor : Processor;
let timePassed = 0, index = 0;
let simulationSpeed : number;
let simulationTimeout : number;
let transitionDuration : number;
let simulationPaused : boolean = false;
let simulationStopped : boolean = true;
let simulationStepRunning : boolean = false;
let nextSimulationFunction : Function;
let simulateGantt : boolean = false;
let firstRun : boolean = true;





//adding listeners to html
select("#processForm").on("submit", function(){
    event.preventDefault();
    addProcess();
    return false;
});

select("#openProcessFormBtn").on("click", function(){
    toggleProcessForm();
});

select("#startSimulation").on("click", function(){
    if(simulationStopped) startSimulation();
    else if (simulationPaused) {
        resumeSimulation();
        console.log("resuming simulation");
    }
});

select("#pauseSimulation").on("click", function(){
    if(!simulationStopped && !simulationPaused){
        pauseSimulation();
        console.log("pausing simulation");
    }
});

select("#stopSimulation").on("click", function(){
    if(!simulationStopped) {
        stopSimulation();
        console.log("stopping simulation");
    }
});

select("#animationSpeed").on("change", function(){
    let value = parseInt((<HTMLInputElement>this).value);
    setSimulationSpeed(value);
});

select("#schedulingAlgorithm").on("change",function(){
    let value = (<HTMLSelectElement>this).value;
    if (value == "Round-robin"){
        select("#rrQuantumContainer").style("opacity",0).style("display","flex").transition().style("opacity",1);
    } else {
        select("#rrQuantumContainer").style("display","none");
    }
    if(value == "Priority" || value == "Last in, first out"){
        select("#interruptCheckBoxContainer").style("opacity",0).style("display","flex").transition().style("opacity",1);
    } else {
        select("#interruptCheckBoxContainer").style("display","none");
    }
});

select("#addRandomProcesses").on("click", addRandomProcesses);

select("#plottedStat").selectAll("option").data(statNames).enter().append("option").text(function(d){return d});

select("#saveButton").on("click", saveConfig);

select("#inputID").on("click", function() {
    loadConfig(event);
});



select("#enableGanttGraph").on("click", function () {
    let value = (<HTMLInputElement>this).checked;
    if (value) {
        simulateGantt = true;
        document.getElementById("gantt").style.display = "block";
    } else {
        simulateGantt = false;
        document.getElementById("gantt").style.display = "none";
    }

});



//showing and hiding elements
if((<HTMLSelectElement>document.getElementById("schedulingAlgorithm")).value == "Round-robin"){
    document.getElementById("rrQuantumContainer").style.display = "flex";
}

if((<HTMLSelectElement>document.getElementById("schedulingAlgorithm")).value == "Priority"){
    document.getElementById("interruptCheckBoxContainer").style.display = "flex";
}

function addProcess(){
    if(!simulationStopped) return;
    n++;
    let duration : number = parseInt((<HTMLInputElement> document.getElementById("duration")).value);
    let arrival : number = parseInt((<HTMLInputElement> document.getElementById("arrival")).value);
    let priority : number = parseInt((<HTMLInputElement> document.getElementById("priority")).value);
    let name = generateRandomName();

    createProcess(duration, arrival, priority, name);
}

function createProcess(duration, arrival, priority, name){
    let newProcess = new Process(arrival, duration, priority, name);
    processList.push(newProcess);
    addProcessVisually(newProcess);
}

function addRandomProcesses(){
    if(!simulationStopped) return;
    let duration, arrival, priority, name;
    for (let i=0; i<10; i++){
        duration = 1 + Math.floor(Math.random() * 10);
        arrival = Math.floor(Math.random() * 11);
        priority = 1 + Math.floor(Math.random() * 10);
        name = generateRandomName();
        createProcess(duration, arrival, priority, name);
    }
}

function addProcessVisually(p : Process){
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

function generateRandomName() : string{
    let name = names[Math.floor(Math.random()*names.length)];
    while(processList.filter(function(p : Process){return p.getName() == name}).length != 0){
        name += Math.floor(Math.random()*10);
    }
    return name;
}

function removeProcess(){
    if(!simulationStopped) return;
    let elem = select(this);
    let name = elem.attr("id");
    for (let i=0; i<processList.length; i++){
        if (processList[i].getName() == name){
            processList.splice(i,1);
            break;
        }
    }
    elem.transition().style("opacity",0).duration(100).remove();
}

function toggleProcessForm(){
    select("#processForm").classed("hidden", function(){
        return !select(this).classed("hidden")
    });
    select("#processList").classed("shortened", function(){
        return !select(this).classed("shortened");
    });
    select("#openProcessFormBtn").selectAll("span").classed("hidden", function(){
        return !select(this).classed("hidden");
    });
}

function startSimulation(){

    //HTML
    let checkbox = <HTMLInputElement>document.getElementById("enableGanttGraph");
    checkbox.disabled = true;


    simulationStopped = false;
    algorithm = createAlgorithm();
    processor = new Processor(algorithm);
    if(!simulationSpeed) setSimulationSpeed(parseInt((<HTMLInputElement>document.getElementById("animationSpeed")).value));
    processList.sort(function(a, b){
        return a.arrival - b.arrival;
    });
    clearListItems();
    clearStats();

    //gantt
    if(simulateGantt) initGantt(processList);

    startSimulationStep();
}

function resumeSimulation(){
    simulationPaused = false;
    nextSimulationFunction();
}

function pauseSimulation(){
    simulationPaused = true;
}

function stopSimulation(){
    //HTML
    let checkbox = <HTMLInputElement>document.getElementById("enableGanttGraph");
    checkbox.disabled = false;

    simulationStopped = true;
    if(!simulationStepRunning){
        window.clearTimeout(simulationTimeout);
        resetVisualization();
    }
}

function resetVisualization(){
    simulationStepRunning = false;
    simulationPaused = false;
    clearListItems();
    processList.forEach(function(p : Process, i) {
        p.resetRemainingLength();
        p.listIndex = i;
        p.resetInterruptCount();
    });
    processList.forEach(addProcessVisually);
    timePassed = 0;
    index = 0;

    firstRun = true;
}

function setSimulationSpeed(value : number){
    simulationSpeed = 2000 - (value*1980/100);
    transitionDuration = simulationSpeed/4;
}

function createAlgorithm() : SchedulingAlgorithm{

    switch ((<HTMLSelectElement>document.getElementById("schedulingAlgorithm")).value){
        case "First in, first out" :
            return new Fifo();
        case "Last in, first out" :
            return new Lifo((<HTMLInputElement>document.getElementById("interruptCheckBox")).checked);
        case "Round-robin" :
            return new RR(parseInt((<HTMLInputElement>document.getElementById("quantum")).value));
        case "Priority" :
            return new Priority((<HTMLInputElement>document.getElementById("interruptCheckBox")).checked);
        case "Shortest job next" :
            return new SJN();
        case "Shortest remaining time next" :
            return new SRTN();
        case "Highest response ratio next" :
            console.log("HRRN");
            return new HRRN();

    }
    return null;
}

function startSimulationStep(){
    if(simulationStepRunning) {
        console.log("step skipped");
        return;
    }
    simulationStepRunning = true;
    updateStats(timePassed, processList);
    drawStats();
    if(simulationStopped || (index == processList.length && processor.getProcessList().length == 0)){
        //simulation is done or stopped by user
        simulationStepRunning = false;
        stopSimulation();
    } else {
        //update the order of active processes
        simulateNewProcesses();
    }
}

function simulateNewProcesses(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    //add all processes that are arriving now
    let additions = [];
    while(processList[index] && processList[index].arrival == timePassed){
        additions.push(processList[index]);
        index++;
    }
    processor.addProcesses(additions, timePassed);
    animateNewProcesses();
}

function animateNewProcesses(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    let nextFunctionCalled = false;
    let currentProcesses = processor.getProcessList();
    let listItems = select(".list-group").selectAll("a").data(currentProcesses, function(p : Process){return p.getName();});
    listItems.enter().append("a")
        .attr("href", "#")
        .attr("id", (p) => {return p.getName()})
        .on("click", removeProcess)
        .classed("list-group-item process-list-item", true)
        .html(getListItemHTML)
        .style("opacity", 0)
        .style("left", "-100px")
        .transition()
        .duration(transitionDuration)
        .style("opacity", 1)
        .style("left", "0px")
        .on("end", function(){
            if(!nextFunctionCalled){
                nextFunctionCalled = true;
                if(simulationPaused){
                    nextSimulationFunction = simulateListReorder;
                    console.log("paused at simulateProgress");
                } else {
                    simulateListReorder();
                }
            }
        });
    if(listItems.enter().empty()) simulateListReorder();
}



function simulateListReorder(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    processor.updateProcessList(timePassed);
    animateListReorder();
}

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


    /*
    begin trust issues
     */
    if(firstRun){
        processList.forEach(function (p,i) {
            p.listIndex = i;
        });
        firstRun = false;
    }

    if(algorithm.getName() == "hrrn" && currentProcesses[0] && currentProcesses[0].listIndex != 0){
        currentProcesses.forEach(p => p.listIndex--);
    };
    /*
    end trust issues
     */

    if(algorithm.getName() == "rr") {
        listItems.each(function (li, i) {
            if (li.listIndex < i) {
                reorder = true;
                select(this)
                    .transition()
                    .style("left", "-100px")
                    .style("opacity", 0)
                    //.duration(transitionDuration)
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
    }


    if(algorithm.getName() == "hrrn"){
        listItems.each(function (li, i) {
            if (li.listIndex != i) {
                reorder = true;
                select(this)
                    .transition()
                    .style("left", "-100px")
                    .style("opacity", 0)
                    //.duration(transitionDuration)
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
        })
    }



    if(!reorder){
        simulateProgress();
    }
}




function simulateProgress(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    processor.calculationStep();

    if(simulateGantt && processor.getProcessList()[0]) {
        let ptemp = processor.getProcessList()[0];
        animateGantt(ptemp, timePassed, color(ptemp.getName()));
    }
    timePassed++;
    animateProgress();
}

function animateProgress(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    let currentProcesses = processor.getProcessList();
    let listItems = select(".list-group").selectAll("a").data(currentProcesses, function(p : Process){return p.getName();});
    let nextFunctionCalled = false;
    listItems.select(".progress-bar").transition()
        .duration(transitionDuration)
        .style("width", function(p : Process){
            return (100 * (1 - p.getRemainingLength() / p.getLength())) + "%";
        })
        .ease(easeLinear)
        .on("end", function(){
            if(!nextFunctionCalled){
                nextFunctionCalled = true;
                if (simulationPaused){
                    nextSimulationFunction = simulateFinishedProcess;
                    console.log("pausing at simulateFinishedProcess");
                } else {
                    simulateFinishedProcess();
                }
            }
        });
    listItems.select("#remainingLength").text(function(p : Process){
        return 'Restlänge: ' + p.getRemainingLength() + 'ms';
    });

    if(listItems.empty()) simulateFinishedProcess();
}

function simulateFinishedProcess(){
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    processor.removeFinishedProcesses(timePassed);
    animateFinishedProcess();
}

function animateFinishedProcess(){
    //--------------------------------
    //last function of simulation step
    //--------------------------------
    if(simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    let currentProcesses = processor.getProcessList();
    let listItems = select(".list-group").selectAll("a").data(currentProcesses, function(p : Process){return p.getName();});
    if(listItems.exit().empty()){
        simulationStepRunning = false;
        simulationTimeout = window.setTimeout(startSimulationStep, 100);
    } else {
        listItems.exit()
            .transition()
            .style("left", "-100px")
            .style("opacity", 0)
            .duration(transitionDuration)
            .remove()
            .on("end", function(){
               simulationStepRunning = false;
               simulationTimeout = window.setTimeout(startSimulationStep, 100);
            });
    }
}

function clearListItems(){
    select(".list-group").selectAll("a").remove();
}

function getListItemHTML(p : Process){

    let percentageDone = 100*(1 - p.getRemainingLength()/p.getLength());
    return '<div class="progress progress-custom">' +
                '<div class="process-list-item-content">' +
                    '<div class="row">' +
                        '<div class="col-md-6">' +
                            '<h5 class="list-group-item-heading">Process: '+ p.getName() +'</h5>' +
                            '<p class="list-group-item-text">Priority: '+ p.getPriority() + '</p>' +

                        '</div>' +
                        '<div class="col-md-6">' +
                            '<p class="list-group-item-text">Arrival: '+ p.getArrival() +'ms</p>' +
                            '<p class="list-group-item-text" id="remainingLength">Remaining length: '+ p.getRemainingLength() +'ms</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="progress-bar progress-bar-striped process-list-progress-bar" role="progressbar" style="width:'+ percentageDone +'%; background-color:'+ color(p.getName()) +'"></div>' +
            '</div>';
}

function saveConfig() {

    const saveFile = createSaveFile();

    // saving
    const blob = new Blob([saveFile], {type: "text/plain"});
    const blobURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;

    link.download = "scheduling_config.txt"; // file name
    link.dataset.downloadurl = ["text/plain", link.download, link.href].join(";");
    link.click();

}


function loadConfig(saveEvent: any) {
    console.log("CHROME TEST");
    const fr: FileReader = new FileReader();
    let savePlain: string = "";

    // extract Data;
    const x: File = (document.getElementById("inputID") as HTMLInputElement).files[0];

    fr.onload = read;

    function read(e) {
        savePlain = (e.target as any).result;
        console.log(savePlain);// -> prints savefile!
        readSaveFile(savePlain);
    }
    fr.readAsText(x);

}

function createSaveFile(): string {

    let savefile = "";
    const schedulingAlgorithm: SchedulingAlgorithm = createAlgorithm();

    // additional scheduling variables
    if (schedulingAlgorithm.getName() === "rr") {
        savefile = savefile + schedulingAlgorithm.getName() + "," + parseInt((document.getElementById("quantum") as HTMLInputElement).value, 10) + "\n";
    } else if (schedulingAlgorithm.getName() === "priority" ||
        schedulingAlgorithm.getName() === "sjn") {
        savefile = savefile + schedulingAlgorithm.getName() + "," + (document.getElementById("interruptCheckBox") as HTMLInputElement).checked + "\n";
    } else {
        savefile = schedulingAlgorithm.getName() + "\n";
    }


    processList.forEach(function(p: Process) {

        savefile = savefile + p.getArrival() + ","
            + p.getLength() + ","
            + p.getPriority() + ","
            + p.getName() + "\n";
    });
    return savefile;
}

function readSaveFile(savePlain: string) {

    let schedulingAlgorithm = "";
    let clockValue: number = null;
    let preemption: boolean = null;

    const saveArray = savePlain.split("\n");

    if ((saveArray[0].split(","))[0] === "rr") {
        // if rr -> extra clock value

        const rrSplit = saveArray[0].split(",");
        schedulingAlgorithm = rrSplit[0];
        clockValue = parseInt(rrSplit[1], 10);

    } else if ((saveArray[0].split(","))[0] === "sjn" || (saveArray[0].split(","))[0] === "priority") {
        // if sjn || priority -> extra preemption valie

        const prioSplit = saveArray[0].split(",");
        schedulingAlgorithm = prioSplit[0];
        preemption = (prioSplit[1] === "true");

    } else {
        // else (normal)
        schedulingAlgorithm = saveArray[0];
    }



    for (let i = 1; i < saveArray.length - 1; i++) {
        console.log(i);
        let arrival: number = null; // 0
        let length: number = null; // 1
        let priority: number = null; // 2
        let name: string = null; // 3

        const processSplit = saveArray[i].split(",");

        arrival = parseInt(processSplit[0], 10);
        length = parseInt(processSplit[1], 10);
        priority = parseInt(processSplit[2], 10);
        name = processSplit[3];

        createProcess(arrival, length, priority, name);
    }

    // changing data

    if (schedulingAlgorithm === "rr") {
        (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Round-robin";
        (document.getElementById("quantum") as HTMLInputElement).value = clockValue.toString();
        document.getElementById("rrQuantumContainer").style.display = "flex";
        select("#interruptCheckBoxContainer").style("display", "none");

    } else if (schedulingAlgorithm === "sjn") {
        (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Shortest job next";
        (document.getElementById("interruptCheckBox") as HTMLInputElement).checked = preemption;
        // setting the value apparently does not call onChange.

        document.getElementById("interruptCheckBoxContainer").style.display = "flex";
        select("#rrQuantumContainer").style("display", "none");

    } else if (schedulingAlgorithm === "priority") {
        (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Priority";
        (document.getElementById("interruptCheckBox") as HTMLInputElement).checked = preemption;

        document.getElementById("interruptCheckBoxContainer").style.display = "flex";
        select("#rrQuantumContainer").style("display", "none");

    }
}