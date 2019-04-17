/**
 * Created by Joe on 30.11.17.
 */
import {MemoryBlock} from "./memoryController";
import {Process} from "./processor";
import {approximateAsPowersOfTwo, findUpperPowerOfTwo} from "./util/mathHelper";

abstract class MemoryAlgorithm {
    /*
        adds one! process to the Memory
        returns true if Memory was succesfull allocated
        returns false if not
     */
    public abstract addProcess(
        memoryList: MemoryBlock[],
        process: Process
    ): boolean;

    // removes the gives process from the Memory
    public abstract removeProcess(
        memoryList: MemoryBlock[],
        process: Process
    ): void;

    public abstract getName(): string;

    /**
     * This method gets called to set the initial MemoryList state.
     * Do note that you do not have to create as many blocks as requested.
     * @param {number} size - the desired size
     * @returns {MemoryBlock[]} - the new memoryList
     */
    public initMemory(size: number): MemoryBlock[] {
        const newMemBlocks: MemoryBlock[] = [];
        for (let i = 0; i < size; i++) {
            newMemBlocks.push(new MemoryBlock(null, i));
        }
        return newMemBlocks;
    }

    // we need to find the longest continuous chain of blocks
    public hasSpaceForProcess(
        memoryList: MemoryBlock[],
        process: Process
    ): boolean {
        const continuous: number[] = [];
        let counter = 0;
        memoryList.forEach((v) => {
            if (v.getProcess() == null) {
                counter++;
            } else {
                continuous.push(counter);
                counter = 0;
            }
        });
        continuous.push(counter);

        const max = continuous.reduce((prev, curr) => Math.max(prev, curr), 0);

        return max >= process.getMemoryUsage();
    }
}

class FirstFit extends MemoryAlgorithm {
    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        let i: number = 0;
        const allocSize: number = process.getMemoryUsage();
        const freeIds = [];

        while (i <= memoryList.length - allocSize && !process.hasMemory) {
            if (!memoryList[i].getProcess()) {
                const sliced = memoryList.slice(i, i + allocSize);
                if (
                    sliced.every(function(mb) {
                        return mb.getProcess() == null;
                    })
                ) {
                    sliced.forEach(function(mb) {
                        process.setHasMemory(true); // not important yet, just done for consistency. memoryList processes and processor processes are not equal!
                        memoryList[mb.getId()] = new MemoryBlock(
                            process,
                            mb.getId()
                        );
                    });
                }
            }
            i++;
        }
        if (process.hasMemory) {
            return true;
        } else {
            process.reject();
            console.log("not enough or no suitable space");
            return false;
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
        return "FirstFit";
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
                // finding startIndex for free blocks
                start++;
                end = start;
            } else {
                while (
                    end < memoryList.length &&
                    !memoryList[end].getProcess()
                ) {
                    end++;
                }
                // end now identifies the last free blockindex from start to and end in one row.
                end--;
                if (end - start >= process.memoryUsage) {
                    // first match
                    if (finalEnd === 0 && finalStart === 0) {
                        finalEnd = end;
                        finalStart = start;

                        // better match
                    } else if (finalEnd - finalStart > end - start) {
                        finalStart = start;
                        finalEnd = end;
                    }
                }
                end++;
                start = end;
            }
        }
        console.log("finalStart: " + finalStart);
        console.log("finalEnd: " + (finalStart + process.memoryUsage - 1));

        if (
            finalEnd - finalStart >= process.memoryUsage &&
            memoryList.every(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                    return !mb.getProcess();
                } else {
                    return true;
                }
            })
        ) {
            process.hasMemory = true;
            memoryList.forEach(function(mb) {
                if (
                    finalStart <= mb.getId() &&
                    mb.getId() <= finalStart + process.memoryUsage - 1
                ) {
                    memoryList[mb.getId()] = new MemoryBlock(
                        process,
                        mb.getId()
                    );
                }
            });
            return true;
        } else {
            process.reject();
            return false;
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
        return "BestFit";
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
                // finding startIndex for free blocks
                start++;
                end = start;
            } else {
                while (
                    end < memoryList.length &&
                    !memoryList[end].getProcess()
                ) {
                    end++;
                }
                // end now identifies the last free blockindex from start to and end in one row.
                end--;
                if (end - start >= process.memoryUsage) {
                    // first match
                    if (finalEnd === 0 && finalStart === 0) {
                        finalEnd = end;
                        finalStart = start;

                        // better match
                    } else if (finalEnd - finalStart < end - start) {
                        finalStart = start;
                        finalEnd = end;
                    }
                }
                end++;
                start = end;
            }
        }
        console.log("finalStart: " + finalStart);
        console.log("finalEnd: " + (finalStart + process.memoryUsage - 1));

        if (
            finalEnd - finalStart >= process.memoryUsage &&
            memoryList.every(function(mb) {
                if (finalStart <= mb.getId() && mb.getId() <= finalEnd) {
                    return !mb.getProcess();
                } else {
                    return true;
                }
            })
        ) {
            process.hasMemory = true;
            memoryList.forEach(function(mb) {
                if (
                    finalStart <= mb.getId() &&
                    mb.getId() <= finalStart + process.memoryUsage - 1
                ) {
                    memoryList[mb.getId()] = new MemoryBlock(
                        process,
                        mb.getId()
                    );
                }
            });
            return true;
        } else {
            process.reject();
            return false;
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
        return "Worst Fit";
    }
}

