export interface Swimlane {
    name: string;
    blockGroup?: BlockType[];
}

export interface BlockType {
    name: string;
    color: string;
    isLastBlock: boolean;
    id: number;
    parent: string;
}
