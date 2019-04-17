/*
 * Created by Clemens Gläser on 11.04.18 14:12
 */

export interface NamedExtra<T = undefined> {
    name: string;
    extra?: T;
}

export type SaveFormat = SaveFormatVersion0 | SaveFormatVersion1;

export interface SaveFormatVersion0 {
    version: 0;
    processor?: ProcessorFields;
    memory?: MemoryFields;
    disk?: DiskFields;
    processes: ProcessLike[];
    localStorage?: SerializedKeyValues;
}

export interface SaveFormatVersion1 {
    version: 1;
    processor?: ProcessorFields;
    memory?: MemoryFields;
    disk?: DiskFields;
    processes: ProcessLike[];
    localStorage?: SerializedKeyValues;
    swapping?: SwappingFields;
}

export interface ProcessorFields {
    algorithm: NamedExtra<boolean | number>;
}

export interface MemoryFields {
    algorithm: NamedExtra<BuddySystemExtra>;
}

export interface BuddySystemExtra {
    canOverstep: boolean;
    minSize: number;
}

export interface DiskFields {
    algorithm: NamedExtra;
}

export interface ProcessLike {
    arrival: number;
    duration: number;
    name: string;
    priority: number;
    memoryUsage: number;
    diskUsage: number;
}

export interface SerializedKeyValues {
    [p: string]: string;
}

export interface SwappingFields {
    algorithm: NamedExtra;
}
