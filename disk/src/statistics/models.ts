/*
 * Created by Clemens Gläser on 08.04.18 13:01
 */

export class Coordinate {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Stat {
    public coordinates: Coordinate[];

    constructor(public statName: string) {
        this.coordinates = [];
    }

    public clear() {
        this.coordinates = [];
    }

    public add(coordinate: Coordinate) {
        this.coordinates.push(coordinate);
    }

    get size(): number {
        return this.coordinates.length;
    }

    get last(): Coordinate | undefined {
        if (this.size <= 0) {
            return undefined;
        }

        return this.coordinates[this.size - 1];
    }
}
