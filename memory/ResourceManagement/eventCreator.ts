/**
 * Creates default events. 1. initial memory allocation, 2. memory de-allocation.
 * @param arrival Arrival time of the parent process.
 * @param memoryUsage Memory resources needed by the process.
 * @param duration Runtime of the parent process.
 * @return any[]
 */
function createDefaultEvents(arrival: number, memoryUsage: number, duration: number): any[]{
    let events: any[] = [];
    const uuidv1 = require('uuid/v1');

    let initialMemEvent: any = {
        time: 0,
        kind: "initialMemory",
        status: "open",
        data: [memoryUsage],
        id: uuidv1()
    };

    let closingMemEvent: any = {
        time: duration,
        kind: "closingMemory",
        status: "open",
        data: [memoryUsage],
        id: uuidv1()
    };

    events.push(initialMemEvent, closingMemEvent);
    return events;
}

/**
 * Create event to allocate and deallocate the exclusive resource.
 * @param time After how many steps, in the parent process, should the event be fired.
 * @param duration How long is the resource allocated.
 * @return any[]
 */
function createExclusiveResEvent(time: number, duration: number) {
    const uuidv1 = require('uuid/v1');

    let exclusiveResEvent: any = {
        time: time,
        kind: "exclusiveRes",
        status: "open",
        data: undefined,
        id: uuidv1()
    };

    let freeExResEvent: any = {
        time: time + duration,
        kind: "freeExRes",
        status: "open",
        data: undefined,
        id: uuidv1()
    };

    return [exclusiveResEvent, freeExResEvent];
}

export {createDefaultEvents, createExclusiveResEvent}