import {select} from "d3-selection";
import {drawMemData, resetMemScales} from "./memStatisticsDrawing";
import {Process} from "../processor";
import {Coordinate} from "../statistics";
import {memStatNames} from "../StatNames";

class MemStat {
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

const memoryUsage = new MemStat(memStatNames[0]);
const avgMemUsage = new MemStat(memStatNames[1]);
const maxMemUsage = new MemStat(memStatNames[2]);
const totalRejects = new MemStat(memStatNames[3]);
const avgRejects = new MemStat(memStatNames[4]);
const memStatArray = [memoryUsage, avgMemUsage, maxMemUsage, totalRejects, avgRejects];

/**
 * Updates the memory statistics.
 * @param currentTime
 * @param processList
 * @param memSize
 */
function updateMemStats(currentTime: number, processList: Process[], memSize: number) {
    calculateMemStats(currentTime, processList, memSize);
    select("#statsList")
        .append("li")
        .attr("class", "item")
        .text("memory usage: " + memoryUsage.coordinates[memoryUsage.coordinates.length - 1].y + "/" + memSize)
        .append("li")
        .attr("class", "item")
        .text("memory usage (avg.): " + (avgMemUsage.coordinates[avgMemUsage.coordinates.length - 1].y ).toFixed(2))
        .append("li")
        .attr("class", "item")
        .text("memory usage (max.): " + maxMemUsage.coordinates[maxMemUsage.coordinates.length - 1].y)
        .append("li")
        .attr("class", "item")
        .text("rejections: " + totalRejects.coordinates[totalRejects.coordinates.length - 1].y)
        .append("li")
        .attr("class", "item")
        .text("rejections (avg. EXPERIMENTAL): " + (avgRejects.coordinates[avgRejects.coordinates.length - 1].y ) + "%");
}

/**
 * Calculates statistic values.
 * @param currentTime
 * @param processList
 * @param memSize
 */
function calculateMemStats(currentTime: number, processList: Process[] ,memSize : number) {
    let currentProcess: Process;
    let totalMemUsage = 0;
    let usedMemory = 0;
    let rejectCount = 0;

    for (let i = 0; i < processList.length; i++) {
        currentProcess = processList[i];
        if (currentProcess.hasMemory) usedMemory += currentProcess.memoryUsage;
        rejectCount += currentProcess.getRejectCount();
    }

    if (maxMemUsage.coordinates.length <= 0) {
        maxMemUsage.coordinates.push(new Coordinate(currentTime, usedMemory));
    } else if (usedMemory > maxMemUsage.coordinates[maxMemUsage.coordinates.length - 1].y) {
        maxMemUsage.coordinates.push(new Coordinate(currentTime, usedMemory));
    } else {
        maxMemUsage.coordinates.push(
            new Coordinate(currentTime, maxMemUsage.coordinates[maxMemUsage.coordinates.length - 1].y)
        );
    }
    memoryUsage.coordinates.push(new Coordinate(currentTime, usedMemory));

    for (let i = 0; i < memoryUsage.coordinates.length; i++) {
        totalMemUsage += memoryUsage.coordinates[i].y;
    }

    if(avgMemUsage.coordinates.length > 0){
        avgMemUsage.coordinates.push(new Coordinate(currentTime, (totalMemUsage/avgMemUsage.coordinates.length)));
    }else{
        avgMemUsage.coordinates.push(new Coordinate(currentTime, totalMemUsage/memSize));
    }

    totalRejects.coordinates.push(new Coordinate(currentTime, rejectCount));

    avgRejects.coordinates.push(new Coordinate(currentTime,
        totalRejects.coordinates[totalRejects.coordinates.length - 1].y / avgMemUsage.coordinates.length || 0,
        ));
}

/**
 * Resets memory statistics.
 * @param memoryAllowed
 */
function clearMemStats(memoryAllowed : boolean) {
    if(!memoryAllowed) return;
    select("#statsList").html("");
    memoryUsage.clear();
    avgMemUsage.clear();
    maxMemUsage.clear();
    totalRejects.clear();
    avgRejects.clear();
    resetMemScales();
}

/**
 * Calls drawMemData().
 */
function drawMemStats() {
    drawMemData();
}

export {updateMemStats, clearMemStats, drawMemStats, MemStat, memStatArray};