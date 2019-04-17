/**
 * Created by Vincent Hennig on 30.05.17.
 */
import {Process} from "./processor";
import {interruptActiveProcess} from "./util/processHelpers";

abstract class SchedulingAlgorithm {
    protected preEmption: boolean = false;

    // adds process p to list according to the algorithms rules
    // (e.g. Fifo adds at the end)
    public abstract addProcesses(additions: Process[], list: Process[]): void;

    // updates the order of processes in the list according to algorithm rules
    public abstract updateProcessList(
        list: Process[],
        timePassed: number
    ): void;

    // removes finished processes
    public abstract removeFinishedProcesses(
        list: Process[],
        timePassed: number
    ): Process[];

    public abstract getName(): string;

    public abstract handleRamShortage(processes: Process[]): void;

    public setPreEmption(b: boolean) {
        this.preEmption = b;
    }

    public handleFinishedProcesses(list: Process[], timePassed: number): void {
        const finishedProcesses = this.removeFinishedProcesses(
            list,
            timePassed
        );
        finishedProcesses.forEach((p) => p.setFinishedTime(timePassed));
    }
}

class Fifo extends SchedulingAlgorithm {
    public addProcesses(additions: Process[], list: Process[]): void {
        list.push(...additions);
    }

    public updateProcessList(list: Process[]): void {}

    public removeFinishedProcesses(list: Process[]): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "fifo";
    }

    public handleRamShortage(processes: Process[]): void {}
}

class Lifo extends SchedulingAlgorithm {
    public addProcesses(additions: Process[], list: Process[]): void {
        list.splice(1, 0, ...additions);
    }

    public updateProcessList(list: Process[]): void {}

    public removeFinishedProcesses(list: Process[]): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "lifo";
    }

    public handleRamShortage(processes: Process[]): void {}
}

class RR extends SchedulingAlgorithm {
    private quantum: number;
    private nextDeadline: number;

    constructor(quantum: number) {
        super();
        this.quantum = quantum;
        this.nextDeadline = quantum;
    }

    public addProcesses(additions: Process[], list: Process[]): void {
        list.push(...additions);
    }

    public updateProcessList(list: Process[], timePassed: number): void {
        if (list.length === 0) {
            this.nextDeadline = timePassed + this.quantum;
            return;
        }
        if (timePassed >= this.nextDeadline) {
            this.nextDeadline += this.quantum;
            interruptActiveProcess(list, list.length - 1);
        }
    }

    public removeFinishedProcesses(
        list: Process[],
        timePassed: number
    ): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            this.nextDeadline = timePassed + this.quantum;
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "rr";
    }

    public handleRamShortage(processes: Process[]): void {
        const p = processes.shift();
        if (p) {
            processes.push(p);
        }
    }
}

class Priority extends SchedulingAlgorithm {
    public preEmption: boolean;

    constructor(preEmption: boolean) {
        super();
        this.preEmption = preEmption;
    }

    public addProcesses(additions: Process[], list: Process[]): void {
        additions.sort((a, b) => b.getPriority() - a.getPriority());
        for (let i = 0; i < additions.length; i++) {
            this.addProcess(additions[i], list);
        }
    }

    public addProcess(p: Process, list: Process[]) {
        if (
            this.preEmption &&
            list[0] &&
            list[0].getPriority() < p.getPriority()
        ) {
            // interrupt running process
            interruptActiveProcess(list, 0);
            list.splice(0, 0, p);
            return;
        }
        let n = 1;
        while (n < list.length && list[n].getPriority() >= p.getPriority()) {
            n++;
        }
        list.splice(n, 0, p);
    }

    public updateProcessList(list: Process[]): void {}

    public removeFinishedProcesses(list: Process[]): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "priority";
    }

    public handleRamShortage(processes: Process[]): void {
        let i = 0;
        let posFound = false;
        let inProgress = false; // at least on process above the new position has to be in progress already
        const p = processes.shift();
        if (!p) {
            return;
        }
        while (!posFound) {
            if (processes[i].getRemainingLength() < processes[i].getLength()) {
                inProgress = true;
            }
            console.log(i);

            if (processes[i].getPriority() <= p.getPriority() && inProgress) {
                posFound = true;
            } else if (i === processes.length) {
                posFound = true;
            } else {
                i++;
            }
        }
        processes.splice(i + 1, 0, p);
    }
}

class SJN extends SchedulingAlgorithm {
    public preEmption: boolean;

    constructor(preEmption: boolean) {
        super();
        this.preEmption = preEmption;
    }

    public addProcesses(additions: Process[], list: Process[]): void {
        additions.sort((a, b) => a.getLength() - b.getLength());
        for (let i = 0; i < additions.length; i++) {
            this.addProcess(additions[i], list);
        }
    }

    public addProcess(p: Process, list: Process[]) {
        if (this.preEmption && list[0] && list[0].getLength() > p.getLength()) {
            // interrupt running process
            interruptActiveProcess(list, 0);
            list.splice(0, 0, p);
            return;
        }
        let n = 1;
        while (n < list.length && list[n].getLength() <= p.getLength()) {
            n++;
        }
        list.splice(n, 0, p);
    }

    public updateProcessList(list: Process[]): void {}

    public removeFinishedProcesses(list: Process[]): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "sjn";
    }

    public handleRamShortage(processes: Process[]): void {
        let i = 0;
        let posFound = false;
        let inProgress = false; // at least on process above the new position has to be in progress already
        const p = processes.shift();
        if (!p) {
            return;
        }
        while (!posFound) {
            if (processes[i].getRemainingLength() < processes[i].getLength()) {
                inProgress = true;
            }
            console.log(i);

            if (
                processes[i].getRemainingLength() <= p.getRemainingLength() &&
                inProgress
            ) {
                posFound = true;
            } else if (i === processes.length) {
                posFound = true;
            } else {
                i++;
            }
        }
        processes.splice(i + 1, 0, p);
    }
}

export {SchedulingAlgorithm, Fifo, Lifo, RR, Priority, SJN};
