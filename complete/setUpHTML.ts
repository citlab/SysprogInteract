import {addProcess} from "./scheduling";
import {select} from "d3-selection";
import {initMemStatDrawing} from "./memory/memStatisticsDrawing";
import {initMemorySvg} from "./memory/memoryMonitor";

/**
 * Adds process to process list.
 * @param event
 * @param resManAllowed
 * @constructor
 */
function HTMLaddProcess(event : Event, resManAllowed : boolean){
    event.preventDefault();
    if(!resManAllowed || checkUserInput()){
        addProcess();
        let eventForms = document.getElementsByClassName("event-form");
        while (eventForms.item(0)) {
            eventForms.item(0).remove();
        }
        document.getElementById("processForm").setAttribute("style", "height:" +270+ "px");
    }
    disableEnableEventSubmit(false);
    return;
}

/**
 * Disables submit button for events.
 * @param disable
 */
function disableEnableEventSubmit(disable :  boolean) {
    let eventButton = <HTMLButtonElement>document.getElementById("eventBtn");
    eventButton.disabled = disable;
}

/**
 * Parses information from event-dialog and creates event.
 * @constructor
 */
function HTMLaddEvents(){
    let eventForm : any = select("#processForm");

    let div = eventForm.insert("div", "#btn-form-group")
        .attr("class", "form-group event-form");

    div.append("label")
        .attr("class", "control-label col-sm-2")
        .text("Event: ");

    let selectDiv: any = div.append("div")
        .attr("class", "col-sm-8");

    let selector: any = selectDiv.append("select")
        .attr("class", "form-control")
        .attr("title", "Event Type")
        .attr("id", "eventTypeSelector")
        .style("width", "87.9%")
        .style("float", "left");

    selector.append("option")
        .text("-- select event --");

    selector.append("option")
        .text("allocate exclusive resource");

    let btn: any = selectDiv.append("button")
        .attr("class", "btn btn-danger")
        .attr("type", "button")
        .style("float", "left")
        .style("margin-left", "5px")
        .text("X");

    let oldHeight : number = document.getElementById("processForm").offsetHeight;
    let newHeight : number = oldHeight + 50;
    document.getElementById("processForm").setAttribute("style", "height:" +newHeight+ "px");

    btn.on("click", function () {
        let oldHeight : number = document.getElementById("processForm").offsetHeight;
        let newHeight : number;

        if((this.previousSibling as HTMLSelectElement).value != "-- select event --"){
            newHeight = oldHeight - 175;
        }else{
            newHeight = oldHeight - 50;
        }

        this.parentElement.parentElement.remove();
        disableEnableEventSubmit(false);
        document.getElementById("processForm").setAttribute("style", "height:" +newHeight+ "px");
    });

    selector.on("change", function () {
        const value = (this as HTMLSelectElement).value;
        let optionsDiv = selectDiv.append("div"),
            oldHeight : number,
            newHeight : number;

        switch(value){
            case "allocate exclusive resource":
                optionsDiv.append("label")
                    .attr("class", "control-label")
                    .style("float", "left")
                    .text("Duration: ");
                let inputDivDurationTime: any = optionsDiv.append("div");
                inputDivDurationTime.append("input")
                    .attr("type", "number")
                    .attr("class", "form-control")
                    .attr("value", "1")
                    .attr("min", 1)
                    .style("float", "right")
                    .style("width", "100%")
                    .style("margin-top", "2px");

                optionsDiv.append("label")
                    .attr("class", "control-label")
                    .style("float", "left")
                    .text("Time: ");

                let inputDivTimeRes: any = optionsDiv.append("div");

                inputDivTimeRes.append("input")
                    .attr("type", "number")
                    .attr("class", "form-control")
                    .attr("value", 1)
                    .attr("min", 1)
                    .style("float", "right")
                    .style("width", "100%");

                oldHeight = document.getElementById("processForm").offsetHeight;
                newHeight = oldHeight + 125;
                document.getElementById("processForm").setAttribute("style", "height:" +newHeight+ "px");
                break;

            case "-- select event --":
                this.nextSibling.nextSibling.remove();
                oldHeight = document.getElementById("processForm").offsetHeight;
                newHeight = oldHeight - 125;
                document.getElementById("processForm").setAttribute("style", "height:" +newHeight+ "px");
                break;
        }
    });
    disableEnableEventSubmit(true);
    return;
}

/**
 * Enables or disables process configuration form.
 */
function toggleProcessForm() {
    select("#processForm").classed("hidden", function() {
        return !select(this).classed("hidden");
    });
    select("#processList").classed("shortened", function() {
        return !select(this).classed("shortened");
    });
    select("#openProcessFormBtn").selectAll("span").classed("hidden", function() {
        return !select(this).classed("hidden");
    });
}

/**
 * Handles scheduling algorithm selection.
 * @param value
 * @constructor
 */
function HTMLselectSchedulingAlgorithm(value : String) {
    if (value === "Round Robin") {
        select("#rrQuantumContainer").style("opacity", 0).style("display", "block").transition().style("opacity", 1);
    } else {
        select("#rrQuantumContainer").style("display", "none");
    }
    if (value === "Priority" || value === "Last in, first out") {
        select("#interruptCheckBoxContainer").style("opacity", 0).style("display", "flex").transition().style("opacity", 1);
    } else {
        select("#interruptCheckBoxContainer").style("display", "none");
    }
}

