import {MemoryAlgorithm} from "./memoryAlgorithms";
import {Process} from "./processor";

/**
 * Created by Johannes Ohlemacher on 28.11.17.
 */
class Memory {
    private memoryList: MemoryBlock[];
    private memoryAlgorithm?: MemoryAlgorithm;
    private size: number;

    constructor(
        memoryList: MemoryBlock[],
        memoryAlgorithm?: MemoryAlgorithm,
        size: number = 1000
    ) {
        this.memoryList = memoryList;
        this.memoryAlgorithm = memoryAlgorithm;
        this.size = size;
    }

    public getMemoryList() {
        return this.memoryList;
    }

    public getSize() {
        return this.size;
    }

    public setSize(size: number) {
        this.size = size;
    }

    public initMemory() {
        this.memoryList = [];
        if (this.memoryAlgorithm) {
            this.memoryList = this.memoryAlgorithm.initMemory(this.size);
        }
    }
    public addProcess(process: Process): boolean {
        if (!this.memoryAlgorithm) {
            return false;
        }
        return this.memoryAlgorithm.addProcess(this.memoryList, process);
    }

    public removeProcess(process: Process) {
        if (this.memoryAlgorithm) {
            this.memoryAlgorithm.removeProcess(this.memoryList, process);
        }
    }

    public hasProcess(process: Process): boolean {
        return (
            this.memoryList.filter((v) => v.getProcess() === process).length > 0
        );
    }

    public hasSpaceForProcess(process: Process): boolean {
        if (!this.memoryAlgorithm) {
            return false;
        }
        return this.memoryAlgorithm.hasSpaceForProcess(
            this.memoryList,
            process
        );
    }
}

class MemoryBlock {
    private process: Process | null;
    private id: number;

    constructor(
        process: Process | null,
        id: number,
        public readonly size: number = 1
    ) {
        this.process = process;
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public getProcess() {
        return this.process;
    }
}

export {MemoryBlock};
export {Memory};
