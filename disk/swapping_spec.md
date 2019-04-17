# Swapping

Filename: Swapping.ts

Relevant States:

-   memory enabled
-   disk enabled
-   swapping enabled

Requires Access to

-   Process
-   Memory
-   Disk

| Memory | Disk  | Swapping | Result                                |
| ------ | ----- | -------- | ------------------------------------- |
| false  | false | false    | noop                                  |
| false  | false | true     | noop                                  |
| false  | true  | false    | disk works normal                     |
| false  | true  | true     | disk works normal                     |
| true   | false | false    | memory works normal                   |
| true   | false | true     | memory works normal                   |
| true   | true  | false    | memory and disk: only when both allow |
| true   | true  | true     | special swapping logic                |

```pseudocode
If all true:
- special swapping logic
else:
- if memory do memory
- if disk do disk
```

## Special Swapping logic

### Adding process

Relevant:

-   Process has Memory already - yes or no (A)
-   Memory has Space for Process (B)
-   Disk has Space for Process disk space requirements (C)
-   Swapping possible (D)
-   Process has Memory swapped to Disk (E)
-   Process has Disk already (F)
-   Moving other processes to disk as swapping measure

1.  A and !F is an error state. A process should always have disk if it has memory.
2.  E and !F is an error state. A process cannot be in swapped state if it does not have disk space.
    (Exception: diskUsage == 0)

#### Process not allocated yet (A is false)

##### Process is in Swap (E is true)

We need to restore the process to proceed.
A process that had its memory swapped was once successfully allocated.
F **must** be true in this subsection.

|   B   |   C   |   F   |  Result  |
| :---: | :---: | :---: | :------: |
| false | false | false |  error   |
| false | false | true  |  reject  |
| false | true  | false |  error   |
| false | true  | true  |  reject  |
|       |       |       |          |
| true  | false | false |  error   |
| true  | false | true  |  reject  |
| true  | true  | false |  error   |
| true  | true  | true  | allocate |

```pseudocode
If !F:
- error

If B is true:
- Add Process to Memory
- Remove Swap part

Else:

- Reject Process
```

##### Process is not in Swap (E is false)

|   B   |   C   |   D   |      Result       |
| :---: | :---: | :---: | :---------------: |
| false | false | false |      reject       |
| false | false | true  |      reject       |
| false | true  | false |      reject       |
| false | true  | true  | swap and allocate |
|       |       |       |                   |
| true  | false | false |      reject       |
| true  | false | true  |      reject       |
| true  | true  | false |     allocate      |
| true  | true  | true  |     allocate      |

Summary of the table:

```pseudocode
if !B:

- if C and D: Swap and allocate
- else: reject

Else:

- if C: Allocate
- else: reject
```

#### Process is allocated (A (and F) is true)

```pseudocode
If !F:

- error

If E:

- Delete Swap from Disk
```

Otherwise do not do anything.

### Removing process

Remove Process from Memory and Disk (only diskUsage, swapped memory should not exist)

### Additional constraints

Process cannot work without memory if memory is enabled.
Processes should be rejected if memory is not available and swapping cannot make enough space.
Animations should be properly displayed.

Open question: How do we determine processes to be moved to disk?

-   See SwappingStrategy.ts

Table template:

|   B   |   C   |   D   | Result |
| :---: | :---: | :---: | ------ |
| false | false | false |        |
| false | false | true  |        |
| false | true  | false |        |
| false | true  | true  |        |
|       |       |       |        |
| true  | false | false |        |
| true  | false | true  |        |
| true  | true  | false |        |
| true  | true  | true  |        |

## Changes to Swapping

Currently swapping is happening all in one step of the simulation.
The system is to be changed in such a way, that swapping a process costs time.

For this we need to introduce swapping processes into the processor, but not in the user-controlled process list.
We need to make sure the processes are removed from the processor once completed.

The swapping processes should be added in the beginning of the processing queue and be immune to interrupts.
Changes to scheduling algorithms have to be introduced.

Proposed naming scheme for swapping processes:
`SWAPPING-{{PROCESS NAME}}` where `{{PROCESS NAME}}` is the name of the process to be swapped.

We should introduce an function to easily check if a process is a swapping process. `isSwappingProcess(): boolean`

Checklist:

-   [x] add `isSwappingProcess(): boolean` to Process
-   [x] add logic to scheduling algorithms to force swapping processes to be at the beginning of the queue.
-   [?] make swapping processes immune to interrupts // to be tested
-   [x] add way to create swapping process from an existing process
-   [x] add swapping process visually and to the processor but not the user-controlled process list
-   [x] find values for arrival, duration, memoryUsage and diskUsage for swapping processes
-   [x] change swapping.ts to return the processes to be swapped and the status enum
-   [x] adapt swapping.ts to have the new swapping logic
-   [] **TEST NEW CHANGES!!!!**

Idea: Alternative approach to swapping processes:

-   separate list that has to be finished before regular work can proceed.

-   advantage: scheduling algorithms do not have to be adapted in the area of adding new processes
    and adding regular processes would not interfere with the swapping processes.

How the actual swap happens:

-   Swap targets get moved into the processor via the new return type.
-   The swap process check at the beginning in `addProcess` in `swapping.ts` can be used to do the actual swapping.
-   Using the hasMemory field of those swapping processes to indicate if they already got swapped

## New logic

1.  Check if process is a swapping one.
    -   if swap done: return Noop
    -   swap original process to disk
    -   return Noop
2.  Check if process is a restoring one.
    -   if restore done: return Noop
    -   restore original process to memory
    -   return Noop
3.  Check if special swapping logic is applicable
    -   true: hand over to swapping logic
    -   false:
        -   if process.hasMemory
            -   handleAlreadyAllocated
            -   return Noop
        -   if memory do memory
        -   if disk do disk

### Special Swapping Logic

1.  if process.hasMemory
    -   handleAlreadyAllocated
    -   return Noop
2.  Check if process is in swap
3.  if true:
    -   error if process not in regular disk (process got swapped without disk)
    -   if no space in memory:
        -   find swapTargets
        -   if no swapTargets found: return Failure
        -   return swapTargets as swapping ones
    -   else:
        -   return process as restoring one
4.  if false:
    -   if no space in memory:
        -   find swapTargets
        -   if no swapTargets found: return Failure
        -   return swapTargets as swapping ones
    -   else: // normal case, no swap and space for process
        -   if no space on disk:
            -   return Failure
        -   else:
            -   add to memory
            -   add to disk
            -   return success

```pseudocode
function handleAlreadyAllocated(process):
    if disk disabled:
        return
    if process not on disk:
        error: no disk space allocated!!!!
    if process in swap:
        delete process swap
```

#### Idea: Solution for weird animation

Combine simulateNewProcesses, simulateProgress, animateNewProcesses and animateProgress.

Old: simulateNewProcesses -- animateNewProcesses -- simulateProgress -- animateProgress
New: simulateNewProcesses -- simulateProgress -- animateNewProcesses -- animateProgress

Also possible culprit: animateListReorder

Old Cycle:

1.  startSimulationStep
    -   might stop if done
2.  simulateListReorder
3.  animateListReorder
4.  simulateNewProcesses
5.  animateNewProcesses
    -   might go over: simulate/animateRamShortage back to 1
6.  simulateProgress
7.  animateProgress
8.  simulateFinishedProcess
9.  animateFinishedProcess back to 1
