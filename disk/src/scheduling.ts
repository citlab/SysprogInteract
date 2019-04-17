/**
 * Created by Vincent Hennig on 30.05.17.
 */
import {easeLinear} from "d3-ease";
import {ScaleOrdinal, scaleOrdinal, schemeCategory20} from "d3-scale";
import {event, select} from "d3-selection";
import "d3-transition";
import {SchedulingAlgorithm} from "./algorithms";
import {DiskSpaceAllocationAlgorithm} from "./diskAlgorithms";
import {Disk} from "./diskModels";
import * as pieChart from "./diskSpaceAnimations";
import {
    createAndAddProcess,
    createDiskSpaceAllocationAlgorithm,
    createMemoryAlgorithm,
    createSchedulingAlgorithm
} from "./factoryMethods";
import {get} from "./localStorage/helpers";
import {LocalStorageKeys} from "./localStorage/keys";
import "./localStorage/setupDefaults";
import {MemoryAlgorithm} from "./memoryAlgorithms";
import {updateMemoryAnimator} from "./memoryAnimations";
import {Memory} from "./memoryController";
import {names} from "./names";
import {Process, Processor} from "./processor";
import {loadConfig, saveConfig} from "./saveLoad";
import {
    clearDiskStats,
    drawDiskStats,
    updateDiskStats
} from "./statistics/diskStatistics";
import {
    clearMemStats,
    drawMemStats,
    updateMemStats
} from "./statistics/memoryStatistics";
import {
    clearStats,
    drawStats,
    updateStats
} from "./statistics/processorStatistics";
import * as memoryManager from "./swapping";
import {Success} from "./swapping";
import {randomInt} from "./util/mathHelper";
import {restoringProcess, swappingProcess} from "./util/processHelpers";

let n: number = 0;
const color: ScaleOrdinal<string, string> = scaleOrdinal(schemeCategory20);
const processList: Process[] = [];
let algorithm: SchedulingAlgorithm | undefined;
let processor: Processor;
let timePassed = 0;
let index = 0;
let simulationSpeed: number;
let simulationTimeout: number;
let transitionDuration: number;
let simulationPaused: boolean = false;
let simulationStopped: boolean = true;
let simulationStepRunning: boolean = false;
let nextSimulationFunction: () => void;

let memory: Memory;
let memoryAlgorithm: MemoryAlgorithm | undefined;

let disk: Disk;
let diskSpaceAllocationAlgorithm: DiskSpaceAllocationAlgorithm | undefined;

// adding listeners to html
select("#processForm").on("submit", function() {
    event.preventDefault();
    addProcess();
    return false;
});

select("#openProcessFormBtn").on("click", function() {
    toggleProcessForm();
});

select("#startSimulation").on("click", function() {
    if (simulationStopped) {
        startSimulation();
    } else if (simulationPaused) {
        resumeSimulation();
        console.log("resuming simulation");
    }
});

select("#pauseSimulation").on("click", function() {
    if (!simulationStopped && !simulationPaused) {
        pauseSimulation();
        console.log("pausing simulation");
    }
});

select("#stopSimulation").on("click", function() {
    if (!simulationStopped) {
        stopSimulation();
        console.log("stopping simulation");
    }
});

select("#animationSpeed").on("change", function() {
    const value = parseInt((this as HTMLInputElement).value, 10);
    setSimulationSpeed(value);
});

select("#schedulingAlgorithm").on("change", function() {
    const value = (this as HTMLSelectElement).value;
    if (value === "rr") {
        select("#rrQuantumContainer")
            .style("opacity", 0)
            .style("display", "flex")
            .transition()
            .style("opacity", 1);
    } else {
        select("#rrQuantumContainer").style("display", "none");
    }
    if (value === "priority" || value === "sjn") {
        select("#interruptCheckBoxContainer")
            .style("opacity", 0)
            .style("display", "flex")
            .transition()
            .style("opacity", 1);
    } else {
        select("#interruptCheckBoxContainer").style("display", "none");
    }
});

/*
 Use if mem-algorithms need additional choices
 */
