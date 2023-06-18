import { BrickNode } from "./brick";

abstract class Swimlane {
    private _name: string;
    private _children: BrickNode[];

    constructor(name: string) {
        this._name = name;
        this._children = [];
    }

    public addBrick(child: BrickNode): void {
        this._children.push(child);
    }

    public removeBrick(child: BrickNode): void {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
        }
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get blocks(): BrickNode[] {
        return this._children;
    }
}

export class SwimlaneContainer extends Swimlane {
    constructor(name: string) {
        super(name);
        console.log("SwimlaneContainer created");
    }
}
