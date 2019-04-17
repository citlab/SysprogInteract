import {select} from "d3-selection";
import {Process} from "../processor";

let memQueue = select("#memoryQueue");
let exQueue = select("#exclusiveQueue");

/**
 * Adds queue items visually to the corresponding queue.
 * @param p The corresponding process for the event
 * @param generalType Specifies which queue the event should be added to ("memory", "exclusive").
 * @param type The exact event type. (e.g "initialMemory", "closingMemory", ...)
 * @param status The state the event is in. ("granted", "closed", "denied").
 * @param needs The resources needed. (-> eventCreator)
 * @param color The d3 color scale to inherit the color scheme.
 */
function addProcessToQueueVisually(p : Process,generalType: String, type : String, status : String, needs : String, color : any) {
    switch (generalType){
        case "memory":
            memQueue
                .append("a")
                .attr("id",  (p.getName()).concat('', type.toString()))
                .attr("href", "#")
                .classed("list-group-item queue-list-item passiveQueueItem", true)
                .html(getQueueItemHTML(p, type, status, {type: "number", value: needs}))
                .style("background", color(p.getName())+40) //hex+alpha
                .style("opacity", 0)
                .transition()
                .duration(400)
                .style("opacity", 1);
            memQueue.transition();
            break;

        case "exclusive":
            exQueue
                .append("a")
                .attr("id", (p.getName()).concat("", type.toString()))
                .attr("href", "#")
                .classed("list-group-item queue-list-item passiveQueueItem", true)
                .html(getQueueItemHTML(p, type, status, {type: "", value: needs}))
                .style("background", color(p.getName())+40) //hex+alpha
                .style("opacity", 0)
                .transition()
                .duration(400)
                .style("opacity", 1);
            exQueue.transition();
            break;
    }
}

/**
 * If queue-item status changed, deletes item, and adds new one with new status.
 * @param p The process the queue element refers to.
 * @param e The event the queue element refers to.
 * @param color
 */
function updateQueue(p : Process, e : any, color : any) {
    let queueElem = document.getElementById((p.getName().concat(e.kind)));
    if (!queueElem) return;
    let oldStatus = queueElem.getElementsByClassName("status")[0].innerHTML;
    let parentQueueID = queueElem.parentElement.getAttribute("id");

    switch (parentQueueID) {
        case "memoryQueue":
            if (e.status == "granted" && oldStatus != "granted") {
                queueElem.style.transition = "opacity 400 0";
                queueElem.remove();
                memQueue.insert("a", "a.passiveQueueItem")
                    .attr("id",  (p.getName()).concat('', e.kind.toString()))
                    .attr("href", "#")
                    .classed("list-group-item queue-list-item activeQueueItem", true)
                    .html(getQueueItemHTML(p, e.kind, e.status, {type: "number", value: e.data.toString()}))
                    .style("background", color(p.getName())+40) //hex+alpha
                    .style("opacity", 0)
                    .transition()
                    .duration(400)
                    .style("opacity", 1);
                memQueue.transition();

                let newElem = document.getElementById((p.getName().concat(e.kind)));
                newElem.getElementsByClassName("status")[0].setAttribute("style", "color: green");
                newElem.setAttribute("class", "list-group-item queue-list-item activeQueueItem");
            }

            if (e.status != "granted") {
                queueElem.getElementsByClassName("status")[0].innerHTML = "declined";
                queueElem.getElementsByClassName("status")[0].setAttribute("style", "color: red");
                queueElem.setAttribute("class", "list-group-item queue-list-item passiveQueueItem");
            }
            break;

        case "exclusiveQueue":
            if (e.status == "granted" && oldStatus != "granted") {
                queueElem.style.transition = "opacity 400 0";
                queueElem.remove();

                exQueue.insert("a", "a.passiveQueueItem")
                    .attr("id",  (p.getName()).concat('', e.kind.toString()))
                    .attr("href", "#")
                    .classed("list-group-item queue-list-item activeQueueItem", true)
                    .html(getQueueItemHTML(p, e.kind, e.status, {type: "number", value: "exclusiveRes"}))
                    .style("background", color(p.getName())+40) //hex+alpha
                    .style("opacity", 0)
                    .transition()
                    .duration(400)
                    .style("opacity", 1);
                exQueue.transition();

                let newElem = document.getElementById((p.getName().concat(e.kind)));
                newElem.getElementsByClassName("status")[0].setAttribute("style", "color: green");
                newElem.setAttribute("class", "list-group-item queue-list-item activeQueueItem");
            }

            if (e.status != "granted") {
                queueElem.getElementsByClassName("status")[0].innerHTML = "declined";
                queueElem.getElementsByClassName("status")[0].setAttribute("style", "color: red");
                queueElem.setAttribute("class", "list-group-item queue-list-item passiveQueueItem");
            }
            break;
    }
    divideGroups();
}

