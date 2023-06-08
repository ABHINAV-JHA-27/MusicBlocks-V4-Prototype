import Block from "./Blocks";
import Blocks from "../Data/Blocks";

function Palette(props) {
    return (
        <div className="bg-[rgba(8,24,168,0.5)] p-5 h-[60vh] m-2 rounded-[10px]">
            Palette
            <div className="flex-col space-y-2 mt-2 mb-2 h-[50vh] overflow-y-auto p-2">
                {Blocks.map((block, ind) => {
                    return (
                        <Block
                            key={ind + "#69%"}
                            name={block.name}
                            parent="palette"
                            color={block.color}
                            isLastBlock={block.isLastBlock}
                            id={ind}
                            showDelete={false}
                            handleRemove={() => {}}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Palette;
