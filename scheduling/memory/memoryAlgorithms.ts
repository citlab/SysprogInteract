import {MemoryBlock} from "./memoryController";
import {Process} from "../processor";

abstract class MemoryAlgorithm {

    /**
     * Adds process to memory if it fits.
     * Returns "true" if successful, "false" otherwise.
     * @param memoryList
     * @param process
     * @return boolean
     */
    public abstract addProcess(memoryList: MemoryBlock[], process: Process): boolean;

    /**
     * Removes the given process from memory.
     * @param memoryList
     * @param process
     * @return void
     */
    public abstract removeProcess(memoryList: MemoryBlock[], process: Process): void;

    /**
     * Tests if Memory has suitable space for process.
     * Similar to "addProcess" but does not change/set anything.
     * return[0] : boolean : Does it fit?
     * return[0] : number : If "Best Fit" or "Worst Fit" the size of the free segment. -1 else.
     * @param memoryList
     * @param process
     * @return [boolean, number]
     */
    public abstract fits(memoryList: MemoryBlock[], process: Process): [boolean, number];

    /**
     * Returns name of memory algorithm.
     * @return string
     */
    public abstract getName(): string;
}

class FirstFit extends MemoryAlgorithm {

    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        let i: number = 0;
        const allocSize: number = process.additionalMem || process.getMemoryUsage();

        while (i <= memoryList.length - allocSize && !(process.hasMemory) ) {
            if (!(memoryList[i].getProcess())) {
                const sliced = memoryList.slice(i, i + allocSize);
                if (sliced.every(function(mb) {
                        return mb.getProcess() == null;
                    })) {
                    sliced.forEach(function(mb) {
                        process.setHasMemory(true);
                        memoryList[mb.getId()] = new MemoryBlock(process, mb.getId());
                    });
                }
            }
            i++;
        }
        if (process.hasMemory) {
            return true;
        } else {
            process.reject();
            console.log("not enough or no suitable space", process.getName());
            return false;
        }
    }

    public fits(memoryList: MemoryBlock[], process: Process): [boolean, number] {
        let i: number = 0;
        const allocSize: number = process.additionalMem || process.getMemoryUsage();

        while (i <= memoryList.length - allocSize && !(process.hasMemory) ) {
            if (!(memoryList[i].getProcess())) {
                const sliced = memoryList.slice(i, i + allocSize);
                if (sliced.every(function(mb) {
                    return mb.getProcess() == null;
                })) {
                    return [true, -1];
                    }
                }
            i++;
        }
        return [false, -1];
    }

    public removeProcess(memoryList: MemoryBlock[], process: Process): void {
        memoryList.forEach(function(mb) {
            if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new MemoryBlock(null, mb.getId());
            }
        });
    }

    public getName(): string {
        return ("FirstFit");
    }
}

class BestFit extends MemoryAlgorithm {

    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        let start = 0;
        let end = 0;
        let finalStart = 0;
        let finalEnd = 0;

        while (end < memoryList.length) {
            if (memoryList[start].getProcess()) {
                start++;
                end = start;
            } else {
                while (end < memoryList.length && !memoryList[end].getProcess()) {
                    end++;
                }
                end--;
                if (end - start >= process.memoryUsage-1) {
                    if (finalEnd === 0 && finalStart === 0) {
                        finalEnd = end;
                        finalStart = start;
                    } else if (finalEnd - finalStart > end - start) {
                        finalStart = start;
                        finalEnd = end;
                    }
                }
                end++;
                start = end;
            }
        }

        if (finalEnd - finalStart >= process.memoryUsage - 1 && memoryList.every(function(mb) {
            if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                return !mb.getProcess();
            } else {
                return true;
            }
        })) {
            process.hasMemory = true;
            memoryList.forEach(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalStart + process.memoryUsage - 1) {
                    memoryList[mb.getId()] = new MemoryBlock(process, mb.getId());
                }
            });
            return true;
        } else {
            process.reject();
            return false;
        }
    }

    public fits(memoryList: MemoryBlock[], process: Process): [boolean, number] {
        let start = 0;
        let end = 0;
        let finalStart = 0;
        let finalEnd = 0;

        while (end < memoryList.length) {
            if (memoryList[start].getProcess()) {
                start++;
                end = start;
            } else {
                while (end < memoryList.length && !memoryList[end].getProcess()) {
                    end++;
                }
                end--;
                if (end - start >= process.memoryUsage-1) {
                    if (finalEnd === 0 && finalStart === 0) {
                        finalEnd = end;
                        finalStart = start;
                    } else if (finalEnd - finalStart > end - start) {
                        finalStart = start;
                        finalEnd = end;
                    }
                }
                end++;
                start = end;
            }
        }
        if (finalEnd - finalStart >= process.memoryUsage-1 && memoryList.every(function(mb) {
            if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                return !mb.getProcess();
            } else {
                return true;
            }
        })) {
            return [true, finalEnd -finalStart];
        } else {
            return [false, -1];
        }
    }

    public removeProcess(memoryList: MemoryBlock[], process: Process): void {
        memoryList.forEach(function(mb) {
            if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new MemoryBlock(null, mb.getId());
            }
        });
    }

    public getName(): string {
        return ("BestFit");
    }
}

class WorstFit extends MemoryAlgorithm {

    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        let start = 0;
        let end = 0;
        let finalStart = 0;
        let finalEnd = 0;

