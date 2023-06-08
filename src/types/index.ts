export interface Swimlane {
    id: string;
    name: string;
    blockGroup: BlockType[];
}

export interface BlockType {
    name: string;
    color: string;
    isLastBlock: boolean;
    id: number;
    parent: string;
}
