import { Swimlane } from "../lib/swimlane";

abstract class Workspace {
    private _name: string;
    private _swimlanes: Swimlane[];

    constructor(name: string) {
        this._name = name;
        this._swimlanes = [];
    }

    public addSwimlane(SwimlaneName: string): void {
        const swimlane = new Swimlane(SwimlaneName);
        this._swimlanes.push(swimlane);
    }

    public removeSwimlane(swimlane: Swimlane): void {
        const index = this._swimlanes.indexOf(swimlane);
        if (index !== -1) {
            this._swimlanes.splice(index, 1);
        }
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public get swimlanes(): Swimlane[] {
        return this._swimlanes;
    }
}

export class WorkspaceContainer extends Workspace {
    constructor(name: string) {
        super(name);
        console.log("WorkspaceContainer created");
    }
}
