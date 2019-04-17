/*
 * Created by Clemens Gläser on 03.04.18 13:40
 */

import * as local from "./LocalStorage";

export function isAvailable(): boolean {
    return local.isAvailable();
}

export function hasKey(key: string): boolean {
    return local.hasKey(key);
}

export function getOrThrow<T>(key: string): T {
    return JSON.parse(local.getOrThrow(key)) as T;
}

export function getOrElse<T>(key: string, defaultValue: T): T {
    if (!isAvailable() || !hasKey(key)) {
        return defaultValue;
    }
    const defaultJson = JSON.stringify(defaultValue);
    return JSON.parse(local.getOrElse(key, defaultJson)) as T;
}

export function setItem<T>(key: string, data: T) {
    local.setItem(key, JSON.stringify(data));
}

export function setItemIfNull<T>(key: string, data: T): boolean {
    return local.setItemIfNull(key, JSON.stringify(data));
}
