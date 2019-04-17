/*
 * Created by Clemens Gläser on 26.03.18 15:29
 *
 * This file sets up the form event listeners for settings.html
 */

import {event, select} from "d3-selection";
import {get} from "../localStorage/helpers";
import {LocalStorageKeys} from "../localStorage/keys";
import {setItem} from "../localStorage/TypedLocalStorage";

select("#formGeneral").on("submit", () => {
    event.preventDefault();
    return false;
});

select("#formMemory").on("submit", () => {
    const isEnabled = (select("#memoryEnabled").node() as HTMLInputElement)
        .checked;
    const swappingEnabled = (select(
        "#swappingEnabled"
    ).node() as HTMLInputElement).checked;
    const size = (select("#memorySize").node() as HTMLInputElement)
        .valueAsNumber;

    setItem<boolean>(LocalStorageKeys.MEMORY_ENABLED, isEnabled);
    setItem<boolean>(LocalStorageKeys.SWAPPING_ENABLED, swappingEnabled);
    setItem<number>(LocalStorageKeys.MEMORY_SIZE, size);

    event.preventDefault();
    return false;
});

select("#formDisk").on("submit", () => {
    const isEnabled = (select("#diskEnabled").node() as HTMLInputElement)
        .checked;
    const size = (select("#diskSize").node() as HTMLInputElement).valueAsNumber;
    const sizePerBlock = (select(
        "#diskSizePerBlock"
    ).node() as HTMLInputElement).valueAsNumber;

    setItem<boolean>(LocalStorageKeys.DISK_ENABLED, isEnabled);
    setItem<number>(LocalStorageKeys.DISK_SIZE, size);
    setItem<number>(LocalStorageKeys.DISK_SIZE_PER_BLOCK, sizePerBlock);

    event.preventDefault();
    return false;
});

select("#formVisuals").on("submit", () => {
    const selected = (select(
        "#visualsDiskSpaceAnimator"
    ).node() as HTMLSelectElement).value;

    setItem<string>(
        LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR,
        selected
    );

    event.preventDefault();
    return false;
});

const boolToChecked: (b: boolean) => string | null = (bool: boolean) =>
    bool ? "checked" : null;

export function setFormStateFromLocalStorage() {
    const memoryEnabled = get<boolean>(LocalStorageKeys.MEMORY_ENABLED);
    select<HTMLInputElement, {}>("#memoryEnabled").attr("checked", () =>
        boolToChecked(memoryEnabled)
    );
    const swappingEnabled = get<boolean>(LocalStorageKeys.SWAPPING_ENABLED);
    select<HTMLInputElement, {}>("#swappingEnabled").attr("checked", () =>
        boolToChecked(swappingEnabled)
    );
    select<HTMLInputElement, {}>("#memorySize").attr(
        "value",
        get<number>(LocalStorageKeys.MEMORY_SIZE)
    );

    const diskEnabled = get<boolean>(LocalStorageKeys.DISK_ENABLED);
    select<HTMLInputElement, {}>("#diskEnabled").attr("checked", () =>
        boolToChecked(diskEnabled)
    );
    select<HTMLInputElement, {}>("#diskSize").attr(
        "value",
        get<number>(LocalStorageKeys.DISK_SIZE)
    );
    select<HTMLInputElement, {}>("#diskSizePerBlock").attr(
        "value",
        get<number>(LocalStorageKeys.DISK_SIZE_PER_BLOCK)
    );

    const selectedDiskSpaceAnimator = get<string>(
        LocalStorageKeys.VISUALS_SELECTED_DISK_SPACE_ANIMATOR
    );
    select<HTMLSelectElement, {}>("#visualsDiskSpaceAnimator")
        .selectAll<HTMLOptionElement, {}>("option")
        .attr("selected", function(this: HTMLOptionElement) {
            return this.value === selectedDiskSpaceAnimator ? "selected" : null;
        });
}
