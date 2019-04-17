import {Process} from "../processor";
import {Memory} from "../memory/memoryController";
import {ExclusiveResource} from "../exclusiveResource";
import {addProcessToQueueVisually} from "./queueMonitor";

abstract class ResourceAlgorithm {

    /**
     * Creates an entry-object for the queue and adds it to the end.
     * @param process Process
     * @param amount number
     * @param event any
     * @param color any
     * @return void
     */
    public abstract addRequestToQueue(process : Process, amount : number, event : any, color : any) : void;

    /**
     * Deletes an item from the queue.
     * Returns true if success full, otherwise false.
     * @param item any
     * @return boolean
     */
    public abstract dequeue(item : any): boolean;

    /**
     * Checks if, according to the algorithms rules, the given Process is allowed to allocate its needed resources.
     * Returns true and allocates the Resource(s) if yes, false otherwise.
     * @param process
     * @param memory
     * @param exclusiveRes
     * @param event
     * @return boolean
     */
    public abstract isNext(process : Process, memory : Memory, exclusiveRes : ExclusiveResource, event : any): boolean;

    /**
     * Returns the Name of the ResourceAlgorithm.
     * @return String
     */
    public abstract getName(): String;

    /**
     * Returns memoryQueue and exclusiveQueue
     * @return {memoryQueue: any[], exclusiveQueue: any[]}
     */
    public abstract getCurrentQueue(): any;

    /**
     * Converts more specific event types to either "memory" or "exclusive".
     * @param type
     * @return string
     */
    public static getGeneralType(type : string) : string {
        if (type == "exclusiveRes") return "exclusive";
        else return "memory";
    };
}

class FifoRes extends ResourceAlgorithm {

    constructor(private memoryQueue: any[],private exclusiveQueue: any[]) {
        super();
    }

    public addRequestToQueue(process: Process, amount: number, event : any, color : any) {
        let generalType : string = ResourceAlgorithm.getGeneralType(event.kind);
        let need: any = {process: process, type: event.kind, generalType: generalType, amount: amount, id: event.id};

        switch (need.generalType) {
            case "memory":
                if (!this.memoryQueue.some( (item) => {return item.id == event.id})){
                    this.memoryQueue.push(need);
                    addProcessToQueueVisually(process, need.generalType, event.kind, status, amount.toString(), color);
                }
                break;

            case "exclusive":
                if (!this.exclusiveQueue.some( (item) => {return item.id == event.id})) {
                    this.exclusiveQueue.push(need);
                    addProcessToQueueVisually(process, need.generalType, event.kind, status, "Exclusive Resource", color);
                }
                break;
        }
    }

    public isNext(p: Process, memory: Memory, exclusiveResource: ExclusiveResource, event: any) {
        let generalType : string = ResourceAlgorithm.getGeneralType(event.kind);

        switch (generalType) {
            case "memory":
                if (this.memoryQueue[0].process.getName() == p.getName()) {
                    let itemProcess : Process = this.memoryQueue[0].process;
                    let tempP = new Process(itemProcess.arrival, itemProcess.length, itemProcess.priority,
                                            itemProcess.name, itemProcess.memoryUsage, false,
                                            itemProcess.events);

                    if (memory.fits(tempP)) {
                        memory.addProcess(p);
                        p.setHasMemory(true);
                        this.dequeue(this.memoryQueue[0]);
                        return true;
                    }
                    return false;
                }
                return false;

            case "exclusive":
                if (this.exclusiveQueue[0].process.getName() == p.getName()) {
                    if (exclusiveResource.isAllocated()) return false;
                    exclusiveResource.allocate(p);
                    this.dequeue(this.exclusiveQueue[0]);
                    return true;
                }
        }
    }

    public dequeue(delItem: any) {
        let i: number = -1;
        switch (delItem.generalType) {
            case "memory":
                if (this.memoryQueue.some( (item, index) => {
                    i = index;
                    return item.id == delItem.id})){
                    this.memoryQueue.splice(i, 1);
                    return true;
                } else {
                    console.log("ERROR. trying to delete queue item which does not exist.");
                    return false;
                }

            case "exclusive":
                if (this.exclusiveQueue.some(function (item, index) {
                    i = index;
                    return item.id == delItem.id;
                })){
                    this.exclusiveQueue.splice(i, 1);
                    return true;
                } else {
                    console.log("ERROR. trying to delete queue item which does not exist.");
                    return false;
                }
        }
    }

    public getName() {
        return "Fifo"
    }

    public getCurrentQueue() {
        return {memoryQueue: this.memoryQueue, exclusiveQueue: this.exclusiveQueue};
    }
}

class FirstFitRes extends ResourceAlgorithm{

    constructor(private memoryQueue: any[], private exclusiveQueue: any[]){
        super();
    }

    public addRequestToQueue(process : Process, amount : number, event : any, color : any){
        let generalType : string = ResourceAlgorithm.getGeneralType(event.kind);
        let need: any = {process: process, type: event.kind, generalType: generalType, amount: amount, id: event.id};

        switch (need.generalType) {
            case "memory":
                if (!this.memoryQueue.some( (item) => {return item.id == event.id})) {
                    this.memoryQueue.push(need);
                    addProcessToQueueVisually(process, need.generalType, event.kind, status, amount.toString(), color);
                }
                break;

            case "exclusive":
                if (!this.exclusiveQueue.some( (item) => {return item.id == event.id})) {
                    this.exclusiveQueue.push(need);
                    addProcessToQueueVisually(process, need.generalType, event.kind, status, "Exclusive Resource", color);
                }
                break;
        }
    }

