import {Process} from "./processor";

abstract class SchedulingAlgorithm {
    protected preEmption: boolean;

    /**
     * Adds process p to list according to the algorithms rules.
     * (e.g. Fifo adds at the end.)
     * @param additions
     * @param list
     * @param timePassed
     */
    public abstract addProcesses(additions: Process[], list: Process[], timePassed: number): void;

    /**
     * Updates the order of processes in the list according to algorithm rules.
     * @param list
     * @param timePassed
     */
    public abstract updateProcessList(list: Process[], timePassed: number): void;

    /**
     * Removes finished processes
     * @param list
     * @param timePassed
     */
    public abstract removeFinishedProcesses(list: Process[], timePassed: number): Process[];

    /**
     * Returns the name of the algorithm.
     */
    public abstract getName(): string;

    /**
     * Handles insufficient memory.
     * @param processes
     */
    public abstract handleRamShortage(processes: Process[]): void;

    /**
     * Sets if a supported algorithm is preemptive or not.
     * @param b
     */
    public setPreEmption(b: boolean) {
        this.preEmption = b;
    }

    /**
     * Handles finished processes.
     * @param list
     * @param timePassed
     */
    public handleFinishedProcesses(list: Process[], timePassed: number): void {
        const finishedProcesses = this.removeFinishedProcesses(list, timePassed);
        finishedProcesses.forEach((p) => p.setFinishedTime(timePassed));
    }

    /**
     * Interrupts the currently running process and inserts at newIndex in the process list.
     * @param processList
     * @param newIndex
     */
    public static interruptActiveProcess(processList: Process[], newIndex: number) {
        processList[0].interrupt();
        let x = processList.splice(0, 1);
        processList.splice(newIndex, 0, ...x);
    }
}

class Fifo extends SchedulingAlgorithm {
    public addProcesses(additions: Process[], list: Process[], timePasses: number): void {
        list.push(...additions);
    }

    public updateProcessList(list: Process[]): void {
    }

    public removeFinishedProcesses(list: Process[]): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "fifo";
    }

    public handleRamShortage(processes: Process[]): void {
    }
}

class Lifo extends SchedulingAlgorithm {
    preEmption : boolean;

    constructor(preEmption : boolean){
        super();
        this.preEmption = preEmption;
    }

    public addProcesses(additions : Process[], list : Process[], timePassed: number) : void {
        if (this.preEmption && list.length > 0) {
            SchedulingAlgorithm.interruptActiveProcess(list, 0);
            list.splice(0,0,...additions);
        } else {
            list.splice(1, 0, ...additions);
        }
    }

    public updateProcessList(list: Process[]): void {
    }

    public removeFinishedProcesses(list: Process[]): Process[] {
        if (list.length > 0 && list[0].getRemainingLength() <= 0) {
            return list.splice(0, 1);
        }
        return [];
    }

    public getName(): string {
        return "lifo";
    }

    public handleRamShortage(processes: Process[]): void {
    }
}

class RR extends SchedulingAlgorithm {
    private nextDeadline: number;

    constructor(private quantum: number) {
        super();
        this.nextDeadline = quantum;
    }

    public addProcesses(additions: Process[], list: Process[], timePassed: number): void {
        if(list.length == 0) {
            this.nextDeadline = timePassed + this.quantum;
        }
        list.push(...additions);
    }

    public updateProcessList(list: Process[], timePassed: number): void {
        if(timePassed >= this.nextDeadline){
            this.nextDeadline += this.quantum;
            let newIndex = list.length - 1;
            SchedulingAlgorithm.interruptActiveProcess(list, newIndex);
        }
    }

    public removeFinishedProcesses(list: Process[], timePassed: number): Process[] {
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
        processes.push(p);
    }
}

class Priority extends SchedulingAlgorithm {
    public preEmption: boolean;

    constructor(preEmption: boolean) {
        super();
        this.preEmption = preEmption;
    }

    public addProcesses(additions: Process[], list: Process[], timePassed: number): void {
        additions.sort((a, b) => b.getPriority() - a.getPriority());
        for (let i = 0; i < additions.length; i++) {
            this.addProcess(additions[i], list);
        }
    }

