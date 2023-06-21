import { BrickBlock } from "./brick";

abstract class Swimlane {
    private _name: string;
    private _children: BrickBlock[];

    constructor(name: string) {
        this._name = name;
        this._children = [];
    }

    public addBrick(child: BrickBlock): void {
        this._children.push(child);
    }

    public removeBrick(child: BrickBlock): void {
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

    public get blocks(): BrickBlock[] {
        return this._children;
    }
}

export class SwimlaneContainer extends Swimlane {
    constructor(name: string) {
        super(name);
    }
}
