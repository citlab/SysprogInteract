/*
Load/Save stuff
 */
import {map, Map} from "d3-collection";
import {select} from "d3-selection";
import {createAndAddProcess} from "./factoryMethods";
import {setItem} from "./localStorage/TypedLocalStorage";
import {
    BuddySystemExtra,
    DiskFields,
    MemoryFields,
    ProcessLike,
    ProcessorFields,
    SaveFormat,
    SaveFormatVersion0,
    SaveFormatVersion1,
    SerializedKeyValues,
    SwappingFields
} from "./saveLoadFormat";
import {clearListItems, getProcessList} from "./scheduling";
import {
    getDefinedProcesses,
    getDiskFields,
    getMemoryFields,
    getProcessorFields,
    getSerializedLocalStorage,
    getSwappingFields,
    toggleDiskExtra,
    toggleMemoryExtra,
    toggleProcessorExtra,
    toggleSwappingExtra
} from "./util/saveLoadHelpers";
import {requireBoolean, requireNumber} from "./util/typeHelpers";

export function saveConfig() {
    const saveFile = createSaveFileJson();

    // colons (':') are not valid on windows
    const friendlyDate = new Date().toISOString().replace(/:/g, ".");
    const fileName = `scheduling_config_${friendlyDate}.json`;
    saveToDisk(saveFile, fileName);
}

/**
 * Saves the given content to disk named as fileName.
 * Based on https://stackoverflow.com/a/48918200
 * @param {string} content - the content of the file
 * @param {string} fileName - defaults to "scheduling_config.json"
 */
function saveToDisk(
    content: string,
    fileName: string = "scheduling_config.json"
) {
    const workElement: HTMLAnchorElement = document.createElement("a");
    if ("download" in workElement) {
        workElement.href =
            "data:" + "text/plain" + "charset=utf-8," + escape(content);
        workElement.setAttribute("download", fileName);
        document.body.appendChild(workElement);
        const eventMouse = document.createEvent("MouseEvents");
        eventMouse.initMouseEvent(
            "click",
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        workElement.dispatchEvent(eventMouse);
        document.body.removeChild(workElement);
    } else {
        throw new Error("file saving not supported in this browser!");
    }
}

export function loadConfig() {
    const fr: FileReader = new FileReader();
    let savePlain: string = "";

    // extract Data;
    const x: Blob = (document.getElementById("inputID") as HTMLInputElement)!
        .files![0];

    fr.onload = function(e) {
        savePlain = (e.target as any).result;
        readSaveFileJson(savePlain);
    };
    fr.readAsText(x, "UTF-8");
}

function createSaveFileJson(): string {
    const save: SaveFormat = {
        disk: getDiskFields(),
        localStorage: getSerializedLocalStorage(),
        memory: getMemoryFields(),
        processes: getDefinedProcesses(),
        processor: getProcessorFields(),
        swapping: getSwappingFields(),
        version: 1
    };
    return JSON.stringify(save);
}

function readSaveFileJson(saveJsonText: string) {
    const save: SaveFormat = JSON.parse(saveJsonText);
    switch (save.version) {
        case 0:
            handleSaveVersion0(save);
            break;
        case 1:
            handleSaveVersion1(save);
            break;
    }
}

function malformedSave(
    key: string,
    name: string,
    expected: string,
    actual: string
): never {
    throw new Error(
        `Save is malformed! For key '${key}' and algorithm '${name}' type '${expected}' was expected but we got '${actual}'`
    );
}

function handleSaveVersion0(save: SaveFormatVersion0) {
    const {processes, processor, memory, disk, localStorage} = save;

    restoreProcesses(processes);
    restoreProcessor(processor);
    restoreMemory(memory);
    restoreDisk(disk);
    restoreLocalStorage(localStorage);
}

function handleSaveVersion1(save: SaveFormatVersion1) {
    const {processes, processor, memory, disk, localStorage, swapping} = save;

    restoreProcesses(processes);
    restoreProcessor(processor);
    restoreMemory(memory);
    restoreDisk(disk);
    restoreLocalStorage(localStorage);
    restoreSwapping(swapping);
}

function restoreProcesses(processes: ProcessLike[]) {
    if (processes) {
        // wipe current processes
        clearListItems();
        const oldProcesses = getProcessList();
        oldProcesses.splice(0, oldProcesses.length);
        // add processes from save
        processes.forEach((v) =>
            createAndAddProcess(
                v.duration,
                v.arrival,
                v.priority,
                v.name,
                v.memoryUsage,
                v.diskUsage
            )
        );
    }
}

function restoreProcessor(processor?: ProcessorFields) {
    if (processor) {
        const algo = processor.algorithm;
        toggleProcessorExtra(algo.name);
        select("#schedulingAlgorithm")
            .selectAll<HTMLOptionElement, {}>("option")
            .attr("selected", function(this: HTMLOptionElement) {
                return this.value === algo.name ? "selected" : null;
            });

        if (algo.name === "sjn" || algo.name === "priority") {
            if (!requireBoolean(algo.extra)) {
                malformedSave(
                    "processor.algorithm.extra",
                    algo.name,
                    "boolean",
                    typeof algo.extra
                );
            }
            const interrupt = algo.extra as boolean;
            select("#interruptCheckBox").attr("checked", interrupt);
        }
        if (algo.name === "rr") {
            if (!requireNumber(algo.extra)) {
                malformedSave(
                    "processor.algorithm.extra",
                    algo.name,
                    "number",
                    typeof algo.extra
                );
            }
            const q = algo.extra as number;
            select("#quantum").attr("value", q);
        }
    }
}

function restoreMemory(memory?: MemoryFields) {
    if (memory) {
        const algo = memory.algorithm;
        toggleMemoryExtra(algo.name);
        select("#memoryAlgorithm")
            .selectAll<HTMLOptionElement, {}>("option")
            .attr("selected", function(this: HTMLOptionElement) {
                return this.value === algo.name ? "selected" : null;
            });

        if (algo.name === "Buddy System") {
            if (typeof algo.extra === "undefined") {
                malformedSave(
                    "memory.algorithm.extra",
                    algo.name,
                    "BuddySystemExtra",
                    "undefined"
                );
            }
            const extra = algo.extra as BuddySystemExtra;
            select("#buddyOverstep").attr("checked", extra.canOverstep);
            select("#buddyMinSize").attr("value", extra.minSize);
        }
    }
}

function restoreDisk(disk?: DiskFields) {
    if (disk) {
        const algo = disk.algorithm;
        toggleDiskExtra(algo.name);
        select("#diskAllocAlgorithm")
            .selectAll<HTMLOptionElement, {}>("option")
            .attr("selected", function(this: HTMLOptionElement) {
                return this.value === algo.name ? "selected" : null;
            });
    }
}

function restoreLocalStorage(localStorage?: SerializedKeyValues) {
    if (localStorage) {
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                setItem(key, JSON.parse(localStorage[key]));
            }
        }
    }
}

function restoreSwapping(swapping?: SwappingFields) {
    if (swapping) {
        const algo = swapping.algorithm;
        toggleSwappingExtra(algo.name);
        select("#swappingStrategy")
            .selectAll<HTMLOptionElement, {}>("option")
            .attr("selected", function(this: HTMLOptionElement) {
                return this.value === algo.name ? "selected" : null;
            });
    }
}
