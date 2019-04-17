/*
 * Created by Clemens Gläser on 06.02.18 11:10
 */

import {ScaleOrdinal} from "d3-scale";
import {Disk} from "./diskModels";
import {createDiskSpaceAnimator} from "./factoryMethods";
import {Process} from "./processor";

let diskSpaceAnimator = createDiskSpaceAnimator();

function updateDiskSpaceAnimator(disk: Disk) {
    diskSpaceAnimator = createDiskSpaceAnimator();
}

function setTransitionDuration(n: number) {
    diskSpaceAnimator.setTransitionDuration(n);
}

function addDiskVisually(disk: Disk) {
    diskSpaceAnimator.initDiskSpaceVisually(disk);
}

function animateDiskSpaceAllocation(
    process: Process,
    disk: Disk,
    color: ScaleOrdinal<string, string>,
    type: "pre" | "post"
) {
    diskSpaceAnimator.animateDiskSpaceAllocation(process, disk, color, type);
}

function animateDiskSpaceDeallocation(
    process: Process,
    disk: Disk,
    type: "pre" | "post"
) {
    diskSpaceAnimator.animateDiskSpaceDeallocation(process, disk, type);
}

function resetDiskSpaceAnimation(disk: Disk) {
    diskSpaceAnimator.resetDiskSpaceAnimation(disk);
}

export {
    addDiskVisually,
    animateDiskSpaceAllocation,
    animateDiskSpaceDeallocation,
    setTransitionDuration,
    updateDiskSpaceAnimator,
    resetDiskSpaceAnimation
};
