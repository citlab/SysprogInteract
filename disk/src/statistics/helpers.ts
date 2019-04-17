/*
 * Created by Clemens Gläser on 08.04.18 13:10
 */

import {mean} from "d3-array";
import {Coordinate, Stat} from "./models";

export function addListEntry(selector: any, text: string) {
    selector
        .append("li")
        .attr("class", "item")
        .text(text);
}

export function addListEntryCurry(selector: any): (t: string) => void {
    return (text: string) => {
        addListEntry(selector, text);
    };
}

export function addBaseAndMaxAndAvg(
    currentTime: number,
    baseValue: number,
    stats: Stat[]
) {
    stats[0].add(new Coordinate(currentTime, baseValue));

    const max = Math.max(
        baseValue,
        stats[1].last == null ? baseValue : stats[1].last!.y
    );
    stats[1].add(new Coordinate(currentTime, max));

    const calculatedAvg = mean(stats[0].coordinates, (datum) => datum.y);
    const avg = calculatedAvg ? calculatedAvg : 0;
    stats[2].add(new Coordinate(currentTime, avg));
}
