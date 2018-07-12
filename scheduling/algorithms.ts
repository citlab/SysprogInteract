import {Process} from "./processor";
import {precisionFixed} from "d3-format";
/**
    * Created by Vincent Hennig on 30.05.17.
    */
abstract class SchedulingAlgorithm{
    protected preEmption : boolean;

    //adds process p to list according to the algorithms rules
    //(e.g. Fifo adds at the end)
    abstract addProcesses(additions : Process[], list : Process[], timePassed: number) : void;

    //updates the order of processes in the list according to algorithm rules
    abstract updateProcessList(list : Process[], timePassed : number) : void;

    //removes finished processes
    abstract removeFinishedProcesses(list: Process[], timePassed: number) : Process[];

    abstract getName() : string

    setPreEmption(b : boolean){
        this.preEmption = b;
    }

    handleFinishedProcesses(list : Process[], timePassed : number) : void{
        let finishedProcesses = this.removeFinishedProcesses(list, timePassed);
        finishedProcesses.forEach(p => p.setFinishedTime(timePassed));
    }

    //interrupts the currently running process and inserts it at newIndex in the processList
    interruptActiveProcess(processList : Process[], newIndex : number){
        processList[0].interrupt();
        let x = processList.splice(0, 1);
        processList.splice(newIndex, 0, ...x);
    }
}

class Fifo extends SchedulingAlgorithm{
    addProcesses(additions : Process[], list : Process[], timePasses: number) : void{
        list.push(...additions);
    }

    updateProcessList(list) : void{

    }

    removeFinishedProcesses(list: Process[]): Process[] {
        if(list.length > 0 && list[0].getRemainingLength() <= 0){
            return list.splice(0,1);
        }
        return [];
    }

    getName() : string {
        return "fifo";
    }
}

class Lifo extends SchedulingAlgorithm{
    preEmption : boolean;

    constructor(preEmption : boolean){
        super();
        this.preEmption = preEmption;
    }


    addProcesses(additions : Process[], list : Process[], timePassed: number) : void {

        if (this.preEmption && list.length > 0) {
            this.interruptActiveProcess(list, 0);
            list.splice(0,0,...additions);


        } else list.splice(1, 0, ...additions);
    }


    updateProcessList(list) : void{
    }

    removeFinishedProcesses(list: Process[]): Process[] {
        if(list.length > 0 && list[0].getRemainingLength() <= 0){
            return list.splice(0,1);
        }
        return [];
    }

    getName() : string {
        return "lifo";
    }
}

class RR extends SchedulingAlgorithm{
    private quantum : number;
    private nextDeadline : number;

    constructor(quantum : number){
        super();
        this.quantum = quantum;
        this.nextDeadline = quantum;
    }

    addProcesses(additions, list, timePassed: number): void {

        if(list.length == 0) {
            this.nextDeadline = timePassed + this.quantum;
        }
        list.push(...additions);
    }

    updateProcessList(list, timePassed): void {





        if(timePassed >= this.nextDeadline){
            this.nextDeadline += this.quantum;
            let newIndex = list.length - 1;
            this.interruptActiveProcess(list, newIndex);
        }



    }

    removeFinishedProcesses(list: Process[], timePassed: number): Process[] {
        if(list.length > 0 && list[0].getRemainingLength() <= 0){
            this.nextDeadline = timePassed + this.quantum;
            return list.splice(0,1);
        }
        return [];
    }

    getName() : string {
        return "rr";
    }
}

class Priority extends SchedulingAlgorithm{
    preEmption : boolean;

    constructor(preEmption : boolean){
        super();
        this.preEmption = preEmption;
    }

    addProcesses(additions: Process[], list: Process[], timePassed: number): void {
        additions.sort((a,b)=>{return b.getPriority() - a.getPriority()});
        for (let i=0; i<additions.length; i++){
            this.addProcess(additions[i], list);
        }
    }

    addProcess(p:Process, list:Process[]){
        if(this.preEmption && list[0] && list[0].getPriority() < p.getPriority()){
            //interrupt running process
            this.interruptActiveProcess(list, 0);
            list.splice(0,0,p);
            return;
        }
        let n = 1;
        while(n < list.length && list[n].getPriority() >= p.getPriority()){
            n++;
        }
        list.splice(n,0,p);
    }

    updateProcessList(list: Process[]): void {

    }

    removeFinishedProcesses(list: Process[]): Process[] {
        if(list.length > 0 && list[0].getRemainingLength() <= 0){
            return list.splice(0,1);
        }
        return [];
    }

    getName(): string {
        return "priority";
    }

}

class SJN extends SchedulingAlgorithm{


    addProcesses(additions: Process[], list: Process[], timePassed: number): void {
        additions.sort((a,b)=>{return a.getLength() - b.getLength()});
        for (let i=0; i<additions.length; i++){
            this.addProcess(additions[i], list);
        }
    }

    addProcess(p:Process, list:Process[]){
        let n = 1;
        while(n < list.length && list[n].getLength() <= p.getLength()){
            n++;
        }
        list.splice(n,0,p);
    }

    updateProcessList(list: Process[]): void {

    }

    removeFinishedProcesses(list: Process[]): Process[] {
        if(list.length > 0 && list[0].getRemainingLength() <= 0){
            return list.splice(0,1);
        }
        return [];
    }

    getName(): string {
        return "sjn";
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

}

class HRRN extends SchedulingAlgorithm{
    //addProcessToList acording to algortihm
    addProcesses(additions : Process[], list : Process[], timePassed: number) : void{
        list.push(...additions);
    }


    updateProcessList(list : Process[], timePassed : number) : void{

        let first : Process = undefined,
            splice : boolean = false;
        if(list[0] && list[0].getLength() != list[0].getRemainingLength()){
            first = list.splice(0,1)[0];
        };

        list.sort(function (a,b) {
            let a_rr = (timePassed - a.getArrival() - a.getLength() + a.getRemainingLength()) / a.getLength(),
                b_rr = (timePassed - b.getArrival() - b.getLength() + b.getRemainingLength()) / b.getLength();
            return b_rr - a_rr;
        })

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

}

export {SchedulingAlgorithm, Fifo, Lifo, RR, Priority, SJN, SRTN, HRRN};