/**
 * Checks if event dialog is filled correctly.
 */
function checkUserInput(){
    let okEvent : boolean,
        okTime : boolean;

    let forms = document.getElementsByClassName("event-form");
    let eventSelectors : any[] = [];
    for (let i=0; i < forms.length; i++){
        eventSelectors.push(forms.item(i).lastChild.firstChild);
    }
    let timeSelectors : any[] = [];
    for (let i=0; i < forms.length; i++){
        let timeSelector = forms.item(i).lastChild.lastChild.lastChild.firstChild;
        if(timeSelector){
            timeSelectors.push(timeSelector);
        }else{
            timeSelectors.push(null);
        }
    }

    let events : String[] = [];
    eventSelectors.forEach(function (s) {
        events.push((s as HTMLSelectElement).value);
    });
    let timings : String[] = [];
    timeSelectors.forEach(function (s) {
        timings.push((s as HTMLSelectElement).value);
    });

    okEvent = events.length == 0 ||
        events.every(function (elem, index) {
            return events.every(function (ele, i) {
                return index == i || elem != ele;
            });
        });

    okTime = timings.length == 0 ||
        timings.every(function (elem, index) {
            return timings.every(function (ele, i) {
                return index == i || elem != ele;
            });
        });
    if(!okTime) alert("Each time has to be unique.");
    if(!okEvent) alert("Each event-type has to be unique.");
    return (okTime && okEvent);
}

/**
 * Enables or disables gantt graph.
 * @param simulateGantt
 */
function enableGanttGraph(simulateGantt : boolean){
    if(simulateGantt){
        document.getElementById("gantt").style.display = "block";
        return true;
    }else{
        document.getElementById("gantt").style.display = "none";
        return false;
    }
}

/**
 * Enables or disables memory visualization.
 * @param checked
 * @param memSize
 */
function enableMemory(checked : boolean, memSize : number){
   if(checked){
       document.getElementById("memSvg").style.display = "block";
       document.getElementById("memStats").style.display = "block";
       initMemorySvg(memSize);
       initMemStatDrawing();
   }else{
       document.getElementById("memSvg").style.display = "none";
       document.getElementById("memStats").style.display = "none";
   }
   return checked;
}

/**
 * Disable all control buttons.
 * @param stepByStep
 */
function disableControlItems(stepByStep : boolean, memoryAllowed : boolean, resourceAllowed : boolean) : void{
    let checkbox = <HTMLInputElement>document.getElementById("enableGanttGraph");
    let stepByStepProcessing = <HTMLInputElement>document.getElementById("stepByStep");
    let randomButton = <HTMLInputElement>document.getElementById("addRandomProcesses");
    let loadButton = <HTMLInputElement>document.getElementById("loadButton");
    let saveButton = <HTMLInputElement>document.getElementById("saveButton");

    checkbox.disabled = true;
    randomButton.disabled = true;
    loadButton.disabled = true;
    saveButton.disabled = true;

    if (!stepByStep) stepByStepProcessing.disabled = true;

    if (memoryAllowed) {
        let memSwitch = <HTMLInputElement>document.getElementById("memorySwitch");
        let memSizeInput = <HTMLInputElement>document.getElementById("memSizeControl");
        memSwitch.disabled = true;
        memSizeInput.disabled = true;
    }

    if (resourceAllowed) {
        let resSwitch = <HTMLInputElement>document.getElementById("resourceSwitch");
        resSwitch.disabled = true;
    }
}

/**
 * Enables all control buttons.
 */
function enableControlItems(memoryAllowed : boolean, resourceAllowed : boolean) {
    let checkbox = <HTMLInputElement>document.getElementById("enableGanttGraph");
    let stepByStep = <HTMLInputElement>document.getElementById("stepByStep");
    let randomButton = <HTMLInputElement>document.getElementById("addRandomProcesses");
    let loadButton = <HTMLInputElement>document.getElementById("loadButton");
    let saveButton = <HTMLInputElement>document.getElementById("saveButton");

    stepByStep.disabled = false;
    checkbox.disabled = false;
    randomButton.disabled = false;
    loadButton.disabled = false;
    saveButton.disabled = false;

    if (memoryAllowed) {
        let memSwitch = <HTMLInputElement>document.getElementById("memorySwitch");
        let memSizeInput = <HTMLInputElement>document.getElementById("memSizeControl");
        memSwitch.disabled = false;
        memSizeInput.disabled = false;
    }

    if (resourceAllowed) {
        let resSwitch = <HTMLInputElement>document.getElementById("resourceSwitch");
        resSwitch.disabled = false;
    }
}

/**
 * Toggles Pause/Stop button.
 */
function togglePauseControlItems() {
    let stopButton = <HTMLInputElement>document.getElementById("stopSimulation");
    let stepByStep = <HTMLInputElement>document.getElementById("stepByStep");
    stepByStep.disabled = false;
    stopButton.disabled = true;
}

export {HTMLaddProcess, HTMLaddEvents, toggleProcessForm, HTMLselectSchedulingAlgorithm, enableGanttGraph, enableMemory,
        disableControlItems, enableControlItems, togglePauseControlItems}