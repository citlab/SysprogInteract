/*
 * Created by Clemens Gläser on 03.04.18 17:26
 */
import {mapOfDefaults} from "./setupDefaults";
import {getOrElse} from "./TypedLocalStorage";

export function get<T>(key: string, defaultValue?: T): T {
    if (!mapOfDefaults.has(key) && !defaultValue) {
        throw new Error(
            `Key '${key}' has no default registered and no default value specified!`
        );
    }
    const def: T = mapOfDefaults.has(key)
        ? mapOfDefaults.get(key)!.value!
        : defaultValue!;
    return getOrElse(key, def);
}

export function allLocalStorageKeys(): string[] {
    const result: string[] = [];
    for (const key in window.localStorage) {
        if (
            window.localStorage.hasOwnProperty(key) &&
            key.lastIndexOf("webpack") === -1
        ) {
            result.push(key);
        }
    }
    return result;
}
