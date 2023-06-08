import { useState } from "react";
import SwimLanes from "./SwimLanes.tsx";

function Canvas() {
    const [swimLanes, SetSwimLanes] = useState([]);
    const handleRemoveSwimlane = (ind) => {
        SetSwimLanes((prevData) => {
            const newData = [...prevData];
            newData.splice(ind, 1);
            return newData;
        });
    };
    const handleAddSwimlane = () => {
        const l = swimLanes.length;
        SetSwimLanes((prev) => [...prev, { name: "Swimlane", id: l + 1 }]);
    };
    return (
        <div className="flex flex-col w-[100%] h-[100%]">
            <div className="flex w-[100%] justify-end p-3">
                <button onClick={handleAddSwimlane} className="mr-2">
                    Add Swimlane
                </button>
            </div>
            <div className="flex w-[100%] h-[100%] space-x-2 p-3">
                {swimLanes.map((swimlane, ind) => {
                    return (
                        <SwimLanes
                            name={swimlane.name}
                            id={swimlane.id}
                            handleRemoveSwimlane={() =>
                                handleRemoveSwimlane(ind)
                            }
                            key={ind}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Canvas;