select("#memoryAlgorithm").on("change", function() {
    const value = (this as HTMLSelectElement).value;
    if (value === "Buddy System") {
        select("#buddyContainer")
            .style("opacity", 0)
            .style("display", "flex")
            .transition()
            .style("opacity", 1);
    } else {
        select("#buddyContainer").style("display", "none");
    }
    updateMemoryAnimator();
});

select("#addRandomProcesses").on("click", addRandomProcesses);

select("#saveButton").on("click", saveConfig);

select("#loadButton").on("click", function() {
    console.log("#loadButton clicked");
    document.getElementById("inputID")!.click();
});

select("#inputID").on("change", function() {
    loadConfig();
    console.log("loadconfig");
});
/*
select("#plottedStat").selectAll("option").data(statNames).enter().append("option").text(function(d) {
    return d;
});*/

select("#settingsButton").on("click", () => {
    window.location.href = "/settings.html";
});

// showing and hiding elements
if (
    (document.getElementById("schedulingAlgorithm") as HTMLSelectElement)
        .value === "rr"
) {
    document.getElementById("rrQuantumContainer")!.style.display = "flex";
}

if (
    (document.getElementById("schedulingAlgorithm") as HTMLSelectElement)
        .value === "priority"
) {
    document.getElementById("interruptCheckBoxContainer")!.style.display =
        "flex";
}

