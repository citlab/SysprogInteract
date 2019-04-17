import {Process} from "./processor";

class ExclusiveResource{
    public name : String;
    public occupied : Boolean = false;
    public occupiedBy : String = "";

    constructor(name: String){
        this.name = name;
    }

    public isAllocated(): Boolean {
        return this.occupied;
    }

    public allocatedBy(): String {
        return this.occupiedBy;
    }

    public allocate(p : Process) {
        this.occupied = true;
        this.occupiedBy = p.getName();
    }

    public deallocate(){
        this.occupied = false;
        this.occupiedBy = "";
    }
}

export {ExclusiveResource}