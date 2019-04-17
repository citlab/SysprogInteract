/*
 * Created by Clemens Gläser on 08.04.18 12:58
 */

import {select} from "d3-selection";
import {Disk} from "../diskModels";
import {get} from "../localStorage/helpers";
import {LocalStorageKeys} from "../localStorage/keys";
import {Process} from "../processor";
import {addBaseAndMaxAndAvg, addListEntryCurry} from "./helpers";
import {Stat} from "./models";
import {StatisticsDrawer} from "./StatisticsDrawer";
import {diskStatNames} from "./StatNames";

const pureDisk = new Stat(diskStatNames[0]);
const pureAvgDisk = new Stat(diskStatNames[1]);
const pureMaxDisk = new Stat(diskStatNames[2]);
const effectiveDisk = new Stat(diskStatNames[3]);
const effectiveAvgDisk = new Stat(diskStatNames[4]);
const effectiveMaxDisk = new Stat(diskStatNames[5]);
const diskStatArray = [
    pureDisk,
    pureAvgDisk,
    pureMaxDisk,
    effectiveDisk,
    effectiveAvgDisk,
    effectiveMaxDisk
];
const drawer = new StatisticsDrawer("diskStats", diskStatArray);
function updateDiskStats(
    currentTime: number,
    processList: Process[],
    disk: Disk
) {
    calculateDiskStats(currentTime, processList, disk);

    const add = addListEntryCurry(select("#statsList"));
    const diskSize = get<number>(LocalStorageKeys.DISK_SIZE);
    if (pureDisk.last) {
        add(`pure disk usage: ${pureDisk.last.y}/${diskSize}`);
    }
    if (pureAvgDisk.last) {
        const value = ((pureAvgDisk.last.y / diskSize) * 100).toFixed(3);
        add(`pure disk usage (avg.): ${value}%`);
    }
    if (pureMaxDisk.last) {
        add(`pure disk usage (max.): ${pureMaxDisk.last.y}`);
    }
    if (effectiveDisk.last) {
        add(`effective disk usage: ${effectiveDisk.last.y}/${diskSize}`);
    }
    if (effectiveAvgDisk.last) {
        const value = ((effectiveAvgDisk.last.y / diskSize) * 100).toFixed(3);
        add(`effective disk usage (avg.): ${value}%`);
    }
    if (effectiveMaxDisk.last) {
        add(`effective disk usage (max.): ${effectiveMaxDisk.last.y}`);
    }
}

function calculateDiskStats(
    currentTime: number,
    processList: Process[],
    disk: Disk
) {
    const pureUsed = processList
        .filter((process) => process.hasMemory)
        .reduce((prev, curr) => prev + curr.diskUsage, 0);

    addBaseAndMaxAndAvg(currentTime, pureUsed, [
        pureDisk,
        pureMaxDisk,
        pureAvgDisk
    ]);

    /* Effective stats */
    const effectiveUsed = disk
        .toPieData()
        .filter((v) => v.owner !== "")
        .reduce((prev, curr) => prev + curr.size * disk.sizePerBlock, 0); // pieData's size refers to amount of blocks

    addBaseAndMaxAndAvg(currentTime, effectiveUsed, [
        effectiveDisk,
        effectiveMaxDisk,
        effectiveAvgDisk
    ]);
}

function clearDiskStats() {
    select("#statsList").html("");
    diskStatArray.forEach((stat) => stat.clear());
    drawer.resetScales();
}

function drawDiskStats() {
    drawer.draw();
}

export {updateDiskStats, clearDiskStats, drawDiskStats};