if (
    (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value ===
    "Buddy System"
) {
    document.getElementById("buddyContainer")!.style.display = "flex";
}
// hide swapping strategy selection if disabled
const swappingEnabled = get(LocalStorageKeys.SWAPPING_ENABLED);
if (!swappingEnabled) {
    select("#swappingStrategyContainer").style("display", "none");
}

function addProcess() {
    if (!simulationStopped) {
        return;
    }
    n++;
    const duration: number = parseInt(
        (document.getElementById("duration") as HTMLInputElement).value,
        10
    );
    const arrival: number = parseInt(
        (document.getElementById("arrival") as HTMLInputElement).value,
        10
    );
    const priority: number = parseInt(
        (document.getElementById("priority") as HTMLInputElement).value,
        10
    );
    const name = generateRandomName();
    const memoryUsage: number = parseInt(
        (document.getElementById("memoryUsage") as HTMLInputElement).value,
        10
    );

    const diskUsage = (document.getElementById("diskUsage") as HTMLInputElement)
        .valueAsNumber;
    createAndAddProcess(
        duration,
        arrival,
        priority,
        name,
        memoryUsage,
        diskUsage
    );
}

function addRandomProcesses() {
    if (!simulationStopped) {
        return;
    }

    for (let i = 0; i < 10; i++) {
        const duration = randomInt(1, 11);
        const arrival = randomInt(0, 11);
        const priority = randomInt(1, 11);
        const name = generateRandomName();
        const memoryUsage = generateRandomMemory();
        const diskUsage = randomInt(1, 51);
        createAndAddProcess(
            duration,
            arrival,
            priority,
            name,
            memoryUsage,
            diskUsage
        );
    }
}

function addProcessVisually(p: Process) {
    select(".list-group")
        .append("a")
        .attr("id", p.getName())
        .attr("href", "#")
        .on("click", removeProcess)
        .classed("list-group-item process-list-item", true)
        .html(getListItemHTML(p))
        .style("opacity", 0)
        .transition()
        .duration(400)
        .style("opacity", 1);
    select(".list-group").transition();
}

function generateRandomName(): string {
    let name = names[Math.floor(Math.random() * names.length)];
    while (processList.filter((p) => p.getName() === name).length !== 0) {
        name += Math.floor(Math.random() * 10);
    }
    return name;
}

/*
    Generates random memoryneeds for random generated processes.
 */
function generateRandomMemory(): number {
    const min: number = 1;
    const max: number = 51; // 201
    // var rand = Math.random() * ((min - max)+1) + min; //wert aus [min, max[
    return randomInt(min, max); // wert aus [min, max[
}

function removeProcess(this: any) {
    if (!simulationStopped) {
        return;
    }
    const elem = select(this);
    const name = elem.attr("id");
    for (let i = 0; i < processList.length; i++) {
        if (processList[i].getName() === name) {
            processList.splice(i, 1);
            break;
        }
    }
    elem.transition()
        .style("opacity", 0)
        .duration(100)
        .remove();
}

function toggleProcessForm() {
    select("#processForm").classed("hidden", function() {
        return !select(this).classed("hidden");
    });
    select("#processList").classed("shortened", function() {
        return !select(this).classed("shortened");
    });
    select("#openProcessFormBtn")
        .selectAll("span")
        .classed("hidden", function() {
            return !select(this).classed("hidden");
        });
}

function startSimulation() {
    simulationStopped = false;
    algorithm = createSchedulingAlgorithm();
    memoryAlgorithm = createMemoryAlgorithm();
    diskSpaceAllocationAlgorithm = createDiskSpaceAllocationAlgorithm();
    processor = new Processor(algorithm);
    memory = new Memory(
        [],
        memoryAlgorithm,
        get<number>(LocalStorageKeys.MEMORY_SIZE)
    );
    memory.initMemory();
    disk = new Disk(
        "demo",
        diskSpaceAllocationAlgorithm,
        null,
        get<number>(LocalStorageKeys.DISK_SIZE),
        get<number>(LocalStorageKeys.DISK_SIZE_PER_BLOCK)
    );
    disk.initDisk();
    memoryManager.init(memory, disk);
    processList.sort(function(a, b) {
        return a.getArrival() - b.getArrival();
    });
    clearListItems();
    clearStats();
    clearMemStats();
    clearDiskStats();
    startSimulationStep();
}

function resumeSimulation() {
    simulationPaused = false;
    nextSimulationFunction();
}

function pauseSimulation() {
    simulationPaused = true;
}

function stopSimulation() {
    simulationStopped = true;
    if (!simulationStepRunning) {
        window.clearTimeout(simulationTimeout);
        resetVisualization();
    }
}

function resetVisualization() {
    simulationStepRunning = false;
    simulationPaused = false;
    clearListItems();
    processList.forEach(function(p: Process, i) {
        p.resetRemainingLength();
        p.listIndex = i;
        p.resetInterruptCount();
        p.hasMemory = false;
    });
    processList.forEach(addProcessVisually);
    timePassed = 0;
    index = 0;

    memoryManager.reset();
}

function setSimulationSpeed(value: number) {
    simulationSpeed = 2000 - (value * 1980) / 100;
    transitionDuration = simulationSpeed / 4;
    pieChart.setTransitionDuration(transitionDuration);
}

function startSimulationStep() {
    if (simulationStepRunning) {
        console.log("step skipped");
        return;
    }
    simulationStepRunning = true;
    // console.log("updatingStats " + timePassed);
    updateStats(timePassed, processList);
    drawStats();

    updateMemStats(timePassed, processList);
    drawMemStats();

    updateDiskStats(timePassed, processList, disk);
    drawDiskStats();

    if (
        simulationStopped ||
        (index === processList.length &&
            processor.getProcessList().length === 0)
    ) {
        // simulation is done or stopped by user
        simulationStepRunning = false;
        stopSimulation();
    } else {
        // update the order of active processes
        simulateListReorder();
    }
}

function simulateListReorder() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    processor.updateProcessList(timePassed);
    animateListReorder();
}

function animateListReorder() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const currentProcesses = processor.getProcessList();
    const listItems = select("#simulatedProcesses")
        .selectAll("a")
        .data(currentProcesses, function(p: any) {
            return p.getName();
        });
    let reorder = false;
    let nextFunctionCalled = false;
    if (algorithm!.getName() === "rr") {
        // reorder list items on screen based on their position in the list
        listItems.each(function(this: any, d: Process, i: number) {
            if (d.listIndex !== undefined && d.listIndex < i) {
                reorder = true;
                select(this)
                    .transition()
                    .style("left", "-100px")
                    .style("opacity", 0)
                    .duration(transitionDuration)
                    .remove()
                    .on("end", function() {
                        if (!nextFunctionCalled) {
                            nextFunctionCalled = true;
                            if (simulationPaused) {
                                nextSimulationFunction = simulateNewProcesses;
                                console.log("paused at simulateNewProcesses");
                            } else {
                                simulateNewProcesses();
                            }
                        }
                    });
            }
            d.listIndex = i;
        });
    }
    if (!reorder) {
        simulateNewProcesses();
    }
}