/**
 * Divides both resource queues into active and inactive.
 */
function divideGroups() {
    let memList = document.getElementById("memoryQueue");
    let memItems = memList.getElementsByTagName("a");

    for (let i=0; i < memItems.length; i++){
        memItems[i].style.marginTop = "0px";
    }
    for (let i=0; i < memItems.length; i++){
        if(memItems[i].getElementsByClassName("status")[0].innerHTML == "declined"){
            memItems[i].style.marginTop = "10px";
            return;
        }
    }

    let exList = document.getElementById("exclusiveQueue");
    let exItems = exList.getElementsByTagName("a");

    for (let i=0; i < exItems.length; i++){
        exItems[i].style.marginTop = "0px";
    }
    for (let i=0; i < exItems.length; i++){
        if (exItems[i].getElementsByClassName("status")[0].innerHTML == "declined"){
            exItems[i].style.marginTop = "10px";
            return;
        }
    }
}

/**
 * Removes queue items of finished processes.
 * @param p The process the queue element refers to.
 * @param e The event the queue element refers to.
 */
function removeFromQueue(p : Process, e : any){
    switch (e.kind){
        case "closingMemory":
            let initID = "#" + p.getName().concat("initialMemory");
            let queueElemInit = select(initID);
            let addID = "#" + p.getName().concat("addMemory");
            let queueElemAddMem = select(addID);

            if(queueElemInit){
                queueElemInit.transition()
                    .style("top", "-100px")
                    .style("opacity", 0)
                    .duration(1000)
                    .remove()
            }
            if(queueElemAddMem){
                queueElemAddMem.transition()
                    .style("top", "-100px")
                    .style("opacity", 0)
                    .duration(1000)
                    .remove()
            }
            break;

        case "freeExRes":
            let freeExID = "#" + p.getName().concat("exclusiveRes");
            let queueElemFreeEx = select(freeExID);

            if(queueElemFreeEx){
                queueElemFreeEx.transition()
                    .style("top", "-100px")
                    .style("opacity", 0)
                    .duration(1000)
                    .remove()
            }
            break;
    }
}

/**
 * Resets both queues when simulation is stopped.
 */
function resetQueue() {
    let memQueue = document.getElementById("memoryQueue");
    while (memQueue.firstChild) {
        memQueue.removeChild(memQueue.firstChild);
    }
    let exQueue = document.getElementById("exclusiveQueue");
    while (exQueue.firstChild) {
        exQueue.removeChild(exQueue.firstChild);
    }
}

/**
 * Sets innerHTML of queueItems.
 * @param p The corresponding process.
 * @param type The kind of event.
 * @param status The status of the scheduled event. open - declined - granted
 * @param needs The amount of resources needed.
 */
function getQueueItemHTML(p : Process, type : String, status : String, needs : any) {
    // language=HTML
    return  `
        <div class="queue-list-item-content">
            <div>
                <h5 class="list-group-item-heading" style="text-align: center">Process: ${p.getName()}</h5>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <p class="list-group-item-text">Type:</p>
                    <p class="list-group-item-text">Needs:</p>
                    <p class="list-group-item-text">Status:</p>
                </div>                                   
                <div class="col-sm-9">                                       
                    <p class="list-group-item-text">${parseInfo("", type)}</p>
                    <p class="list-group-item-text">${parseInfo(needs.type, needs.value)}</p>  
                    <p class="list-group-item-text status">${parseInfo("", status)}</p>
                </div>                       
            </div>            
        </div>`;
}

/**
 * Parses internal strings to displayable text.
 * @param type
 * @param value
 */
function parseInfo(type : String, value : String) {
    if(type == "number"){
        return value.concat(" MB");
    }else{
        switch (value){
            case "initialMemory": return "Init. Memory Allocation";
            case "open": return "Open";
            case "exclusiveRes": return "Allocate Excl.Resource";
            default: return value;
        }
    }
}

export {addProcessToQueueVisually, updateQueue, resetQueue, removeFromQueue}