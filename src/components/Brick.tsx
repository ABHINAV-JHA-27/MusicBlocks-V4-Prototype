import { BlockFactory } from "../lib/BlockFactory";

type BlockType = "Block" | "Expression" | "Statement" | "Value";
interface BlockProps {
    label: string;
    type: BlockType;
    args?: { arg1: string; arg2: string };
}

const Brick = (props: BlockProps) => {
    const context = new BlockFactory(
        props.type,
        props.type,
        props?.args as { arg1: string; arg2: string }
    ).createBlock(props.label);

    console.log(context);

    return (
        <div
            className="flex rounded h-[100px] w-[250px] shadow mb-2 items-center justify-center m-5"
            style={{ backgroundColor: context.color }}
        >
            <p>{context.name}</p>
            {/* <p>{props.type == "Value" ? context.value : context.args}</p> */}
        </div>
    );
};

export default Brick;
