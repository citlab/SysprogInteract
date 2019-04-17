import {SchedulingAlgorithm} from "./algorithms";

/**
 * Created by Vincent Hennig on 30.05.17.
 */
class Processor {
    private readonly schedulingAlgorithm: SchedulingAlgorithm | undefined;
    private readonly processes: Process[];
    private readonly swappingProcesses: Process[];

    constructor(schedulingAlgorithm?: SchedulingAlgorithm) {
        this.schedulingAlgorithm = schedulingAlgorithm;
        this.processes = [];
        this.swappingProcesses = [];
    }

    public addProcesses(additions: Process[]): void {
        const special = additions.every(
            (v) => v.isSwappingProcess() || v.isRestoringProcess()
        );
        if (special) {
            this.swappingProcesses.push(...additions);
            return;
        }

        if (!this.schedulingAlgorithm) {
            return;
        }

        this.schedulingAlgorithm.addProcesses(additions, this.processes);
    }

    public calculationStep(): void {
        if (this.swappingProcesses.length > 0) {
            this.swappingProcesses[0].decreaseRemainingLength();
            return;
        }

        if (this.processes.length > 0) {
            this.processes[0].decreaseRemainingLength();
            // console.log("working on process " + this.processes[0].getName() + " ("+ this.processes[0].getRemainingLength() +"ms left)");
        }
    }

    public getProcessList(): Process[] {
        return this.swappingProcesses.concat(...this.processes);
    }

    public updateProcessList(timePassed: number) {
        if (!this.schedulingAlgorithm) {
            return;
        }
        if (this.swappingProcesses.length > 0) {
            return;
        }
        this.schedulingAlgorithm.updateProcessList(this.processes, timePassed);
    }
    public removeFinishedProcesses(timePassed: number) {
        if (!this.schedulingAlgorithm) {
            return;
        }

        if (this.swappingProcesses.length > 0) {
            this.schedulingAlgorithm.handleFinishedProcesses(
                this.swappingProcesses,
                timePassed
            );
            return;
        }

        this.schedulingAlgorithm.handleFinishedProcesses(
            this.processes,
            timePassed
        );
    }

    public handleRamShortage(): void {
        /*
         let p = this.processes.shift();
         this.processes.push(p);
         */

        if (!this.schedulingAlgorithm) {
            return;
        }

        this.schedulingAlgorithm.handleRamShortage(this.processes);
    }
}

class Process {
    public diskUsage: number = 0;
    public listIndex: number = -1;
    public memoryUsage: number;
    public hasMemory: boolean = false;
    private arrival: number;
    private finishedTime: number = -1;
    private length: number;
    private remainingLength: number;
    private priority: number;
    private interruptCount = 0;
    private name: string;
    private rejectCount = 0;

    constructor(
        arrival: number,
        length: number,
        priority: number,
        name: string,
        memoryUsage: number,
        diskUsage: number
    ) {
        this.arrival = arrival;
        this.length = length;
        this.remainingLength = length;
        this.priority = priority;
        this.name = name;

        this.memoryUsage = memoryUsage;
        this.diskUsage = diskUsage;
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

    public isSwappingProcess(): boolean {
        return this.name.indexOf("SWAPPING") !== -1;
    }

    public isRestoringProcess(): boolean {
        return this.name.indexOf("RESTORING") !== -1;
    }
}

export {Process};
export {Processor};
