/**
 * Created by Joe on 16.01.18.
 */
import {select} from "d3-selection";
import {get} from "../localStorage/helpers";
import {LocalStorageKeys} from "../localStorage/keys";
import {Process} from "../processor";
import {addBaseAndMaxAndAvg, addListEntryCurry} from "./helpers";
import {Coordinate, Stat} from "./models";
import {StatisticsDrawer} from "./StatisticsDrawer";
import {memStatNames} from "./StatNames";

// vars------------------
const memoryUsage = new Stat(memStatNames[0]);
const avgMemUsage = new Stat(memStatNames[1]);
const maxMemUsage = new Stat(memStatNames[2]);
const totalRejects = new Stat(memStatNames[3]);
const avgRejects = new Stat(memStatNames[4]);
const memStatArray = [
    memoryUsage,
    avgMemUsage,
    maxMemUsage,
    totalRejects,
    avgRejects
];
const drawer = new StatisticsDrawer("memStats", memStatArray);
// ----------------------

function updateMemStats(currentTime: number, processList: Process[]) {
    calculateMemStats(currentTime, processList);

    const add = addListEntryCurry(select("#statsList"));
    const memorySize = get<number>(LocalStorageKeys.MEMORY_SIZE);
    if (memoryUsage.last) {
        add(`memory usage: ${memoryUsage.last.y}/${memorySize}`);
    }
    if (avgMemUsage.last) {
        const value = ((avgMemUsage.last.y / memorySize) * 100).toFixed(3);
        add(`memory usage (avg.): ${value}%`);
    }
    if (maxMemUsage.last) {
        add(`memory usage (max.): ${maxMemUsage.last.y}`);
    }
    if (totalRejects.last) {
        add(`rejections: ${totalRejects.last.y}`);
    }
    if (avgRejects.last) {
        add(`rejections (avg.): ${avgRejects.last.y}%`);
    }
}

/*
TODO: add the stats you want.
 */
function calculateMemStats(currentTime: number, processList: Process[]) {
    let usedMemory = 0;
    let rejectCount = 0;

    processList.forEach((currentProcess) => {
        // Usage
        if (currentProcess.hasMemory) {
            usedMemory += currentProcess.memoryUsage;
        }
        // totalRejectsCount
        rejectCount += currentProcess.getRejectCount();
    });

    addBaseAndMaxAndAvg(currentTime, usedMemory, [
        memoryUsage,
        maxMemUsage,
        avgMemUsage
    ]);

    // totalRejects
    totalRejects.coordinates.push(new Coordinate(currentTime, rejectCount));

    // avgRejects
    avgRejects.coordinates.push(
        new Coordinate(
            currentTime,
            (totalRejects.last!.y / avgMemUsage.coordinates.length) * 100 || 0
        )
    );
}

function clearMemStats() {
    select("#statsList").html("");
    memStatArray.forEach((v) => v.clear());
    drawer.resetScales();
}

function drawMemStats() {
    drawer.draw();
}

export {updateMemStats, clearMemStats, drawMemStats};
