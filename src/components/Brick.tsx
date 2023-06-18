import { NoteBlock } from "../lib/brickNode";

const Brick = () => {
    const context = new NoteBlock();
    // console.log(context.render());

    // return <>{context.render()}</>;
    return (
        <div className="flex rounded h-[100px] w-[250px] shadow mb-2 bg-[#96DED1] items-center justify-center m-5">
            {context.name}
        </div>
    );
};

export default Brick;
