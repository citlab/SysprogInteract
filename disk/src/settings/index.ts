/*
 * Created by Clemens Gläser on 26.03.18 12:12
 *
 * This is the entry file for the settings.html page.
 */
import {select, selectAll} from "d3-selection";
import {restoreLocalStorageDefaults} from "../localStorage/setupDefaults";
import {setFormStateFromLocalStorage} from "./formListeners";

select("#btnBack").on("click", () => {
    window.location.href = "/scheduling.html";
});

select("#btnRestoreDefaults").on("click", () => {
    const yes: boolean = confirm(
        "Are you sure you want to restore the defaults?"
    );
    if (yes) {
        restoreLocalStorageDefaults();
        setFormStateFromLocalStorage();
    }
});

const categories = ["General", "Memory", "Disk", "Visuals"];
// btnCatGeneral is the button opening a category
categories.forEach((v) => {
    select(`#btnCat${v}`).on("click", () => handleCategoryButton(v));
});

function handleCategoryButton(category: string) {
    // hide all category containers
    selectAll(".container-settings").classed("hidden", true);
    // open / show selected category
    select(`#opts${category}`).classed("hidden", false);

    // switch selected button to be active
    selectAll(".categories>li>button").classed("active", false);
    select(`#btnCat${category}`).classed("active", true);
}

setFormStateFromLocalStorage();
