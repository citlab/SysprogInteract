import {SchedulingAlgorithm} from "./algorithms";
/**
    * Created by Vincent Hennig on 30.05.17.
    */
class Processor{
    private schedulingAlgorithm : SchedulingAlgorithm;
    private processes : Process[];

    constructor(schedulingAlgorithm : SchedulingAlgorithm){
        this.schedulingAlgorithm = schedulingAlgorithm;
        this.processes = [];
    }

    addProcesses(additions : Process[], timePassed: number) : void{
        this.schedulingAlgorithm.addProcesses(additions, this.processes, timePassed);
    }

    calculationStep() : void{
        if(this.processes.length > 0){
            this.processes[0].decreaseRemainingLength();
        }
    }

    getProcessList() : Process[]{
        return this.processes;
    }

    updateProcessList(timePassed : number){
        this.schedulingAlgorithm.updateProcessList(this.processes, timePassed);
    }

    removeFinishedProcesses(timePassed : number){
        this.schedulingAlgorithm.handleFinishedProcesses(this.processes, timePassed);
    }
}

class Process{
    private arrival: number;
    private finishedTime : number;
    private length: number;
    private remainingLength: number;
    private priority: number;
    private interruptCount = 0;
    private name: string;
    public listIndex: number;


    constructor(arrival, length, priority, name){
        this.arrival = arrival;
        this.length = length;
        this.remainingLength = length;
        this.priority = priority;
        this.name = name;
    }

    getPriority(){
        return this.priority;
    }

    getArrival(){
        return this.arrival;
    }

    getLength(){
        return this.length;
    }

    getRemainingLength(){
        return this.remainingLength;
    }

    decreaseRemainingLength(){
        this.remainingLength--;
    }

    getName(){
        return this.name;
    }

    resetRemainingLength() {
        this.remainingLength = this.length;
    }

    setFinishedTime(time){
        this.finishedTime = time;
    }

    getFinishedTime(){
        return this.finishedTime;
    }

    interrupt(){
        this.interruptCount++;
    }

    getInterruptCount(){
        return this.interruptCount;
    }

    resetInterruptCount(){
        this.interruptCount = 0;
    }
}

export {Process};
export {Processor};