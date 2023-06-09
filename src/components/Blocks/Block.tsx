import BlockFactory from "./BlockFactory";

const Block = () => {
    return (
        <BlockFactory
            label="Stack Clamp"
            type="stackClamp"
            color="#DAF7A6"
            description="A Stack Clamp Block"
        />
    );
};

export default Block;