function simulateNewProcesses() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    // add all processes that are arriving now
    const additions = [];
    while (
        processList[index] &&
        processList[index].getArrival() === timePassed
    ) {
        additions.push(processList[index]);
        index++;
    }
    processor.addProcesses(additions);
    animateNewProcesses();
}

function animateNewProcesses() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    let nextFunctionCalled = false;
    _animateNewProcesses(
        () => {
            if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if (simulationPaused) {
                    nextSimulationFunction = simulateProgress;
                    console.log("paused at simulateProgress");
                } else {
                    simulateProgress();
                }
            }
        },
        () => simulateProgress()
    );
}

function _animateNewProcesses(
    onEnterEnd: () => void = () => {},
    onEnterEmpty: () => void = () => {}
) {
    const currentProcesses = processor.getProcessList();
    const listItems = select(".list-group")
        .selectAll("a")
        .data(currentProcesses, function(p: any) {
            return p.getName();
        });
    listItems
        .enter()
        .append("a")
        .attr("href", "#")
        .attr("id", (p) => p.getName())
        .on("click", removeProcess)
        .classed("list-group-item process-list-item", true)
        .html(getListItemHTML)
        .style("opacity", 0)
        .style("left", "-100px")
        .transition()
        .duration(transitionDuration)
        .style("opacity", 1)
        .style("left", "0px")
        .on("end", function() {
            onEnterEnd();
        });
    if (listItems.enter().empty()) {
        onEnterEmpty();
    }
}

function simulateProgress() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const process = processor.getProcessList()[0];
    /*
        if (process != null && !process.hasMemory) {
            animateMemoryAllocation(process, memory, color, "pre");
            const x = memory.addProcess(process);
            if (x) {
                process.setHasMemory(true);
                animateMemoryAllocation(process, memory, color, "post");

                processor.calculationStep();
                timePassed++;
                animateProgress();
            } else {
                simulateRamShortage();
            }
        } else {
            processor.calculationStep();
            timePassed++;
            animateProgress();
        }

        // todo add condition for hasDiskSpace when added
        if (process != null) {
            pieChart.animateDiskSpaceAllocation(process, disk, color, "pre");
            const added = disk.allocateSpace(process);
            if (added) {
                pieChart.animateDiskSpaceAllocation(process, disk, color, "post");
            }
        }
    */
    if (process) {
        const {status, swapTargets} = memoryManager.addProcess(process, color);
        if (memoryManager.isFailure(status)) {
            simulateRamShortage(); // todo: no calculationStep intentional in case of ram shortage?
            return;
        }

        if (swapTargets.length > 0) {
            let added = false;
            if (status === Success.NEED_SWAP_OTHERS) {
                const toSwappingProcess = swappingProcess(timePassed);
                processor.addProcesses(swapTargets.map(toSwappingProcess));
                added = true;
            }
            if (status === Success.RETRIEVE_FROM_SWAP) {
                const toRestoreProcess = restoringProcess(timePassed);
                processor.addProcesses(swapTargets.map(toRestoreProcess));
                added = true;
            }
            if (added) {
                _animateNewProcesses();
            }
        }
    }
    // TODO: Test new swapping system

    processor.calculationStep();
    timePassed++;
    animateProgress();
}

// reordes processor -> processlist
function simulateRamShortage() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }

    processor.handleRamShortage();
    animateRamShortage();
}

// reorders rejected prozess and resumes with simulation
function animateRamShortage() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }

    const rejectedProcess = processor.getProcessList()[
        processor.getProcessList().length - 1
    ];
    let nextfunctioncalled = false;

    select("#simulatedProcesses")
        .select("a")
        .transition()
        .duration(transitionDuration)
        .style("border-color", "red")
        .transition()
        .duration(transitionDuration)
        .style("border-color", "#7aff63")
        .transition()
        .style("left", "-100px")
        .style("opacity", 0)
        .duration(transitionDuration)
        .remove()
        .on("end", function() {
            if (!nextfunctioncalled) {
                nextfunctioncalled = true;
                if (simulationPaused) {
                    simulationStepRunning = false;
                    nextSimulationFunction = startSimulationStep;
                    console.log("simulateProgress");
                } else {
                    simulationStepRunning = false;
                    startSimulationStep();
                }
            }
        });
}

