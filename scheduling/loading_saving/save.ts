import * as FileSaver from "file-saver";
import {Process} from "../processor";

/**
 * Saves current configuration to .csv file.
 * @param cpuAlgorithm
 * @param preEmption
 * @param quantum
 * @param memAlgorithm
 * @param memSize
 * @param resAlgorithm
 * @param processList
 * @param memoryAllowed
 * @param resourceAllowed
 */
function saveConfig(cpuAlgorithm : string, preEmption : string, quantum : string, memAlgorithm : string,
                    memSize : string, resAlgorithm : string, processList : Process[],
                    memoryAllowed : boolean, resourceAllowed: boolean){

    let saveFile : string[] = createSaveFile(cpuAlgorithm, preEmption, quantum, memAlgorithm, memSize, resAlgorithm,
                                                processList, memoryAllowed, resourceAllowed);

    let blob = new Blob(saveFile, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "scheduling_config.csv");
}

/**
 * Parses current configuration to string.
 * @param cpuAlgorithm
 * @param preEmption
 * @param quantum
 * @param memAlgorithm
 * @param memSize
 * @param resAlgorithm
 * @param processList
 * @param memoryAllowed
 * @param resourceAllowed
 */
function createSaveFile(cpuAlgorithm : string, preEmption : string, quantum : string, memAlgorithm : string,
                        memSize : string, resAlgorithm : string, processList : Process[],
                        memoryAllowed : boolean, resourceAllowed: boolean) : string[] {

    let save : string[] = [];
    let cpu_algorithm : string;
    let cpu_pre_emption : string;
    let cpu_quantum : string;
    let memory_algorithm : string;
    let memory_size : string;
    let resource_algorithm : string;

    switch (cpuAlgorithm) {
        case "First in, First out":
            cpu_algorithm = "Fifo";
            cpu_pre_emption = "0";
            cpu_quantum = "1";
            break;
        case "Last in, First out":
            cpu_algorithm = "Lifo";
            cpu_pre_emption = "0";
            cpu_quantum = "1";
            break;
        case "Round Robin":
            cpu_algorithm = "RR";
            cpu_pre_emption = "0";
            cpu_quantum = quantum;
            break;
        case "Priority":
            cpu_algorithm = "Priority";
            cpu_pre_emption = preEmption;
            cpu_quantum = "1";
            break;
        case "Shortest Job Next":
            cpu_algorithm = "SJN";
            cpu_pre_emption = "0";
            cpu_quantum = "1";
            break;
        case "Shortest Remaining Time Next":
            cpu_algorithm = "SRTN";
            cpu_pre_emption = "0";
            cpu_quantum = "1";
            break;
        case "Highest Response Ratio Next":
            cpu_algorithm = "HRRN";
            cpu_pre_emption = "0";
            cpu_quantum = "1";
            break;
    }

    if (!memoryAllowed) {
        memory_algorithm = "0";
        memory_size = "1024"
    } else {
        memory_algorithm = memAlgorithm;
        memory_size = memSize;
    }

    if (!resourceAllowed){
        resource_algorithm = "0";
    } else {
        if (resAlgorithm == "First in, First out") resource_algorithm = "Fifo";
        else resource_algorithm = resAlgorithm;
    }

    let head : string = cpu_algorithm + "," +
                        cpu_pre_emption + "," +
                        cpu_quantum + "," +
                        memory_algorithm + "," +
                        memory_size + "," +
                        resource_algorithm + "\n";
    save.push(head);

    for (let i=0; i < processList.length; i++) {
        let process : Process = processList[i];
        let process_name : string = process.getName();
        let process_priority : string = process.getPriority().toString();
        let process_arrival : string = process.getArrival().toString();
        let process_length : string = process.getLength().toString();
        let process_memory : string = process.getMemoryUsage().toString();
        
        let ex_res_time : string = "0";
        let ex_res_duration : string = "0";
        let ex_res_timeDuration : number = 0;
        let additionalEvents : any[] = process.events;
        for (let j=0;  j < additionalEvents.length; j++) {
            let e : any = additionalEvents[j];
            if (e.kind == "exclusiveRes"){
                ex_res_time = e.time;
            } else if (e.kind == "freeExRes"){
                ex_res_timeDuration = e.time;
            }
        }
        ex_res_duration = (ex_res_timeDuration - parseInt(ex_res_time)).toString();

        let processString = process_name + "," +
                            process_priority + "," +
                            process_arrival + "," +
                            process_length + "," +
                            process_memory + "," +
                            ex_res_time + "," +
                            ex_res_duration + "\n";

        save.push(processString);
    }
    return save;
}

export {saveConfig}