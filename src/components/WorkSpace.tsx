import Block from "./Blocks/Block";
// import Canvas from "./Canvas";
// import Palette from "./Palette";

const WorkSpace = () => {
    return (
        <div className="flex w-[100%] min-h-[100vh] bg-[#f5f5f5]">
            {/* <Palette />
            <Canvas /> */}
            <Block />
        </div>
    );
};

export default WorkSpace;
