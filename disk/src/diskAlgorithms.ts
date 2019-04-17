/**
 * Created by Clemens Gläser on 25.01.17
 */
import {BlockState, Disk, DiskBlock} from "./diskModels";
import {Process} from "./processor";

interface INamed {
    getName(): string;
}

type DISK_OR_SWAP = BlockState.DISK | BlockState.SWAP;

abstract class DiskSpaceAllocationAlgorithm implements INamed {
    public static getNewDiskBlocks(
        disk: Disk,
        process: Process,
        newState: BlockState
    ): DiskBlock[] {
        const diskUsage =
            newState === BlockState.SWAP
                ? process.getMemoryUsage()
                : process.diskUsage;
        const amountParts = Math.ceil(diskUsage / disk.sizePerBlock);
        const newDiskBlocks: DiskBlock[] = [];
        for (let i = 0; i < amountParts; i++) {
            newDiskBlocks.push(new DiskBlock(process, i, -1, newState));
        }
        return newDiskBlocks;
    }

    public abstract addProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): boolean;

    public abstract removeProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): void;

    public abstract getName(): string;

    public abstract hasSpaceForProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): boolean;
}

class DiskSpaceFirstFit extends DiskSpaceAllocationAlgorithm {
    private static findFirstFreeSlot(disk: Disk): number {
        const el = disk.blocks.filter((b) => b.owner == null).shift();
        return el ? el.index : -1;
    }

    public addProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): boolean {
        const newDiskBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
            disk,
            process,
            type
        );
        const freeSlots = disk.getFreeSpace();
        const alreadyAdded = disk.hasProcess(process, type);
        if (alreadyAdded) {
            return false;
        }
        if (freeSlots < newDiskBlocks.length) {
            // process does not fit on disk
            return false;
        }

        let element: DiskBlock | undefined = newDiskBlocks.shift();
        let addedAtLeastOnce = false;
        while (element !== undefined) {
            const index = DiskSpaceFirstFit.findFirstFreeSlot(disk);
            const block = disk.blocks[index];
            block.update(element);
            addedAtLeastOnce = true;
            element = newDiskBlocks.shift();
        }

        return addedAtLeastOnce;
    }

    public removeProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): void {
        disk.blocks.forEach((value) => {
            if (value.owner === process && value.state === type) {
                value.clear();
            }
        });
    }

    public getName(): string {
        return "disk-space-first-fit";
    }

    public hasSpaceForProcess(
        disk: Disk,
        process: Process,
        type: BlockState.DISK | BlockState.SWAP
    ): boolean {
        const newBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
            disk,
            process,
            type
        );
        const freeSlots = disk.getFreeSpace();
        return newBlocks.length <= freeSlots;
    }
}

class DiskSpaceFirstCompleteFit extends DiskSpaceAllocationAlgorithm {
    public addProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): boolean {
        const newDiskBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
            disk,
            process,
            type
        );
        const freeSlots = disk.getFreeSpace();
        const alreadyAdded = disk.hasProcess(process, type);
        if (alreadyAdded) {
            return false;
        }

        if (freeSlots < newDiskBlocks.length) {
            // process does not fit on the disk
            return false;
        }

        const validLocations = this.getValidLocations(
            disk,
            newDiskBlocks.length
        );
        if (validLocations.length <= 0) {
            // no continuous position found
            return false;
        }

        const index = validLocations.shift()!;
        for (let i = 0; i < newDiskBlocks.length; i++) {
            disk.blocks[i + index].update(newDiskBlocks[i]);
        }
        return true;
    }

    public removeProcess(
        disk: Disk,
        process: Process,
        type: DISK_OR_SWAP
    ): void {
        disk.blocks.forEach((value) => {
            if (value.owner === process && value.state === type) {
                value.clear();
            }
        });
    }

    public getName(): string {
        return "disk-space-first-complete-fit";
    }

    public hasSpaceForProcess(
        disk: Disk,
        process: Process,
        type: BlockState.DISK | BlockState.SWAP
    ): boolean {
        const newBlocks = DiskSpaceAllocationAlgorithm.getNewDiskBlocks(
            disk,
            process,
            type
        );
        const freeSlots = disk.getFreeSpace();
        return (
            newBlocks.length <= freeSlots &&
            this.getValidLocations(disk, newBlocks.length).length > 0
        );
    }

    private getValidLocations(disk: Disk, consecutiveBlocks: number): number[] {
        const result: number[] = [];

        disk.blocks.forEach((v, i, array) => {
            if (v.owner == null) {
                const valid = array
                    .slice(i, i + consecutiveBlocks)
                    .every((b) => b.owner == null);

                if (valid) {
                    result.push(i);
                }
            }
        });

        return result;
    }
}

// See http://www.cs.iit.edu/~cs561/cs450/disksched/disksched.html for disk scheduling algorithms
// TODO: Look into merging DiskSpaceAllocationAlgorithm and DiskScheduleAlgorithm
abstract class DiskScheduleAlgorithm implements INamed {
    private _queue: DiskBlock[];
    constructor(queue: DiskBlock[]) {
        this._queue = queue;
    }

    public abstract addRequest(request: DiskBlock): boolean;
    public abstract removeRequestFromProcess(request: DiskBlock): void;
    public abstract getName(): string;

    public removeAllRequestsFromProcess(process: Process) {
        this.queue = this.queue.filter((value) => value.owner !== process);
    }

    get queue(): DiskBlock[] {
        return this._queue;
    }

    set queue(value: DiskBlock[]) {
        this._queue = value;
    }
}
export {
    DiskSpaceAllocationAlgorithm,
    DiskSpaceFirstFit,
    DiskSpaceFirstCompleteFit,
    DiskScheduleAlgorithm
};
