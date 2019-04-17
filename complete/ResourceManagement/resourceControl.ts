import {Process} from "../processor";
import {Memory} from "../memory/memoryController";
import {animateMemoryAllocation, animateMemoryDeallocation} from "../memory/memoryAnimations";
import {flagEvent} from "./resourceMonitor";
import {ExclusiveResource} from "../exclusiveResource";
import {ResourceAlgorithm} from "./resourceAlgorithms";
import {removeFromQueue, resetQueue, updateQueue} from "./queueMonitor";

/**
 * Checks against memory-algorithm and resource-algorithm for actual if current process if it is processable.
 * @param memoryAllowed
 * @param resManAllowed
 * @param exclusiveAllowed
 * @param process
 * @param memory
 * @param color
 * @param timePassed
 * @param exclusiveRes
 * @param resourceAlgorithm
 * @return boolean[]
 */
function checkProcessingRes(memoryAllowed : boolean,
                            resManAllowed : boolean,
                            exclusiveAllowed : boolean,
                            process : Process,
                            memory : Memory,
                            color : any,
                            timePassed : number,
                            exclusiveRes: ExclusiveResource,
                            resourceAlgorithm : ResourceAlgorithm) : boolean[]{

    let memStatus : boolean = true;
    let exStatus : boolean = true;

    if(resManAllowed){
        process.events.forEach(function (e) {

                switch (e.kind) {
                    case "initialMemory":
                        let internalProcessTimer : number = process.getLength() - process.getRemainingLength();
                        if(e.time == internalProcessTimer && e.status != "granted"){
                            if (e.status != "declined") resourceAlgorithm.addRequestToQueue(process, process.memoryUsage, e, color);
                            if(resourceAlgorithm.isNext(process, memory, exclusiveRes, e)){
                                e.status = "granted";
                                memStatus = memStatus && true;
                                animateMemoryAllocation(process, memory, color);
                            }else{
                                e.status = "declined";
                                memStatus = memStatus && false;
                            }
                            updateQueue(process, e, color);
                            flagEvent(e, e.status, timePassed, process.getName());
                        }
                        break;

                    case "closingMemory":
                        if(e.time == process.getLength() - process.getRemainingLength() + 1 && e.status != "granted"){
                            animateMemoryDeallocation(process, memory);
                            memory.removeProcess(process);
                            process.setHasMemory(false);
                            e.status = "granted";
                            removeFromQueue(process, e);
                            flagEvent(e, e.status, timePassed + 1 , process.getName());
                        }
                        break;

                    case "exclusiveRes":
                        if(e.time == process.getLength() - process.getRemainingLength() + 1 && e.status != "granted"){
                            resourceAlgorithm.addRequestToQueue(process, e.data, e, color);
                            if(resourceAlgorithm.isNext(process, memory, exclusiveRes, e)){
                                e.status = "granted";
                                exStatus = exStatus && true;
                            }else{
                                e.status = "declined";
                                exStatus = exStatus && false;
                            }
                            updateQueue(process, e, color);
                            flagEvent(e, e.status, timePassed, process.getName());
                        }
                        break;

                    case "freeExRes":
                        if(e.time == process.getLength() - process.getRemainingLength() + 1 && e.status != "granted"){
                            exclusiveRes.deallocate();
                            flagEvent(e, e.status, timePassed, process.getName());
                            e.status = "granted";
                            removeFromQueue(process, e);
                        }
                        break;
                }
        })
    }
    return [memStatus, exStatus];
}

/**
 * Checks of process´s memory needs can be granted.
 * @param process Process to be tested.
 * @param memory Memory to be tested against.
 * @return boolean[] Seems weird, but needs to to be consistent within scheduling.ts
 */
function checkProcessingMem(process : Process, memory : Memory) : [boolean] {
    if (memory.fits(process)) return [true];
    else return [false];
}

/**
 * Resets all event-status to "open"
 * @param processList List to be reset.
 * @param resManAllowed Boolean to prevent nullPointerException.
 */
function resetEvents(processList: Process[], resManAllowed: boolean) {
    if(resManAllowed) processList.forEach(function (p) {
        p.events.forEach(function (e) {
            e.status = "open";
        })
    });
    resetQueue();
}

export{checkProcessingRes, checkProcessingMem, resetEvents};