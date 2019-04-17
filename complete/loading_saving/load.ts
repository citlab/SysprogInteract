import {createProcess} from "../scheduling";
import {createDefaultEvents, createExclusiveResEvent} from "../ResourceManagement/eventCreator";
import {HTMLselectSchedulingAlgorithm} from "../setUpHTML";

/**
 * Loads save-file (.csv)
 * @param file File to be loaded.
 * @param memoryAllowed Is memory simulation allowed before loading?
 * @param resourceAllowed Is resource management simulation allowed before loading?
 */
function loadConfig(file : File, memoryAllowed : boolean, resourceAllowed : boolean) {
    if (!checkExtension(file)) return;
    const fr: FileReader = new FileReader();
    const x: File = file;
    let savePlain: string = "";

    fr.onload = function(e) {
        savePlain = (e.target as any).result;
        load(savePlain, memoryAllowed, resourceAllowed);
    };
    fr.readAsText(x);
}

/**
 * Parses save-file and loads configuration.
 * @param savePlain Plain text of save file.
 * @param memoryAllowed Is memory simulation allowed before loading?
 * @param resourceAllowed Is resource management simulation allowed before loading?
 */
function load(savePlain: string, memoryAllowed : boolean, resourceAllowed : boolean) {
    let arr = savePlain.split("\n");
    let isHeader : boolean = true;

    for (let i=0; i < arr.length; i++) {
        if (!checkSyntax(arr[i], isHeader, i)) {
            return;
        }
        isHeader = false
    }

    let header : string[] = arr[0].split(",");
    let cpu_algorithm   : string  = header[0].trim();
    let pre_emption     : boolean = header[1].trim() === "true";
    let quantum         : string  = header[2].trim();
    let mem_algorithm   : string  = header[3].trim();
    let mem_size        : string  = header[4].trim();
    let res_algorithm   : string  = header[5].trim();

    if (isNaN(parseInt(quantum)) || parseInt(quantum) <= 0){
        window.alert("quantum muss be a number, not lower than 1.");
        return;
    }
    if (mem_algorithm != "0" && (isNaN(parseInt(mem_size)) || parseInt(mem_size) < 128)){
        window.alert("Memory size must be a number, not lower than 128, or 0 is Memory is disabled.");
        return;
    }

    switch (cpu_algorithm) {
        case "Fifo":
            HTMLselectSchedulingAlgorithm("First in, first out");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "First in, First out";
            break;

        case "Lifo":
            HTMLselectSchedulingAlgorithm("Last in, first out");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Last in, First out";
            (document.getElementById("interruptCheckBox") as HTMLInputElement).checked = pre_emption;
            break;

        case "RR":
            HTMLselectSchedulingAlgorithm("Round Robin");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Round Robin";
            (document.getElementById("quantum") as HTMLInputElement).value = quantum;
            break;

        case "Priority":
            HTMLselectSchedulingAlgorithm("Priority");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Priority";
            (document.getElementById("interruptCheckBox") as HTMLInputElement).checked = pre_emption;
            break;

        case "SJN":
            HTMLselectSchedulingAlgorithm("Shortest job next");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Shortest Job Next";
            break;

        case "SRTN":
            HTMLselectSchedulingAlgorithm("Shortest remaining time next");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Shortest remaining time next";
            break;

        case "HRRN":
            HTMLselectSchedulingAlgorithm( "Highest response ration next");
            (document.getElementById("schedulingAlgorithm") as HTMLSelectElement).value = "Highest response ration next";
            break;

        default:
            let alertString : string = "Unknown CPU algorithm.";
            window.alert(alertString);
            return;
    }

    let memory_set : boolean = false;
    let memSwitch = <HTMLInputElement>document.getElementById("memorySwitch");
    switch (mem_algorithm) {
        case "First Fit":
            if (!memoryAllowed) memSwitch.click();
            (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value = "First Fit";
            (document.getElementById("memSizeControl") as HTMLInputElement).value = mem_size;
            memory_set = true;
            break;

        case "Best Fit":
            if (!memoryAllowed) memSwitch.click();
            (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value = "Best Fit";
            (document.getElementById("memSizeControl") as HTMLInputElement).value = mem_size;
            memory_set = true;
            break;

        case "Worst Fit":
            if (!memoryAllowed) memSwitch.click();
            (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value = "Worst Fit";
            (document.getElementById("memSizeControl") as HTMLInputElement).value = mem_size;
            memory_set = true;
            break;

        case "Rotating First Fit":
            if (!memoryAllowed) memSwitch.click();
            (document.getElementById("memoryAlgorithm") as HTMLSelectElement).value = "Rotating First Fit";
            (document.getElementById("memSizeControl") as HTMLInputElement).value = mem_size;
            memory_set = true;
            break;

        case "0":
            if (memoryAllowed) memSwitch.click();
            break;

        default:
            let alertString : string = "Unknown memory algorithm.";
            window.alert(alertString);
            memSwitch.disabled = true;
            return;
    }

    let resourceSwitch = <HTMLInputElement>document.getElementById("resourceSwitch");
    switch (res_algorithm) {
        case "Fifo":
            if (!memory_set) {
                window.alert("A memory algorithm must be specified in order to use resource management.");
                return;
            }
            if (!resourceAllowed) resourceSwitch.click();
            (document.getElementById("resourceAlgorithm") as HTMLSelectElement).value = "First in, First out";
            break;
        case "First Fit":
            if (!memory_set) {
                window.alert("A memory algorithm must be specified in order to use resource management.");
                return;
            }
            if (!resourceAllowed) resourceSwitch.click();
            (document.getElementById("resourceAlgorithm") as HTMLSelectElement).value = "First Fit";
            break;
        case "Best Fit":
            if (!memory_set) {
                window.alert("A memory algorithm must be specified in order to use resource management.");
                return;
            }
            if (!resourceAllowed) resourceSwitch.click();
            (document.getElementById("resourceAlgorithm") as HTMLSelectElement).value = "Best Fit";
            break;

        case "0":
            if (resourceAllowed) resourceSwitch.click();
            resourceSwitch.checked = true;
            break;

        default:
            let alertString : string = "Unknown resource algorithm.";
            window.alert(alertString);
            return;
    }

    let names : string[] = [];
    for (let i=1; i < arr.length; i++){
        if (arr[i] === "") return;
        let line : string[] = arr[i].split(",");
        let p_name      : string = line[0];
        let p_priority  : number = parseInt(line[1].trim());
        let p_arrival   : number = parseInt(line[2].trim());
        let p_length    : number = parseInt(line[3].trim());
        let p_memory    : number = parseInt(line[4].trim());

        if (!p_name) {window.alert("Process name missing!");                  return;}
        if (names.some((name) => {return name == p_name})){
            window.alert("Process names muss be unique!");
            return;
        }else{
            names.push(p_name);
        }

        if (p_priority < 1) {window.alert("Priority can't be lower than 1.");       return;}
        if (p_arrival < 0) {window.alert("Arrival can't be lower than 0.");        return;}
        if (p_length < 1) {window.alert("Length can't be lower than 1.");         return;}
        if (p_memory < 1) {window.alert("Memory usage can't be lower than 1.");   return;}

        let ex_res_time     : number = parseInt(line[7]);
        let ex_res_duration : number = parseInt(line[8]);

        if (ex_res_time < 0) {window.alert("ex_res_time can not ne lower than 0."); return;}
        if (ex_res_time > 0 && ex_res_duration < 1) {window.alert("ex_res_duration can not be lower than 1."); return;}

        let events : any[] = createDefaultEvents(p_arrival, p_memory, p_length);
        if (ex_res_time > 0) {
            let evtns : any[];
            evtns = createExclusiveResEvent(ex_res_time, ex_res_duration);
            evtns.forEach(x => events.push(x));
        }
        createProcess(p_length, p_arrival, p_priority, p_name, p_memory, false, events);
    }
}

/**
 * Checks if file is of the right type.
 * @param file File to be loaded.
 * @return boolean
 */
function checkExtension(file : File) : boolean {
    let allowedExtensions = new Array("csv"); //add others if you need to.
    let file_extension = file.name.split(".").pop().toLowerCase();

    if (!allowedExtensions.some(ext => {return ext == file_extension })) {
        window.alert("File has wrong format. Only '.csv' supported");
        return false;
    }
    return true;
}

/**
 * Check one line if it really consists of 'comma separated values'.
 * Triggers alert if not.
 * @param line
 * @param header
 * @param lineNumber
 * @return boolean
 */
function checkSyntax(line : string, header : boolean, lineNumber : number) : boolean {
    let lineSplit : string[] = line.trim().split(",");
    let length : number = lineSplit.length;

    if (header) {
        if (length == 6) return true;
        else {
            window.alert("Syntax error! Wrong number of items in line ".concat(lineNumber.toString()).concat(". Please check your save file. (Example in README)"));
            return false;
        }
    } else {
        if (length == 7) return true;
        else if (line == "") return true;
        else {
            window.alert("Syntax error! Wrong number of items in line ".concat(lineNumber.toString()).concat(". Please check your save file. (Example in README)"));
            return false;
        }
    }
}

export {loadConfig}