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
    const handleDrag = (e, _block) => {
        e.dataTransfer.setData("block", JSON.stringify(_block));
        if (parent == "swimlane") {
            const img = document.getElementById(`block-${id}-${parent}`);
            const clone = img.cloneNode(true);
            clone.style.position = "absolute";
            clone.style.top = "-100vh";
            document.body.appendChild(clone);
            e.dataTransfer.setDragImage(clone, 0, 0);
            handleRemove(id);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className={blockClass}
            id={`block-${id}-${parent}`}
            style={{ background: color }}
            draggable
            onDragOver={handleDragOver}
            onDragStart={(e) =>
                handleDrag(e, {
                    name,
                    color,
                    isLastBlock,
                    id,
                    parent,
                })
            }
        >
            {name}
            {showDelete ? (
                <div>
                    <button onClick={handleRemove}>Delete</button>
                </div>
            ) : null}
        </div>
    );
}

export default Block;
