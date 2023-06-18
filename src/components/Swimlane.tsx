import { SwimlaneContainer } from "../core/swimlane";
import { WorkspaceContainer } from "../core/workspace";
import Brick from "./Brick";

interface SwimlaneProps {
    index: number;
    workspace: WorkspaceContainer;
    swimlane: SwimlaneContainer;
}

const Swimlane = (props: SwimlaneProps) => {
    return (
        <div className="flex-1 flex-col h-[90vh] bg-slate-400/10 rounded-[10px] space-y-8 p-3">
            <Brick />
        </div>
    );
};

export default Swimlane;
