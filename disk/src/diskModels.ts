/*
 * Created by Clemens Gläser on 25.01.18
 */
import {set} from "d3-collection";
import {
    DiskScheduleAlgorithm,
    DiskSpaceAllocationAlgorithm
} from "./diskAlgorithms";
import {Process} from "./processor";

interface PieData {
    owner: string;
    size: number;
    index?: number;
}

class Disk {
    private _blocks: DiskBlock[];

    constructor(
        public readonly name: string,
        public readonly spaceAllocationAlgorithm:
            | DiskSpaceAllocationAlgorithm
            | null
            | undefined,
        public readonly diskScheduleAlgorithm:
            | DiskScheduleAlgorithm
            | null
            | undefined,
        public readonly size: number,
        public readonly sizePerBlock: number = 4 /* KB*/
    ) {
        this._blocks = [];
    }

    public initDisk() {
        this._blocks = [];
        for (let i = 0; i < this.size / this.sizePerBlock; i++) {
            this._blocks.push(new DiskBlock(null, -1, i));
        }
    }

    public isValidDisk(): boolean {
        return this._blocks.length === this.size / this.sizePerBlock;
    }

    public requestPart(process: Process, part: number): boolean {
        if (this.diskScheduleAlgorithm == null) {
            return false;
        }
        return this.diskScheduleAlgorithm.addRequest(
            new DiskBlock(process, part)
        );
    }

    public removeRequest(process: Process, part: number): void {
        if (this.diskScheduleAlgorithm != null) {
            this.diskScheduleAlgorithm.removeRequestFromProcess(
                new DiskBlock(process, part)
            );
        }
    }

    public allocateSpace(
        process: Process,
        type: BlockState.DISK | BlockState.SWAP = BlockState.DISK
    ): boolean {
        if (this.spaceAllocationAlgorithm == null) {
            return false;
        }

        return this.spaceAllocationAlgorithm.addProcess(this, process, type);
    }

    public removeFromDisk(
        process: Process,
        type: BlockState.DISK | BlockState.SWAP = BlockState.DISK
    ): void {
        if (this.diskScheduleAlgorithm != null) {
            this.diskScheduleAlgorithm.removeAllRequestsFromProcess(process);
        }

        if (this.spaceAllocationAlgorithm != null) {
            this.spaceAllocationAlgorithm.removeProcess(this, process, type);
        }
    }

    public hasProcess(
        process: Process,
        type: BlockState.DISK | BlockState.SWAP
    ): boolean {
        return (
            this.blocks
                .filter((v) => v.owner === process)
                .filter((v) => v.state === type).length > 0
        );
    }

    public hasSpaceForProcess(
        process: Process,
        type: BlockState.DISK | BlockState.SWAP = BlockState.DISK
    ): boolean {
        if (!this.spaceAllocationAlgorithm) {
            return false;
        }
        return this.spaceAllocationAlgorithm.hasSpaceForProcess(
            this,
            process,
            type
        );
    }

    /**
     * Returns the amount of free slots available
     * @returns {number}
     */
    public getFreeSpace(): number {
        return this.blocks.filter((value) => value.owner == null).length;
    }

    public toPieDataOld(): PieData[] {
        const ownerOrEmpty = (p: MaybeProcess) => (p ? p.getName() : "");
        const pieData: PieData[] = [];
        this.blocks.forEach((value: DiskBlock) => {
            const owner = ownerOrEmpty(value.owner);
            const ownerIndex = pieData.map((d) => d.owner).lastIndexOf(owner);
            if (ownerIndex !== pieData.length - 1 || pieData.length === 0) {
                // previous element has a different owner -> new segment
                pieData.push({owner, size: 1});
            } else {
                // previous element has the same owner
                pieData[ownerIndex].size++;
            }
        });
        return pieData;
    }

    public toPieData(): PieData[] {
        const ownerOrEmpty = (p: MaybeProcess) => (p ? p.getName() : "");
        const pieData: PieData[] = [];
        const ownerNameSet = set();
        this.blocks
            .map((v) => v.owner)
            .forEach((v) => ownerNameSet.add(ownerOrEmpty(v)));
        this.blocks.forEach((value: DiskBlock) => {
            const ownerName = ownerOrEmpty(value.owner);
            if (ownerNameSet.has(ownerName)) {
                ownerNameSet.remove(ownerName);
                pieData.push({owner: ownerName, size: 1});
            } else {
                pieData
                    .filter((v) => v.owner === ownerName)
                    .forEach((v) => v.size++);
            }
        });
        return pieData;
    }

    // Getter & Setter
    get blocks(): ReadonlyArray<DiskBlock> {
        return this._blocks;
    }
}

type MaybeProcess = Process | null;

class DiskBlock {
    constructor(
        public owner: MaybeProcess,
        public part: number = -1,
        public readonly index: number = -1,
        public state: BlockState = BlockState.EMPTY
    ) {}

    public clear() {
        this.owner = null;
        this.part = -1;
        this.state = BlockState.EMPTY;
    }

    public update(block: DiskBlock) {
        if (block !== undefined) {
            this.owner = block.owner;
            this.part = block.part;
            this.state = block.state;
        }
    }

    // Custom Getter

    get id(): string {
        return `disk-block-${this.index}`;
    }
}

enum BlockState {
    EMPTY,
    DISK,
    SWAP
}

export {Disk, DiskBlock, PieData, BlockState};
