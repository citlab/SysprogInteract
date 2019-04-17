import {map, Map} from "d3-collection";
import {Fifo, Lifo, Priority, RR, SchedulingAlgorithm, SJN} from "./algorithms";
import {
    DiskSpaceAllocationAlgorithm,
    DiskSpaceFirstCompleteFit,
    DiskSpaceFirstFit
} from "./diskAlgorithms";
import {
    DiskSpaceAnimator,
    DiskUsagePieChart,
    FixedSegmentDonutChart,
    OldPieChart
} from "./DiskSpaceAnimator";
import {DiskSpaceAnimatorKeys, LocalStorageKeys} from "./localStorage/keys";
import {getOrElse} from "./localStorage/TypedLocalStorage";
import {
    BestFit,
    BuddySystem,
    FirstFit,
    MemoryAlgorithm,
    RotatingFirstFit,
    WorstFit
} from "./memoryAlgorithms";
import {
    BuddySystemAnimator,
    DefaultMemoryAnimator,
    MemoryAnimator
} from "./MemoryAnimator";
import {Process} from "./processor";
import {addProcessVisually, getProcessList} from "./scheduling";
import {getOrDefault} from "./util/collectionHelpers";

export function createSchedulingAlgorithm(): SchedulingAlgorithm | undefined {
    switch (
        (document.getElementById("schedulingAlgorithm") as HTMLSelectElement)
            .value
    ) {
        case "fifo":
            return new Fifo();
        case "lifo":
            return new Lifo();
        case "rr":
            return new RR(
                parseInt(
                    (document.getElementById("quantum") as HTMLInputElement)
                        .value,
                    10
                )
            );
        case "priority":
            return new Priority(
                (document.getElementById(
                    "interruptCheckBox"
                ) as HTMLInputElement).checked
            );
        case "sjn":
            return new SJN(
                (document.getElementById(
                    "interruptCheckBox"
                ) as HTMLInputElement).checked
            );
    }
    return undefined;
}

export function createMemoryAlgorithm(): MemoryAlgorithm | undefined {
    switch (
        (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value
    ) {
        case "FirstFit":
            return new FirstFit();
        case "BestFit":
            return new BestFit();
        case "Worst Fit":
            return new WorstFit();
        case "Rotating First Fit":
            return new RotatingFirstFit();
        case "Buddy System":
            const canOverstep = (document.getElementById(
                "buddyOverstep"
            ) as HTMLInputElement).checked;
            const minSize = (document.getElementById(
                "buddyMinSize"
            ) as HTMLInputElement).valueAsNumber;
            return new BuddySystem(canOverstep, minSize);
    }
    return undefined;
}

export function createDiskSpaceAllocationAlgorithm():
    | DiskSpaceAllocationAlgorithm
    | undefined {
    switch (
        (document.getElementById("diskAllocAlgorithm") as HTMLSelectElement)
            .value
    ) {
        case "disk-space-first-fit":
            return new DiskSpaceFirstFit();
        case "disk-space-first-complete-fit":
            return new DiskSpaceFirstCompleteFit();
    }
    return undefined;
}

export function createAndAddProcess(
    duration: number,
    arrival: number,
    priority: number,
    name: string,
    memoryUsage: number,
    diskUsage: number = 0
) {
    const newProcess = new Process(
        arrival,
        duration,
        priority,
        name,
        memoryUsage,
        diskUsage
    );
    getProcessList().push(newProcess);
    addProcessVisually(newProcess);
}

const defaultMemoryAnimator = new DefaultMemoryAnimator();
const memoryAnimators: Map<MemoryAnimator> = map().set(
    "Buddy System",
    new BuddySystemAnimator()
);

export function createMemoryAnimator(): MemoryAnimator {
    const selected = (document.getElementById(
        "memoryAlgorithm"
    ) as HTMLSelectElement).value;
    return getOrDefault(memoryAnimators, selected, defaultMemoryAnimator);
}

const diskSpaceAnimators: Map<DiskSpaceAnimator> = map()
    .set(DiskSpaceAnimatorKeys.DISK_USAGE, new DiskUsagePieChart())
    .set(DiskSpaceAnimatorKeys.FIXED_SEGMENTS, new FixedSegmentDonutChart())
    .set(DiskSpaceAnimatorKeys.OLD_PIE, new OldPieChart());

export function createDiskSpaceAnimator(): DiskSpaceAnimator {
    const key: string = getOrElse<string>(
        LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR,
        DiskSpaceAnimatorKeys.FIXED_SEGMENTS
    );
    return diskSpaceAnimators.get(key)!;
}
