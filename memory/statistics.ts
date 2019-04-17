import {select} from "d3-selection";
import {Process} from "./processor";
import {drawData, resetScales} from "./statisticsDrawing";
import {statNames} from "./StatNames";

class Stat {
    public statName: string;
    public coordinates: Coordinate[];

    constructor(statName: string) {
        this.statName = statName;
        this.coordinates = [];
    }

    public clear() {
        this.coordinates = [];
    }
}

class Coordinate {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const avgWaitTime = new Stat(statNames[0]);
const totalWaitingTime = new Stat(statNames[1]);
const totalInterruptions = new Stat(statNames[2]);
const avgInterruptions = new Stat(statNames[3]);
const longestWaitingTime = new Stat(statNames[4]);
const longestLivingTime = new Stat(statNames[5]);
const statArray = [avgWaitTime, totalWaitingTime, totalInterruptions, avgInterruptions, longestWaitingTime, longestLivingTime];
let avgProcessLength = 0;
let longestLivingProcess = "";
let longestWaitingProcess = "";

/**
 * Updates process statistics values.
 * @param currentTime
 * @param processList
 */
function updateStats(currentTime: number, processList: Process[]) {
    calculateStats(currentTime, processList);
    // language=HTML
    select("#statsList").html(
        "<li class='item'>clock cycles: " + currentTime + "</li>" +
        "<li class='item'>process length (avg.): " + avgProcessLength + "</li>" +
        "<li class='item'>waiting time (abs.): " + totalWaitingTime.coordinates[totalWaitingTime.coordinates.length - 1].y + "</li>" +
        "<li class='item'>waiting time (avg.): " + avgWaitTime.coordinates[avgWaitTime.coordinates.length - 1].y + "</li>" +
        "<li class='item'>waiting time (longest): " + longestWaitingProcess + " mit " + longestWaitingTime.coordinates[longestWaitingTime.coordinates.length - 1].y + "</li>" +
        "<li class='item'>longest living process: " + longestLivingProcess + " mit " + longestLivingTime.coordinates[longestLivingTime.coordinates.length - 1].y + "</li>" +
        "<li class='item'>interruptions (abs.): " + totalInterruptions.coordinates[totalInterruptions.coordinates.length - 1].y + "</li>" +
        "<li class='item'>interruptions (avg.): " + avgInterruptions.coordinates[avgInterruptions.coordinates.length - 1].y + "</li>",
    );
}

/**
 * Resets process statistics.
 */
function clearStats() {
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

/**
 * Calculates process statistics values.
 * @param currentTime
 * @param processList
 */
function calculateStats(currentTime: number, processList: Process[]) {
    let totalWait = 0;
    let totalInterrupt = 0;
    let longestWait = 0;
    let longestLiving = 0;
    let arrivedProcesses = 0;
    let totalProcessLength = 0;
    let currentWaitingTime = 0;
    let currentLivingTime = 0;
    let currentProcess: Process;
    for (let i = 0; i < processList.length; i++) {
        currentProcess = processList[i];
        totalProcessLength += currentProcess.getLength();
        if (currentProcess.getArrival() < currentTime) {
            arrivedProcesses++;
            if (currentProcess.getRemainingLength() > 0) {
                currentLivingTime = (currentTime - currentProcess.getArrival());
            } else {
                currentLivingTime = currentProcess.getFinishedTime() - currentProcess.getArrival();
            }
            currentWaitingTime = currentLivingTime - (currentProcess.getLength() - currentProcess.getRemainingLength());
            totalWait += currentWaitingTime;

            if (currentWaitingTime > longestWait) {
                longestWait = currentWaitingTime;
                longestWaitingProcess = currentProcess.getName();
            }
            if (currentLivingTime > longestLiving) {
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

/**
 * Calls drawData().
 */
function drawStats() {
    drawData();
}

export  {updateStats, clearStats, drawStats, Stat, statArray, Coordinate};