/*
 * Created by Clemens Gläser on 11.04.18 14:51
 */

import {select} from "d3-selection";
import {
    createDiskSpaceAllocationAlgorithm,
    createMemoryAlgorithm,
    createSchedulingAlgorithm
} from "../factoryMethods";
import {allLocalStorageKeys, get} from "../localStorage/helpers";
import {LocalStorageKeys} from "../localStorage/keys";
import {Process} from "../processor";
import {
    BuddySystemExtra,
    DiskFields,
    MemoryFields,
    ProcessLike,
    ProcessorFields,
    SerializedKeyValues,
    SwappingFields
} from "../saveLoadFormat";
import {getProcessList} from "../scheduling";

export function processLikeFrom(process: Process): ProcessLike {
    return {
        arrival: process.getArrival(),
        diskUsage: process.diskUsage,
        duration: process.getLength(),
        memoryUsage: process.getMemoryUsage(),
        name: process.getName(),
        priority: process.getPriority()
    };
}

export function getDefinedProcesses(): ProcessLike[] {
    const result: ProcessLike[] = [];
    getProcessList().forEach((value) => result.push(processLikeFrom(value)));
    return result;
}

export function getProcessorFields(): ProcessorFields | undefined {
    const algorithm = createSchedulingAlgorithm();
    if (!algorithm) {
        return undefined;
    }

    const name = algorithm.getName();
    return {
        algorithm: {
            extra: determineProcessorExtra(name),
            name
        }
    };
}

function determineProcessorExtra(name: string): boolean | number | undefined {
    if (name === "sjn" || name === "priority") {
        return (document.getElementById(
            "interruptCheckBox"
        ) as HTMLInputElement).checked;
    }
    if (name === "rr") {
        return (document.getElementById("quantum") as HTMLInputElement)
            .valueAsNumber;
    }
    return undefined;
}

export function toggleProcessorExtra(name: string) {
    document.getElementById("interruptCheckBoxContainer")!.style.display =
        name === "sjn" || name === "priority" ? "flex" : "none";
    document.getElementById("rrQuantumContainer")!.style.display =
        name === "rr" ? "flex" : "none";
}

export function getMemoryFields(): MemoryFields | undefined {
    const algorithm = createMemoryAlgorithm();
    if (!algorithm) {
        return undefined;
    }

    const name = algorithm.getName();
    const extra = determineMemoryExtra(name);
    return {
        algorithm: {
            extra,
            name
        }
    };
}

function determineMemoryExtra(name: string): BuddySystemExtra | undefined {
    if (name !== "Buddy System") {
        return undefined;
    }

    const canOverstep = (document.getElementById(
        "buddyOverstep"
    ) as HTMLInputElement).checked;
    const minSize = (document.getElementById(
        "buddyMinSize"
    ) as HTMLInputElement).valueAsNumber;
    return {
        canOverstep,
        minSize
    };
}

export function toggleMemoryExtra(name: string) {
    document.getElementById("buddyContainer")!.style.display =
        name === "Buddy System" ? "flex" : "none";
}

export function getDiskFields(): DiskFields | undefined {
    const algorithm = createDiskSpaceAllocationAlgorithm();
    if (!algorithm) {
        return undefined;
    }

    const name = algorithm.getName();
    const extra = determineDiskExtra(name);
    return {
        algorithm: {
            extra,
            name
        }
    };
}

// in case if extra algorithm data is needed in the save file
function determineDiskExtra(name: string = ""): undefined {
    if (!name) {
    } // ensure name is used to prevent warning
    return undefined;
}

export function toggleDiskExtra(name: string = "") {
    if (!name) {
    } // ensure name is used to prevent warning
    // placeholder for future extension
}

export function getSerializedLocalStorage(): SerializedKeyValues {
    const result: SerializedKeyValues = {};
    allLocalStorageKeys().forEach((v) => {
        result[v] = JSON.stringify(get(v));
    });
    return result;
}

export function getSwappingFields(): SwappingFields | undefined {
    const name = (select("#swappingStrategy").node() as HTMLSelectElement)
        .value;
    const extra = determineSwappingExtra(name);

    return {
        algorithm: {
            extra,
            name
        }
    };
}

export function determineSwappingExtra(name: string = ""): undefined {
    if (!name) {
    } // ensure name is used to prevent warning
    return undefined;
}

export function toggleSwappingExtra(name: string = "") {
    if (!name) {
    } // ensure name is used to prevent warning
    select("#swappingStrategyContainer").style("display", function() {
        return get<boolean>(LocalStorageKeys.SWAPPING_ENABLED)
            ? "flex"
            : "none";
    });
}
