/**
 * Created by Vincent Hennig on 13.07.17.
 */

import {Process} from "./processor";
import {drawData, resetScales} from "./statisticsDrawing";
import {statNames} from "./StatNames";
import {select} from "d3-selection";

class Stat {
    public statName : string;
    public coordinates : Array<Coordinate>;

    constructor(statName : string){
        this.statName = statName;
        this.coordinates = [];
    }

    clear(){
        this.coordinates = [];
    }
}

class Coordinate {
    public x : number;
    public y : number;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let avgWaitTime = new Stat(statNames[0]),
    totalWaitingTime = new Stat(statNames[1]),
    totalInterruptions = new Stat(statNames[2]),
    avgInterruptions = new Stat(statNames[3]),
    avgProcessLength = 0,
    longestWaitingTime = new Stat(statNames[4]),
    longestLivingTime = new Stat(statNames[5]),
    longestLivingProcess = "",
    longestWaitingProcess = "",
    statArray = [avgWaitTime, totalWaitingTime, totalInterruptions, avgInterruptions, longestWaitingTime, longestLivingTime];

function updateStats(currentTime: number, processList: Process[]){
    calculateStats(currentTime, processList);
    select("#statsList").html(
        "<li>Calculation time (abs.): " + currentTime + "</li>" +
        "<li>Process length (avg.): " + avgProcessLength + "</li>" +
        "<li>Waiting time (abs.): " + totalWaitingTime.coordinates[totalWaitingTime.coordinates.length - 1].y + "</li>" +
        "<li>Waiting time (avg.): " + avgWaitTime.coordinates[avgWaitTime.coordinates.length - 1].y + "</li>" +
        "<li>Waiting time (longest): " + longestWaitingProcess + " mit " + longestWaitingTime.coordinates[longestWaitingTime.coordinates.length - 1].y + "</li>" +
        "<li>Longest living process: " + longestLivingProcess + " mit " + longestLivingTime.coordinates[longestLivingTime.coordinates.length - 1].y + "</li>" +
        "<li>Interruptions (abs.): " + totalInterruptions.coordinates[totalInterruptions.coordinates.length - 1].y + "</li>" +
        "<li>Interruptons (avg.): " + avgInterruptions.coordinates[avgInterruptions.coordinates.length - 1].y + "</li>"
    );
}

function clearStats(){
    select("#statsList").html("");
    totalWaitingTime.clear();
    avgWaitTime.clear();
    totalInterruptions.clear();
    avgInterruptions.clear();
    avgProcessLength = 0;
    longestWaitingTime.clear();
    longestLivingTime.clear();
    longestWaitingProcess = "";
    longestLivingProcess = "";
    resetScales();
}

function calculateStats(currentTime, processList : Process[]){
    let totalWait = 0, totalInterrupt = 0, longestWait = 0, longestLiving = 0;
    let arrivedProcesses = 0;
    let totalProcessLength = 0;
    let currentWaitingTime = 0, currentLivingTime = 0;
    let currentProcess : Process;
    for (let i = 0; i < processList.length; i++){
        currentProcess = processList[i];
        totalProcessLength += currentProcess.getLength();
        if(currentProcess.getArrival() < currentTime){
            arrivedProcesses++;
            if(currentProcess.getRemainingLength() > 0){
                currentLivingTime = (currentTime - currentProcess.getArrival())
            } else {
                currentLivingTime = currentProcess.getFinishedTime() - currentProcess.getArrival();
            }
            currentWaitingTime = currentLivingTime - (currentProcess.getLength() - currentProcess.getRemainingLength());
            totalWait += currentWaitingTime;

            if(currentWaitingTime > longestWait){
                longestWait = currentWaitingTime;
                longestWaitingProcess = currentProcess.getName();
            }

            if(currentLivingTime > longestLiving){
                longestLiving = currentLivingTime;
                longestLivingProcess = currentProcess.getName();
            }

            totalInterrupt += currentProcess.getInterruptCount();
        }
    }
    totalWaitingTime.coordinates.push(new Coordinate(currentTime, totalWait));
    avgWaitTime.coordinates.push(new Coordinate(currentTime, totalWait / arrivedProcesses || 0));
    totalInterruptions.coordinates.push(new Coordinate(currentTime, totalInterrupt));
    avgInterruptions.coordinates.push(new Coordinate(currentTime, totalInterrupt / arrivedProcesses || 0));
    longestWaitingTime.coordinates.push(new Coordinate(currentTime, longestWait));
    longestLivingTime.coordinates.push(new Coordinate(currentTime, longestLiving));

    avgProcessLength = totalProcessLength / processList.length;
}

function drawStats(){
    drawData();
}

export  {updateStats, clearStats, drawStats, Stat, statArray, Coordinate}