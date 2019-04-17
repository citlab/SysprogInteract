import {SchedulingAlgorithm} from "./algorithms";

class Processor {
    private schedulingAlgorithm: SchedulingAlgorithm;
    processes: Process[];

    constructor(schedulingAlgorithm: SchedulingAlgorithm) {
        this.schedulingAlgorithm = schedulingAlgorithm;
        this.processes = [];
    }

    /**
     * Adds process to processor.
     * @param additions
     * @param timePassed
     */
    public addProcesses(additions : Process[],timePassed: number) : void{
        this.schedulingAlgorithm.addProcesses(additions, this.processes, timePassed);
    }

    /**
     * One calculation step.
     */
    public calculationStep(): void {
        if (this.processes.length > 0) {
            this.processes[0].decreaseRemainingLength();
        }
    }

    /**
     * Returns the current process list.
     */
    public getProcessList(): Process[] {
        return this.processes;
    }

    /**
     * Updates the process list by passed time.
     * @param timePassed
     */
    public updateProcessList(timePassed: number) {
        this.schedulingAlgorithm.updateProcessList(this.processes, timePassed);
    }

    /**
     * Removes finished processes.
     * @param timePassed
     */
    public removeFinishedProcesses(timePassed: number) {
        this.schedulingAlgorithm.handleFinishedProcesses(this.processes, timePassed);
    }

    /**
     * Handles insufficient memory.
     */
    public handleRamShortage(): void {
        this.schedulingAlgorithm.handleRamShortage(this.processes);
    }
}

class Process {
    public listIndex: number;
    public memoryUsage: number;
    public hasMemory: boolean;
    public arrival: number;
    public length: number;
    public remainingLength: number;
    public interruptCount = 0;
    public priority: number;
    public name: string;
    public finishedTime: number;
    public rejectCount = 0;
    public events: any[] = [];
    public additionalMem : number;

    constructor(arrival: number, length: number, priority: number, name: string, memoryUsage: number, hasMemory: boolean, events: any[]) {
        this.arrival = arrival;
        this.length = length;
        this.remainingLength = length;
        this.priority = priority;
        this.name = name;
        this.memoryUsage = memoryUsage;
        this.hasMemory = hasMemory;
        this.events = events;
    }

    public getPriority() {
        return this.priority;
    }

    public getArrival() {
        return this.arrival;
    }

    public getLength() {
        return this.length;
    }

    public getRemainingLength() {
        return this.remainingLength;
    }

    public decreaseRemainingLength() {
        this.remainingLength--;
    }

    public getName() {
        return this.name;
    }

    public resetRemainingLength() {
        this.remainingLength = this.length;
    }

    public setFinishedTime(time: number) {
        this.finishedTime = time;
    }

    public getFinishedTime() {
        return this.finishedTime;
    }

    public interrupt() {
        this.interruptCount++;
    }

    public getInterruptCount() {
        return this.interruptCount;
    }

    public resetInterruptCount() {
        this.interruptCount = 0;
    }

    public getMemoryUsage() {
        return this.memoryUsage;
    }

    public setHasMemory(b: boolean) {
        this.hasMemory = b;
    }

    public reject() {
        this.rejectCount++;
    }

    public getRejectCount() {
        return this.rejectCount;
    }

    public resetRejectCount() {
        this.rejectCount = 0;
    }

    public addEvent(e: any) {
        this.events.push(e);
    }
}

export {Process, Processor};