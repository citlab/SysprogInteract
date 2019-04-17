/*
 * Created by Clemens Gläser on 29.03.18 14:23
 */

import {map, Map} from "d3-collection";
import {DiskSpaceAnimatorKeys, LocalStorageKeys} from "./keys";
import {setItem, setItemIfNull} from "./TypedLocalStorage";

export function setupLocalStorageDefaults() {
    mapOfDefaults.each((value, key) => setItemIfNull(key, value.value));
}

function createDefaults(): Map<{type: string; value: any}> {
    const defaults: Map<{type: string; value: any}> = map();

    defaults
        .set(LocalStorageKeys.MEMORY_ENABLED, {type: "boolean", value: true})
        .set(LocalStorageKeys.MEMORY_SIZE, {type: "number", value: 1000})
        .set(LocalStorageKeys.DISK_ENABLED, {type: "boolean", value: true})
        .set(LocalStorageKeys.DISK_SIZE, {type: "number", value: 1000})
        .set(LocalStorageKeys.DISK_SIZE_PER_BLOCK, {type: "number", value: 4})
        .set(LocalStorageKeys.SWAPPING_ENABLED, {type: "boolean", value: true})
        .set(LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR, {
            type: "string",
            value: DiskSpaceAnimatorKeys.FIXED_SEGMENTS
        });

    return defaults;
}

export const mapOfDefaults: Map<{type: string; value: any}> = createDefaults();

export function restoreLocalStorageDefaults() {
    mapOfDefaults.each((value, key) => setItem(key, value.value));
}

setupLocalStorageDefaults();
