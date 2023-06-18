import { BlockType } from "../types";

interface BlockProps {
    name: string;
    color: string;
    isLastBlock: boolean;
    id: number;
    parent: string;
    showDelete: boolean;
    handleRemove: (id: number) => void;
}

function Block({
    name,
    color,
    isLastBlock,
    id,
    parent,
    showDelete,
    handleRemove,
}: BlockProps) {
    const blockClass = `rounded min-h-[100px] w-[250px] p-4 shadow mb-2`;

    const handleDrag = (
        block: BlockType
    ): React.DragEventHandler<HTMLDivElement> => {
        return (e) => {
            e.dataTransfer?.setData("block", JSON.stringify(block));
            if (parent === "swimlane") {
                const img = document.getElementById(
                    `block-${id}-${parent}`
                ) as HTMLImageElement;
                const clone = img.cloneNode(true) as HTMLImageElement;
                clone.style.position = "absolute";
                clone.style.top = "-100vh";
                document.body.appendChild(clone);
                e.dataTransfer?.setDragImage(clone, 0, 0);
                handleRemove(id);
            }
        };
    };

    const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
    };

    const handleOnRemove: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        handleRemove(id);
    };

    return (
        <div
            className={blockClass}
            id={`block-${id}-${parent}`}
            style={{ background: color }}
            draggable
            onDragOver={handleDragOver}
            onDragStart={handleDrag({
                name,
                color,
                isLastBlock,
                id,
                parent,
            } as BlockType)}
        >
            {name}
            {showDelete ? (
                <div>
                    <button onClick={handleOnRemove}>Delete</button>
                </div>
            ) : null}
        </div>
    );
}

export default Block;
