export function closestPowerOfTwo(size: number, canOverstep: boolean): number {
    if (!canOverstep) {
        return findLowerPowerOfTwo(size);
    }
    const lower = findLowerPowerOfTwo(size);
    const upper = findUpperPowerOfTwo(size);
    const diffLower = size - lower;
    const diffUpper = upper - size;
    if (diffLower <= diffUpper) {
        return lower;
    }
    return upper;
}

export function exponent(base: number, num: number): number {
    return Math.floor(Math.log(num) / Math.log(base));
}

export function findLowerPowerOfTwo(size: number): number {
    return Math.pow(2, Math.floor(Math.log(size) / Math.log(2)));
}

export function findUpperPowerOfTwo(size: number): number {
    return Math.pow(2, Math.ceil(Math.log(size) / Math.log(2)));
}

/**
 * This method splits a number (size) into powers of two, not going lower as minSize.
 * It might create a bigger sum of numbers than size if canOverstep is true.
 * @param {number} size - the number to be split
 * @param {number} minSize - the smallest a part can be
 * @param {boolean} canOverstep - if true
 * this method creates an array with a bigger number than size when appropriate.
 * @returns {number[]} - the number split into parts
 */
export function approximateAsPowersOfTwo(
    size: number,
    minSize: number,
    canOverstep: boolean
): number[] {
    if (size <= 0 || size <= minSize) {
        return [];
    }
    if (canOverstep) {
        const closest = closestPowerOfTwo(size, canOverstep);
        if (closest >= size) {
            return [closest];
        }
    }
    const result: number[] = [];
    let counter = size;
    while (counter >= minSize) {
        const lower = findLowerPowerOfTwo(counter);
        result.push(lower);
        counter -= lower;
    }

    return result;
}

/**
 * Returns an int in the range of [min, max)
 * @param {number} min - lower bound int, inclusive
 * @param {number} max - upper bound int, exclusive
 * @returns {number} - an int between [min, max) / [min, max - 1]
 *
 * Copied from https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
 */
export function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
