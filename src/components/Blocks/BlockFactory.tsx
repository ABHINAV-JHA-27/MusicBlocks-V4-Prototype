interface BlockConfigurationProps {
    type: string;
    label: string;
    description: string;
    color: string;
}

interface BlockProps {
    label: string;
    description: string;
    color: string;
}

const StackClampBlock = ({ label, description, color }: BlockProps) => {
    return (
        <div
            className="rounded h-[100px] w-[250px] p-4 shadow mb-1"
            draggable
            style={{ backgroundColor: color }}
        >
            {label}
            <br />
            {description}
        </div>
    );
};
const FlowClampBlock = ({ label, description, color }: BlockProps) => {
    return (
        <div
            className="rounded h-[100px] w-[250px] p-4 shadow mb-1"
            draggable
            style={{ backgroundColor: color }}
        >
            {label}
            <br />
            {description}
        </div>
    );
};
const NestedArgumentBlock = ({ label, description, color }: BlockProps) => {
    return (
        <div
            className="rounded h-[100px] w-[250px] p-4 shadow mb-1"
            draggable
            style={{ backgroundColor: color }}
        >
            {label}
            <br />
            {description}
        </div>
    );
};
const FlowBlock = ({ label, description, color }: BlockProps) => {
    return (
        <div
            className="rounded h-[100px] w-[250px] p-4 shadow mb-1"
            draggable
            style={{ backgroundColor: color }}
        >
            {label}
            <br />
            {description}
        </div>
    );
};
const ValueBlock = ({ label, description, color }: BlockProps) => {
    return (
        <div
            className="rounded h-[100px] w-[250px] p-4 shadow mb-1"
            draggable
            style={{ backgroundColor: color }}
        >
            {label}
            <br />
            {description}
        </div>
    );
};

const BlockFactory = ({
    type,
    label,
    description,
    color,
}: BlockConfigurationProps) => {
    switch (type) {
        case "stackClamp":
            return (
                <StackClampBlock
                    label={label}
                    color={color}
                    description={description}
                />
            );
        case "flowClamp":
            return (
                <FlowClampBlock
                    label={label}
                    color={color}
                    description={description}
                />
            );
        case "nestedArgument":
            return (
                <NestedArgumentBlock
                    label={label}
                    color={color}
                    description={description}
                />
            );
        case "flow":
            return (
                <FlowBlock
                    label={label}
                    color={color}
                    description={description}
                />
            );
        case "value":
            return (
                <ValueBlock
                    label={label}
                    color={color}
                    description={description}
                />
            );
    }

    // return <BlockComponent />;
};

export default BlockFactory;
