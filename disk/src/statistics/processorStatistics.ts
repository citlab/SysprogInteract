/**
 * Created by Vincent Hennig on 13.07.17.
 */

import {select} from "d3-selection";
import {Process} from "../processor";
import {addListEntryCurry} from "./helpers";
import {Coordinate, Stat} from "./models";
import {StatisticsDrawer} from "./StatisticsDrawer";
import {statNames} from "./StatNames";

const avgWaitTime = new Stat(statNames[0]);
const totalWaitingTime = new Stat(statNames[1]);
const totalInterruptions = new Stat(statNames[2]);
const avgInterruptions = new Stat(statNames[3]);
const longestWaitingTime = new Stat(statNames[4]);
const longestLivingTime = new Stat(statNames[5]);
let avgProcessLength = 0;
let longestWaitingProcess = "";
let longestLivingProcess = "";
const statArray = [
    avgWaitTime,
    totalWaitingTime,
    totalInterruptions,
    avgInterruptions,
    longestWaitingTime,
    longestLivingTime
];
const drawer = new StatisticsDrawer("stats", statArray);

function updateStats(currentTime: number, processList: Process[]) {
    calculateStats(currentTime, processList);
    const selector = select("#statsList");
    selector.html("");
    const add = addListEntryCurry(selector);
    add(`calculation time (total): ${currentTime}`);
    add(`process length (avg.): ${avgProcessLength}`);
    if (totalWaitingTime.last) {
        add(`waiting time (total): ${totalWaitingTime.last.y}`);
    }
    if (avgWaitTime.last) {
        add(`waiting time (avg.): ${avgWaitTime.last.y}`);
    }
    if (longestWaitingTime.last) {
        add(
            `longest waiting process: ${longestWaitingProcess} with ${
                longestWaitingTime.last.y
            }`
        );
    }
    if (longestLivingTime.last) {
        add(
            `longest living time: ${longestLivingProcess} with ${
                longestLivingTime.last.y
            }`
        );
    }
    if (totalInterruptions.last) {
        add(`interruptions: ${totalInterruptions.last.y}`);
    }
    if (avgInterruptions.last) {
        add(`interruptions (avg.): ${avgInterruptions.last.y}`);
    }
}

function clearStats() {
    select("#statsList").html("");
    statArray.forEach((v) => v.clear());
    avgProcessLength = 0;
    longestWaitingProcess = "";
    longestLivingProcess = "";
    drawer.resetScales();
}

function calculateStats(currentTime: number, processList: Process[]) {
    let totalWait = 0;
    let totalInterrupt = 0;
    let longestWait = 0;
    let longestLiving = 0;
    let arrivedProcesses = 0;
    let totalProcessLength = 0;
    let currentWaitingTime = 0;
    let currentLivingTime = 0;

    processList.forEach((currentProcess) => {
        totalProcessLength += currentProcess.getLength();
        if (currentProcess.getArrival() < currentTime) {
            arrivedProcesses++;
            if (currentProcess.getRemainingLength() > 0) {
                currentLivingTime = currentTime - currentProcess.getArrival();
            } else {
                currentLivingTime =
                    currentProcess.getFinishedTime() -
                    currentProcess.getArrival();
            }
            currentWaitingTime =
                currentLivingTime -
                (currentProcess.getLength() -
                    currentProcess.getRemainingLength());
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
    });

    totalWaitingTime.add(new Coordinate(currentTime, totalWait));
    avgWaitTime.add(
        new Coordinate(currentTime, totalWait / arrivedProcesses || 0)
    );
    totalInterruptions.add(new Coordinate(currentTime, totalInterrupt));
    avgInterruptions.add(
        new Coordinate(currentTime, totalInterrupt / arrivedProcesses || 0)
    );
    longestWaitingTime.add(new Coordinate(currentTime, longestWait));
    longestLivingTime.add(new Coordinate(currentTime, longestLiving));

    avgProcessLength = totalProcessLength / processList.length;
}

function drawStats() {
    drawer.draw();
}

export {updateStats, clearStats, drawStats};