class RotatingFirstFit extends MemoryAlgorithm {
    public lastAllocated: number = -1;

    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        let i: number;
        const allocSize: number = process.getMemoryUsage();
        const freeIds = [];

        if (this.lastAllocated === memoryList.length - 1) {
            i = 0;
        } else {
            i = this.lastAllocated + 1;
        }
        console.log(i);
        // eine runde rum
        while (i !== this.lastAllocated) {
            // linke seite
            if (i < this.lastAllocated) {
                // genug platz
                if (i <= this.lastAllocated - allocSize) {
                    // [i , i + allocSize] ist frei
                    const sliced = memoryList.slice(i, i + allocSize);
                    if (
                        sliced.every(function(mb) {
                            return mb.getProcess() == null;
                        })
                    ) {
                        sliced.forEach(function(mb) {
                            process.setHasMemory(true); // not important yet, just done for consistency. memoryList processes and processor processes are not equal!
                            memoryList[mb.getId()] = new MemoryBlock(
                                process,
                                mb.getId()
                            );
                        });
                        this.lastAllocated = i + allocSize - 1;
                        break;
                    }
                }

                // rechte seite
            } else {
                // genug platz
                if (i <= memoryList.length - allocSize) {
                    const sliced = memoryList.slice(i, i + allocSize);
                    if (
                        sliced.every(function(mb) {
                            return mb.getProcess() == null;
                        })
                    ) {
                        sliced.forEach(function(mb) {
                            process.setHasMemory(true);
                            memoryList[mb.getId()] = new MemoryBlock(
                                process,
                                mb.getId()
                            );
                        });
                        this.lastAllocated = i + allocSize - 1;
                        break;
                    }
                }
            }

            // iteration
            if (i === memoryList.length - 1) {
                i = 0;
            } else {
                i++;
            }
        }

        if (process.hasMemory) {
            return true;
        } else {
            process.reject();
            console.log("not enough or no suitable space");
            return false;
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
        return "Rotating First Fit";
    }
}

class BuddySystem extends MemoryAlgorithm {
    private buddies: Array<{first: number; second: number; size: number}> = [];
    constructor(public canOverstepSize: boolean, public minSize: number = 1) {
        super();
    }
    public addProcess(memoryList: MemoryBlock[], process: Process): boolean {
        const memRequirements = findUpperPowerOfTwo(process.getMemoryUsage());
        const maxMemAvailable = memoryList
            .filter((v) => v.getProcess() === null)
            .reduce((prev, curr) => Math.max(prev, curr.size), 0);
        const actualMemRequirements = Math.max(memRequirements, this.minSize);
        if (maxMemAvailable < actualMemRequirements) {
            process.reject();
            return false;
        }
        let desiredSize = actualMemRequirements;
        let index = this.findMatchingBlockIndex(desiredSize, memoryList);
        let iterations = 0;
        while (index === -1) {
            desiredSize *= 2;
            index = this.findMatchingBlockIndex(desiredSize, memoryList);
            iterations++;
        }
        const newAdditions: MemoryBlock[] = [];
        newAdditions.unshift(
            new MemoryBlock(null, memoryList[index].getId(), desiredSize)
        );
        while (iterations >= 1) {
            const mb = newAdditions.shift();
            const halvedSize = mb!.size / 2;
            newAdditions.unshift(
                new MemoryBlock(null, mb!.getId() + halvedSize, halvedSize)
            );
            newAdditions.unshift(
                new MemoryBlock(null, mb!.getId(), halvedSize)
            );
            this.buddies.push({
                first: mb!.getId(),
                second: mb!.getId() + halvedSize,
                size: halvedSize
            });
            iterations--;
        }
        const finalMb = newAdditions.shift();
        newAdditions.unshift(
            new MemoryBlock(process, finalMb!.getId(), finalMb!.size)
        );
        memoryList.splice(index, 1, ...newAdditions);
        process.hasMemory = true;
        console.table(memoryList);
        return true;
    }

