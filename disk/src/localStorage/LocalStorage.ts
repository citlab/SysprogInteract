/*
 * Created by Clemens Gläser on 28.03.18 16:21
 */

export const LOCAL_STORAGE_NOT_AVAILABLE =
    "window.localStorage is not available";
export const KEY_NOT_FOUND = "Key '{{}}' was not found in the local storage";

export function isAvailable(): boolean {
    return window.localStorage != null;
}

export function hasKey(key: string): boolean {
    if (!isAvailable()) {
        return false;
    }
    return window.localStorage.getItem(key) !== null;
}

export function getOrThrow(key: string): string {
    if (!isAvailable() || !hasKey(key)) {
        throw new Error(KEY_NOT_FOUND.replace("{{}}", key));
    }

    return window.localStorage.getItem(key)!;
}

export function getOrElse(key: string, defaultValue: string): string {
    if (!isAvailable() || !hasKey(key)) {
        return defaultValue;
    }

    return window.localStorage.getItem(key)!;
}

export function setItem(key: string, data: string) {
    if (!isAvailable()) {
        throw new Error(LOCAL_STORAGE_NOT_AVAILABLE);
    }

    window.localStorage.setItem(key, data);
}

export function setItemIfNull(key: string, data: string): boolean {
    if (!isAvailable()) {
        throw new Error(LOCAL_STORAGE_NOT_AVAILABLE);
    }
    if (!hasKey(key)) {
        window.localStorage.setItem(key, data);
        return true;
    }
    return false;
}
