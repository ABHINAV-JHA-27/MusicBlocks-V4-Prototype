import { useEffect, useId, useRef, useState } from "react";

import Block from "./Blocks";
function SwimLanes(props) {
    const id = useId();
    const [show, setShow] = useState(true);
    const [blocksData, setBlocksData] = useState([]);
    const blockRefs = useRef([]);

    const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        const val = e.dataTransfer.getData("block");
        const parsedData = JSON.parse(val);
        if (parsedData.parent == "swimlane") {
            //dont duplicate but move to index
            setBlocksData((prevData) => {
                const newData = [...prevData];
                if (newData.length === 0) {
                    newData.push(parsedData);
                } else {
                    newData.splice(targetIndex, 0, parsedData);
                }
                return newData;
            });
        } else if (parsedData.parent == "palette") {
            // just copy from palette
            setBlocksData((prevData) => {
                const newData = [...prevData];
                if (newData.length === 0) {
                    newData.push(parsedData);
                } else {
                    newData.splice(targetIndex, 0, parsedData);
                }
                return newData;
            });
        }
    };
    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
    };
    const handleRemoveBlock = (ind) => {
        setBlocksData((prevData) => {
            const newData = [...prevData];
            newData.splice(ind, 1);
            return newData;
        });
    };
    useEffect(() => {
        blockRefs.current = blockRefs.current.slice(0, blocksData.length);
    }, [blocksData]);

    const calc = (clientY) => {
        return blockRefs.current.reduce((targetIndex, blockRef, index) => {
            const { top, height } = blockRef.getBoundingClientRect();
            const blockCenterY = top + height / 2;

            if (clientY >= blockCenterY) {
                return index + 1;
            }

            return targetIndex;
        }, 0);
    };
    return (
        <>
            {show ? (
                <div
                    className="flex-1 flex-col h-[90vh] bg-slate-400/10 rounded-[10px] space-y-8 p-3"
                    onDrop={(e) => handleDrop(e, calc(e.clientY))}
                    onDragOver={(e) => handleDragOver(e)}
                >
                    <div className="flex justify-between">
                        <div>
                            {props.name} {props.id}
                        </div>
                        <div className="space-x-2">
                            <button onClick={() => setShow(false)}>X</button>
                            <button onClick={props.handleRemoveSwimlane}>
                                D
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%] h-[90%] overflow-auto mb-4">
                        {blocksData.map((block, ind) => {
                            return (
                                <div
                                    ref={(element) =>
                                        (blockRefs.current[ind] = element)
                                    }
                                    key={ind + "#69%"}
                                >
                                    <Block
                                        parent="swimlane"
                                        name={block.name}
                                        color={block.color}
                                        isLastBlock={block.isLastBlock}
                                        parentId={id}
                                        id={ind}
                                        showDelete={true}
                                        handleRemove={() =>
                                            handleRemoveBlock(ind)
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-[100px] h-[90vh] bg-slate-400/10 rounded-[10px] space-y-8 p-3">
                    <button onClick={() => setShow(true)}>O</button>
                </div>
            )}
        </>
    );
}

export default SwimLanes;