function animateProgress() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const currentProcesses = processor.getProcessList();
    const listItems = select(".list-group")
        .selectAll("a")
        .data(currentProcesses, function(p: any) {
            return p.getName();
        });
    let nextFunctionCalled = false;
    listItems
        .select(".progress-bar")
        .transition()
        .duration(transitionDuration)
        .style("width", function(p: Process) {
            return 100 * (1 - p.getRemainingLength() / p.getLength()) + "%";
        })
        .ease(easeLinear)
        .on("end", function() {
            if (!nextFunctionCalled) {
                nextFunctionCalled = true;
                if (simulationPaused) {
                    nextSimulationFunction = simulateFinishedProcess;
                    console.log("pausing at simulateFinishedProcess");
                } else {
                    simulateFinishedProcess();
                }
            }
        });
    listItems.select("#remainingLength").text(function(p: Process) {
        return "Remaining Length: " + p.getRemainingLength() + "ms";
    });
    if (listItems.empty()) {
        simulateFinishedProcess();
    }
}

let count = 0;

function simulateFinishedProcess() {
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const currentProcess = processor.getProcessList()[0];
    if (currentProcess != null && currentProcess.getRemainingLength() <= 0) {
        count++;

        memoryManager.removeProcess(currentProcess);
    }
    processor.removeFinishedProcesses(timePassed);
    animateFinishedProcess();
}

function animateFinishedProcess() {
    // --------------------------------
    // last function of simulation step
    // --------------------------------
    if (simulationStopped) {
        simulationStepRunning = false;
        stopSimulation();
        return;
    }
    const currentProcesses = processor.getProcessList();
    const listItems = select(".list-group")
        .selectAll("a")
        .data(currentProcesses, function(p: any) {
            return p.getName();
        });
    if (listItems.exit().empty()) {
        simulationStepRunning = false;
        simulationTimeout = window.setTimeout(startSimulationStep, 100);
    } else {
        listItems
            .exit()
            .transition()
            .style("left", "-100px")
            .style("opacity", 0)
            .duration(transitionDuration)
            .remove()
            .on("end", function() {
                simulationStepRunning = false;
                simulationTimeout = window.setTimeout(startSimulationStep, 100);
            });
    }
}

function clearListItems() {
    select(".list-group")
        .selectAll("a")
        .remove();
}

function getListItemHTML(p: Process) {
    const percentageDone = 100 * (1 - p.getRemainingLength() / p.getLength());
    return `
<div class="progress progress-custom">
    <div class="process-list-item-content">
        <div class="row">
            <div class="col-md-6">
                <h5 class="list-group-item-heading">Process: ${p.getName()}</h5>
                <p class="list-group-item-text">Priority: ${p.getPriority()}</p>
            </div>
            <div class="col-md-6">
                <p class="list-group-item-text">Arrival: ${p.getArrival()}ms</p>
                <p class="list-group-item-text" id="remainingLength">Remaining Length: ${p.getRemainingLength()}ms</p>
                <p class="list-group-item-text" id="memoryUSage">Memory Usage: ${p.getMemoryUsage()}MB</p>
                <p class="list-group-item-text">Disk Usage: ${p.diskUsage}MB</p>
            </div>
        </div>
    </div>
    <div class="progress-bar progress-bar-striped process-list-progress-bar" role="progressbar" style="width:${percentageDone}%; background-color:${color(
        p.getName()
    )}">
    </div>
</div>`;
}

function getProcessList(): Process[] {
    return processList;
}

// required in factoryMethods.ts and saveLoad.ts
export {addProcessVisually, getProcessList, clearListItems};

/*
todolist

TODO ram gitter anzeigen bevor simulation gestartet wird. -> nicht so einfach wegen Buddy System
TODO ramblockgröße variable? -> Schon variable für Buddy System
TODO -> einheiten abschaffen weil sie eh sinnlos sind? (mb usw)

 */
