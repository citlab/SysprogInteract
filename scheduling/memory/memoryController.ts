import {MemoryAlgorithm} from "./memoryAlgorithms";
import {Process} from "../processor";

class Memory {
    private memoryList: MemoryBlock[];
    private memoryAlgorithm: MemoryAlgorithm;
    private size: number;

    constructor(memoryList: MemoryBlock[], memoryAlgorithm: MemoryAlgorithm, size: number) {
        this.memoryList = memoryList;
        this.memoryAlgorithm = memoryAlgorithm;
        this.size = size;
    }

    public getMemoryList() : MemoryBlock[]{
       return this.memoryList;
    }

    public getSize() : number{
        return this.size;
    }

    public setSize(size: number) {
        this.size = size;
    }

    public initMemory() {
        this.memoryList = [];
        for (let i = 0; i < this.size; i++) {
            const newMemBlock: MemoryBlock = new MemoryBlock(null, i);
            this.memoryList.push(newMemBlock);
        }
    }

    public addProcess(process: Process): boolean {
        return this.memoryAlgorithm.addProcess(this.memoryList, process);
    }

    public removeProcess(process: Process) {
        this.memoryAlgorithm.removeProcess(this.memoryList, process);
    }

    public fits(process : Process) : [boolean, number] {
        return this.memoryAlgorithm.fits(this.memoryList, process);
    }
}

class MemoryBlock {
    process: Process;
    id: number;

    constructor(process: Process, id: number) {
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