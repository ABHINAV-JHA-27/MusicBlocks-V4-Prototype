import { useState } from "react";
import Brick from "./components/Brick";
import WorkSpace from "./components/WorkSpace";

function App() {
    const [brickType, setBrickType] = useState("");
    const [brickLabel, setBrickLabel] = useState("");
    const [showBrick, setShowBrick] = useState(false);
    const [arg1, setArg1] = useState("");
    const [arg2, setArg2] = useState("");
    const handleRedraw = () => {
        setShowBrick(true);
    };
    return (
        <div className="flex w-[100%] bg-[#f5f5f5]">
            {/* <WorkSpace /> */}
            <div className="flex flex-col gap-y-5 m-5">
                <input
                    type="text"
                    placeholder="Label"
                    value={brickLabel}
                    onChange={(e) => {
                        setShowBrick(false);
                        setBrickLabel(e.target.value);
                    }}
                    className="p-1 border-2 border-gray-300 rounded-md"
                />
                <select
                    name="Brick Type"
                    id="brickType"
                    className="p-1 border-2 border-gray-300 rounded-md"
                    value={brickType}
                    onChange={(e) => {
                        setShowBrick(false);
                        setBrickType(e.target.value);
                    }}
                >
                    <option value="Value">Value</option>
                    <option value="Expression">Expression</option>
                    <option value="Statement">Statement</option>
                    <option value="Block">Block</option>
                </select>
                {brickType !== "Value" && brickLabel && (
                    <div className="flex gap-x-2">
                        <input
                            type="text"
                            placeholder="Argument 1"
                            value={arg1}
                            onChange={(e) => {
                                setShowBrick(false);
                                setArg1(e.target.value);
                            }}
                            className="p-1 border-2 border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Argument 2"
                            value={arg2}
                            onChange={(e) => {
                                setShowBrick(false);
                                setArg2(e.target.value);
                            }}
                            className="p-1 border-2 border-gray-300 rounded-md"
                        />
                    </div>
                )}
                <button
                    onClick={handleRedraw}
                    className="p-1 bg-[#4753f5] rounded-[10px] text-white"
                >
                    Re Draw
                </button>
            </div>
            {showBrick && (
                <Brick
                    label={brickLabel}
                    type={
                        brickType as
                            | "Block"
                            | "Expression"
                            | "Statement"
                            | "Value"
                    }
                    args={{ arg1, arg2 }}
                />
            )}
        </div>
    );
}

export default App;
