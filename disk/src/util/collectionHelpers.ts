/*
 * Created by Clemens Gläser on 29.03.18 12:17
 */

import {Map} from "d3-collection";

export function getOrDefault<T>(map: Map<T>, key: string, defaultValue: T): T {
    const result = map.get(key);
    return result ? result : defaultValue;
}

type IndexFinder<T = any> = (array: T[], accessor: (t: T) => number) => number;

function genericIndexOf<T>(
    comparator: (bestValue: number, current: number) => boolean
): IndexFinder<T> {
    return (array, accessor) => {
        if (array.length === 0) {
            return -1;
        }

        let target = accessor(array[0]);
        let targetIndex = 0;

        for (let i = 1; i < array.length; i++) {
            const value = accessor(array[i]);
            if (comparator(target, value)) {
                targetIndex = i;
                target = value;
            }
        }

        return targetIndex;
    };
}

// maybe also write lastIndexOfMin, indexOfMax, lastIndexOfMax
export const indexOfMin: IndexFinder = genericIndexOf(
    (bestValue, current) => current < bestValue
);