        while (end < memoryList.length) {
            if (memoryList[start].getProcess()) {
                start++;
                end = start;
            } else {
                while (end < memoryList.length && !memoryList[end].getProcess()) {
                    end++;
                }
                end--;
                if (end - start >= process.memoryUsage) {
                    if (finalEnd === 0 && finalStart === 0) {
                        finalEnd = end;
                        finalStart = start;
                    } else if (finalEnd - finalStart < end - start) {
                        finalStart = start;
                        finalEnd = end;
                    }
                }
                end++;
                start = end;
            }
        }


        if (finalEnd - finalStart >= process.memoryUsage && memoryList.every(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                    return !mb.getProcess();
                } else {
                    return true;
                }
            })) {
            process.hasMemory = true;
            memoryList.forEach(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalStart + process.memoryUsage - 1) {
                    memoryList[mb.getId()] = new MemoryBlock(process, mb.getId());
                }
            });
            return true;
        } else {
            process.reject();
            return false;
        }
    }

    public fits(memoryList: MemoryBlock[], process: Process): [boolean, number] {
        let start = 0;
        let end = 0;
        let finalStart = 0;
        let finalEnd = 0;

        while (end < memoryList.length) {
            if (memoryList[start].getProcess()) {
                start++;
                end = start;
            } else {
                while (end < memoryList.length && !memoryList[end].getProcess()) {
                    end++;
                }
                end--;
                if (end - start >= process.memoryUsage) {
                    if (finalEnd === 0 && finalStart === 0) {
                        finalEnd = end;
                        finalStart = start;
                    } else if (finalEnd - finalStart < end - start) {
                        finalStart = start;
                        finalEnd = end;
                    }
                }
                end++;
                start = end;
            }
        }


        if (finalEnd - finalStart >= process.memoryUsage && memoryList.every(function(mb) {
            if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                return !mb.getProcess();
            } else {
                return true;
            }
        })) {
            return [true, finalEnd -finalStart];
        } else {
            return [false, -1];
        }
    }

    public removeProcess(memoryList: MemoryBlock[], process: Process): void {
        memoryList.forEach(function(mb) {
            if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new MemoryBlock(null, mb.getId());
            }
        });
    }

    public getName(): string {
        return ("Worst Fit");
    }
}

class RotatingFirstFit extends MemoryAlgorithm {
    public lastAllocated: number = -1;

    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        let i: number;
        const allocSize: number = process.getMemoryUsage();

        if (this.lastAllocated === memoryList.length - 1) i = 0;
        else i = this.lastAllocated + 1;

        while (i !== this.lastAllocated) {
            if (i < this.lastAllocated) {
                if (i <= this.lastAllocated - allocSize) {
                    const sliced = memoryList.slice(i, i + allocSize);
                    if (sliced.every(function(mb) {
                            return mb.getProcess() == null;
                        })) {
                        sliced.forEach(function(mb) {
                            process.setHasMemory(true);
                            memoryList[mb.getId()] = new MemoryBlock(process, mb.getId());
                        });
                        this.lastAllocated = i + allocSize - 1;
                        break;
                    }
                }
            } else {
                if (i <= memoryList.length - allocSize) {
                    const sliced = memoryList.slice(i, i + allocSize);
                    if (sliced.every(function(mb) {
                            return mb.getProcess() == null;
                        })) {
                        sliced.forEach(function(mb) {
                            process.setHasMemory(true);
                            memoryList[mb.getId()] = new MemoryBlock(process, mb.getId());
                        });
                        this.lastAllocated = i + allocSize - 1;
                        break;
                    }
                }
            }
            if (i === memoryList.length - 1) i = 0;
            else i++;
        }

        if (process.hasMemory) {
            return true;
        } else {
            process.reject();
            console.log("not enough or no suitable space", process.getName());
            return false;
        }
    }

    public fits(memoryList: MemoryBlock[], process: Process): [boolean, number] {
        let i: number;
        const allocSize: number = process.getMemoryUsage();
        let fits : boolean = false;

        if (this.lastAllocated === memoryList.length - 1) i = 0;
        else i = this.lastAllocated + 1;

        while (i !== this.lastAllocated) {
            if (i < this.lastAllocated) {
                if (i <= this.lastAllocated - allocSize) {
                    const sliced = memoryList.slice(i, i + allocSize);
                    if (sliced.every(function(mb) {
                        return mb.getProcess() == null;
                    })) {
                        fits = true;
                        break;
                    }
                }
            } else {
                if (i <= memoryList.length - allocSize) {
                    const sliced = memoryList.slice(i, i + allocSize);
                    if (sliced.every(function(mb) {
                        return mb.getProcess() == null;
                    })) {
                        fits = true;
                        break;
                    }
                }
            }
            if (i === memoryList.length - 1) i = 0;
            else i++;
        }
        return [fits, -1];
    }

    public removeProcess(memoryList: MemoryBlock[], process: Process): void {
        memoryList.forEach(function(mb) {
            if (mb.getProcess() === process) {
                memoryList[mb.getId()] = new MemoryBlock(null, mb.getId());
            }
        });
    }

    public getName(): string {
        return ("Rotating First Fit");
    }
}

export {MemoryAlgorithm, FirstFit, BestFit, WorstFit, RotatingFirstFit};