    public dequeue(delItem : any){
        let i: number = -1;
        switch (delItem.generalType) {
            case "memory":
                if (this.memoryQueue.some( (item, index) => {
                    i = index;
                    return item.id == delItem.id})){
                    this.memoryQueue.splice(i, 1);
                    return true;
                } else {
                    console.log("ERROR. trying to delete queue item which does not exist.");
                    return false;
                }

            case "exclusive":
                if (this.exclusiveQueue.some(function (item, index) {
                    i = index;
                    return item.id == delItem.id;
                })){
                    this.exclusiveQueue.splice(i, 1);
                    return true;
                } else {
                    console.log("ERROR. trying to delete queue item which does not exist.");
                    return false;
                }
        }
    }

    public isNext(p : Process, memory : Memory, exclusiveResource : ExclusiveResource, event : any){
        let generalType : string = ResourceAlgorithm.getGeneralType(event.kind);

        switch (generalType) {
            case "memory":
                for (let i = 0; i < this.memoryQueue.length; i++){
                    let item : any = this.memoryQueue[i];
                    let itemProcess : Process = item.process;
                    let tempP = new Process(itemProcess.arrival, itemProcess.length, itemProcess.priority,
                                            itemProcess.name, itemProcess.memoryUsage, false,
                                            itemProcess.events);

                    if(memory.fits(tempP)){
                        if(item.process.getName() == p.getName()){
                            memory.addProcess(p);
                            p.setHasMemory(true);
                            this.dequeue(this.memoryQueue[i]);
                            return true;
                        }else{
                            return false;
                        }
                    }
                }
                return false;

            case "exclusive":
                if (this.exclusiveQueue[0].name == p.getName()) {
                    if (exclusiveResource.isAllocated()) return false;
                    exclusiveResource.allocate(p);
                    this.dequeue(this.exclusiveQueue[0]);
                    return true;
                }
        }
    }

    public getName(){
        return "FirstFit"
    }

    public getCurrentQueue() {
        return {memoryQueue: this.memoryQueue, exclusiveQueue: this.exclusiveQueue};
    }
}

class BestFitRes extends ResourceAlgorithm{
    memoryQueue : any[];
    exclusiveQueue : any[];

    constructor(memoryQueue : any[], exclusiveQueue : any[]){
        super();
        this.memoryQueue = memoryQueue;
        this.exclusiveQueue = exclusiveQueue;
    }

    public addRequestToQueue(process : Process, amount : number, event : any, color : any){
        let generalType : string = ResourceAlgorithm.getGeneralType(event.kind);
        let need: any = {process: process, type: event.kind, generalType: generalType, amount: amount, id: event.id};

        switch (need.generalType) {
            case "memory":
                if (!this.memoryQueue.some( (item) => {return item.id == event.id})) {
                    this.memoryQueue.push(need);
                    addProcessToQueueVisually(process, need.generalType, event.kind, status, amount.toString(), color);
                }
                break;

            case "exclusive":
                if (!this.exclusiveQueue.some( (item) => {return item.id == event.id})) {
                    this.exclusiveQueue.push(need);
                    addProcessToQueueVisually(process, need.generalType, event.kind, status, "Exclusive Resource", color);
                }
                break;
        }
    }

    public dequeue(delItem : any){
        let i: number = -1;
        switch (delItem.generalType) {
            case "memory":
                if (this.memoryQueue.some( (item, index) => {
                    i = index;
                    return item.id == delItem.id})){
                    this.memoryQueue.splice(i, 1);
                    return true;
                } else {
                    console.log("ERROR. trying to delete queue item which does not exist.");
                    return false;
                }

            case "exclusive":
                if (this.exclusiveQueue.some(function (item, index) {
                    i = index;
                    return item.id == delItem.id;
                })){
                    this.exclusiveQueue.splice(i, 1);
                    return true;
                } else {
                    console.log("ERROR. trying to delete queue item which does not exist.");
                    return false;
                }
        }
        return false
    }

    public isNext(p : Process, memory : Memory, exclusiveResource : ExclusiveResource, event : any){
        let generalType : string = ResourceAlgorithm.getGeneralType(event.kind);
        let possible : any[] = [];
        switch (generalType) {
            case "memory":
                let pTestFit : any[] = memory.fits(p);
                if (!pTestFit[0]) return false;

                this.memoryQueue.forEach(function (item) {
                    if (!item) return;
                    let testFit : any[] = memory.fits(item.process);
                    if (testFit[0]) {
                        possible.push({item: item, size: testFit[1]});
                    }
                });

                if(possible.some((testFit) => {
                    let pWaste : number = pTestFit[1] - p.memoryUsage;
                    let iWaste : number = testFit.size - testFit.item.amount;
                    return iWaste < pWaste;
                })){
                    return false;
                } else {
                    memory.addProcess(p);
                    p.setHasMemory(true);
                    this.memoryQueue.forEach((item) => {
                       if (item.id == event.id) this.dequeue(item);
                    });
                    return true;
                }

            case "exclusive":
                if (this.exclusiveQueue[0].process.getName() == p.getName()) {
                    if (exclusiveResource.isAllocated()) return false;
                    exclusiveResource.allocate(p);
                    this.dequeue(this.exclusiveQueue[0]);
                    return true;
                }
        }
        return false;
    }

    public getName(){
        return "BestFit"
    }

    public getCurrentQueue() {
        return {memoryQueue: this.memoryQueue, exclusiveQueue: this.exclusiveQueue};
    }
}

export {ResourceAlgorithm, FifoRes, BestFitRes, FirstFitRes}