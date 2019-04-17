/*
 * Created by Clemens Gläser on 11.04.18 16:21
 */

export function requireNumber(value: any): value is number {
    return typeof value === "number";
}

export function requireBoolean(value: any): value is boolean {
    return typeof value === "boolean";
}

export function requireString(value: any): value is string {
    return typeof value === "string";
}
