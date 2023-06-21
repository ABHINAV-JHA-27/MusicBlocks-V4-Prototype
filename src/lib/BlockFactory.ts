import {
    BlockBlock,
    ExpressionBrick,
    StatementBrick,
    ValueBrick,
} from "../core/brick";

type BrickType = "Block" | "Expression" | "Statement" | "Value";
type BrickKind = "Block" | "Expression" | "Statement" | "Value";

export class BlockFactory {
    private static _type: BrickType;
    private static _kind: BrickKind;
    private _args: Record<string, string> = {};

    constructor(
        type: BrickType,
        kind: BrickKind,
        args: Record<string, string>
    ) {
        BlockFactory._type = type;
        BlockFactory._kind = kind;
        this._args = args;
    }

    public get type(): BrickType {
        return BlockFactory._type;
    }

    public get kind(): BrickKind {
        return BlockFactory._kind;
    }

    public createBlock(label: string) {
        switch (BlockFactory._type) {
            case "Block":
                return new BlockBlock(label, "#C70039", this._args);
            case "Expression":
                return new ExpressionBrick(label, "#DAF7A6", this._args);
            case "Statement":
                return new StatementBrick(label, "#FFC300", this._args);
            case "Value":
                return new ValueBrick(label, "#FF5733", "0");

            default:
                throw new Error("Unknown block type");
        }
    }
}
