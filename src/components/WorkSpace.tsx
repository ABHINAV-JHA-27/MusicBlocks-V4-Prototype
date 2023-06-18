import { useEffect, useState } from "react";
import { Workspace } from "../lib/workspace";
import Swimlane from "./Swimlane";

const WorkSpace = () => {
    const [workspace, setWorkspace] = useState(
        new Workspace("First WorkSpace")
    );
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        setTrigger(false); // Reset the trigger
    }, [workspace.swimlanes]);

    return (
        <div className="flex flex-col w-[100%] min-h-[100vh]">
            <div className="flex w-full p-5 gap-x-5">
                {workspace.name}
                <button
                    onClick={() => {
                        workspace.addSwimlane("new Swimlane");
                        setTrigger(true);
                    }}
                >
                    Add Swimlane
                </button>
            </div>
            <div className="flex w-[100%] h-[100%] space-x-2 p-3">
                {trigger &&
                    workspace.swimlanes.map((swimlane, ind) => {
                        return (
                            <Swimlane
                                workspace={workspace}
                                swimlane={swimlane}
                                index={ind}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default WorkSpace;
