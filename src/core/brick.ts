abstract class Brick {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }
}

abstract class BrickArgument extends Brick {
    constructor(name: string) {
        super(name);
    }
}

abstract class BrickInstruction extends Brick {}

export abstract class BrickValue extends BrickArgument {}

export abstract class BrickExpression extends BrickArgument {}

export abstract class BrickStatement extends BrickInstruction {}

export abstract class BrickNode extends BrickInstruction {
    private _args: Record<string, string> = {};

    constructor(name: string, args: Record<string, string>) {
        super(name);
        this._args = args;
        console.log("BrickNode created");
    }

    public get args(): Record<string, string> {
        return this._args;
    }
}
