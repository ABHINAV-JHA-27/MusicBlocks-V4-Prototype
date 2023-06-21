abstract class Brick {
    private _label: string;
    private _color: string;
    private _coords: Record<string, number> = {};

    constructor(name: string, color: string) {
        this._label = name;
        this._color = color;
        this._coords = { x: 0, y: 0 };
    }

    public get name(): string {
        return this._label;
    }

    public set name(name: string) {
        this._label = name;
    }

    public get color(): string {
        return this._color;
    }

    public set color(color: string) {
        this._color = color;
    }

    public get coords(): Record<string, number> {
        return this._coords;
    }

    public set coords(coords: Record<string, number>) {
        this._coords = coords;
    }
}

abstract class BrickArgument extends Brick {
    constructor(name: string, color: string) {
        super(name, color);
    }
}

abstract class BrickInstruction extends Brick {
    constructor(name: string, color: string) {
        super(name, color);
    }
}

abstract class BrickValue extends BrickArgument {
    private _value: string;

    constructor(name: string, color: string, value: string) {
        super(name, color);
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }
}

abstract class BrickExpression extends BrickArgument {
    private _args: Record<string, string> = {};

    constructor(name: string, color: string, args: Record<string, string>) {
        super(name, color);
        this._args = args;
    }

    public get args(): Record<string, string> {
        return this._args;
    }
}

abstract class BrickStatement extends BrickInstruction {
    private _args: Record<string, string> = {};

    constructor(name: string, color: string, args: Record<string, string>) {
        super(name, color);
        this._args = args;
    }

    public get args(): Record<string, string> {
        return this._args;
    }
}

abstract class BrickBlock extends BrickInstruction {
    private _args: Record<string, string> = {};

    constructor(name: string, color: string, args: Record<string, string>) {
        super(name, color);
        this._args = args;
    }

    public get args(): Record<string, string> {
        return this._args;
    }
}

export class ValueBrick extends BrickValue {
    constructor(name: string, color: string, value: string) {
        super(name, color, value);
    }
}

export class ExpressionBrick extends BrickExpression {
    constructor(name: string, color: string, args: Record<string, string>) {
        super(name, color, args);
    }

    public get args(): Record<string, string> {
        return this.args;
    }
}

export class StatementBrick extends BrickStatement {
    constructor(name: string, color: string, args: Record<string, string>) {
        super(name, color, args);
    }

    public get args(): Record<string, string> {
        return this.args;
    }
}

export class BlockBlock extends BrickBlock {
    constructor(name: string, color: string, args: Record<string, string>) {
        super(name, color, args);
    }

    public get args(): Record<string, string> {
        return this.args;
    }
}