    public addProcess(p: Process, list: Process[]) {
        if (this.preEmption && list[0] && list[0].getPriority() < p.getPriority()) {
            // interrupt running process
            SchedulingAlgorithm.interruptActiveProcess(list, 0);
            list.splice(0, 0, p);
            return;
        }
        let n = 1;
        while (n < list.length && list[n].getPriority() >= p.getPriority()) {
            n++;
        }
        list.splice(n, 0, p);
    }

    public updateProcessList(list: Process[]): void {
    }

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
        while (!posFound ) {
            if (processes[i].getRemainingLength() < processes[i].getLength()) {
                inProgress = true;
            }
            if (processes[i].getPriority() <= p.getPriority() && inProgress) {
                posFound = true;
            } else if ( i === processes.length) {
                posFound = true;
            } else {
                i++;
            }
        }
        processes.splice(i + 1, 0, p);
    }
}

class SJN extends SchedulingAlgorithm{

    public addProcesses(additions: Process[], list: Process[], timePassed: number): void {
        additions.sort((a,b)=>{return a.getLength() - b.getLength()});
        for (let i=0; i<additions.length; i++){
            SJN.addProcess(additions[i], list);
        }
    }

   public static addProcess(p:Process, list:Process[]){
        let n = 1;
        while (n < list.length && list[n].getLength() <= p.getLength()) {
            n++;
        }
        list.splice(n, 0, p);
    }

    public updateProcessList(list: Process[]): void {
    }

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
        while (!posFound ) {
            if (processes[i].getRemainingLength() < processes[i].getLength()) {
                inProgress = true;
            }
            if (processes[i].getRemainingLength() <= p.getRemainingLength() && inProgress) {
                posFound = true;
            } else if ( i === processes.length) {
                posFound = true;
            } else {
                i++;
            }
        }
        processes.splice(i + 1, 0, p);
    }
}

class SRTN extends SchedulingAlgorithm{

    addProcesses(additions : Process[], list : Process[], timePassed: number) : void{
        list.push(...additions);
        let first : Process = undefined;
        if(list[0]) first = list[0];
        list.sort(function (a, b) {
            let a_rt = a.getRemainingLength(),
                b_rt = b.getRemainingLength();
            return a_rt - b_rt;
        });
        if(first && first != list[0]) first.interrupt();
    }

    updateProcessList(list : Process[], timePassed : number) : void{
        list.sort(function (a,b) {
            let a_rt = a.getRemainingLength(),
                b_rt = b.getRemainingLength();
            return a_rt - b_rt;
        });
    }

    removeFinishedProcesses(list: Process[], timePassed: number) : Process[]{
        list.forEach(function (p,i) {
            if(list[i].getRemainingLength() <= 0){
                list.splice(i, 1);
            }
        });
        return list;
    }

    getName() : string{
        return "srtn";
    }

    public handleRamShortage(processes: Process[]): void{
        let i = 0;
        let temp : Process = processes.shift();

        processes.forEach(function (p,index) {
            if(p.hasMemory == true){
                i = index;
                return;
            }
        });
        processes.splice(i+1, 0, temp);
    }
}

class HRRN extends SchedulingAlgorithm{

    addProcesses(additions : Process[], list : Process[], timePassed: number) : void{
        list.push(...additions);
    }

    updateProcessList(list : Process[], timePassed : number) : void{
        let first : Process = undefined;

        if(list[0] && list[0].getLength() != list[0].getRemainingLength()){
            first = list.splice(0,1)[0];
        }
        list.sort(function (a,b) {
            let a_rr = (timePassed - a.getArrival() - a.getLength() + a.getRemainingLength()) / a.getLength(),
                b_rr = (timePassed - b.getArrival() - b.getLength() + b.getRemainingLength()) / b.getLength();
            return b_rr - a_rr;
        });
        if (first){
            list.splice(0,0,first);
        }
    }

    removeFinishedProcesses(list: Process[], timePassed: number) : Process[]{
        list.forEach(function (p, i) {
            if (p.getRemainingLength() <= 0) list.splice(i, 1);
        });
        return list;
    }

    getName() : string{
        return "hrrn";
    }

    public handleRamShortage(processes: Process[]){
    }

}

export {SchedulingAlgorithm, Fifo, Lifo, RR, Priority, SJN, SRTN, HRRN};