    public removeProcess(memoryList: MemoryBlock[], process: Process): void {
        const index = this.findIndexOfProcess(process, memoryList);
        if (index === -1) {
            return;
        }
        const oldMb = memoryList[index];
        memoryList.splice(
            index,
            1,
            new MemoryBlock(null, oldMb.getId(), oldMb.size)
        );
        let buddyEntry = this.findBuddyEntry(oldMb);
        while (buddyEntry) {
            const firstBuddyIndex = memoryList
                .map((mb) => mb.getId())
                .indexOf(buddyEntry.first);
            if (firstBuddyIndex === -1) {
                break;
            }
            const firstBuddy = memoryList[firstBuddyIndex];
            const okToRemove =
                firstBuddy.getProcess() == null &&
                memoryList[firstBuddyIndex + 1].getProcess() == null;
            if (okToRemove) {
                const newMb = new MemoryBlock(
                    null,
                    firstBuddy.getId(),
                    firstBuddy.size * 2
                );
                memoryList.splice(firstBuddyIndex, 2, newMb);
                this.removeBuddyEntry(firstBuddy.getId(), firstBuddy.size);
                buddyEntry = this.findBuddyEntry(newMb);
            } else {
                buddyEntry = undefined;
            }
        }
        console.table(memoryList);
    }

    public getName(): string {
        return "Buddy System";
    }

    public initMemory(size: number): MemoryBlock[] {
        const newSizes = approximateAsPowersOfTwo(
            size,
            this.minSize,
            this.canOverstepSize
        );
        console.log("newSizes", newSizes);
        const newMemBlocks: MemoryBlock[] = [];
        newSizes.forEach((v, i) => {
            const sum = newSizes
                .filter((value, index) => index < i)
                .reduce((prev, curr) => prev + curr, 0);
            newMemBlocks.push(new MemoryBlock(null, sum, v));
        });
        console.table(newMemBlocks);
        return newMemBlocks;
    }

    public hasSpaceForProcess(
        memoryList: MemoryBlock[],
        process: Process
    ): boolean {
        const memRequirements = findUpperPowerOfTwo(process.getMemoryUsage());
        const maxMemAvailable = memoryList
            .filter((v) => v.getProcess() == null)
            .reduce((prev, curr) => Math.max(prev, curr.size), 0);
        return memRequirements <= maxMemAvailable;
    }

    private findMatchingBlockIndex(
        desiredSize: number,
        memoryList: MemoryBlock[]
    ): number {
        let index = -1;
        let done = false;
        memoryList.forEach((value, i) => {
            if (
                value.size === desiredSize &&
                !done &&
                value.getProcess() == null
            ) {
                index = i;
                done = true;
            }
        });
        return index;
    }

    private findIndexOfProcess(process: Process, memoryList: MemoryBlock[]) {
        let index = -1;
        let done = false;
        memoryList.forEach((v, i) => {
            if (v.getProcess() === process && !done) {
                index = i;
                done = true;
            }
        });
        return index;
    }

    private findBuddyEntry(
        mb: MemoryBlock
    ): {first: number; second: number; size: number} | undefined {
        const result = this.buddies.filter(
            (v) =>
                (v.first === mb.getId() || v.second === mb.getId()) &&
                v.size === mb.size
        );
        return result.pop();
    }

    private removeBuddyEntry(first: number, size: number) {
        let targetIndex = -1;
        this.buddies.forEach((v, i) => {
            if (v.first === first && v.size === size) {
                targetIndex = i;
            }
        });
        if (targetIndex >= 0) {
            this.buddies.splice(targetIndex, 1);
        }
    }
}

export {
    MemoryAlgorithm,
    FirstFit,
    BestFit,
    WorstFit,
    RotatingFirstFit,
    BuddySystem
};
