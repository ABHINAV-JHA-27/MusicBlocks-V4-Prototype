export interface Swimlane {
    id: string;
    name: string;
    blockGroup: Block[];
}

export interface Block {
    name: string;
    color: string;
    isLastBlock: boolean;
    id: string;
    parent: string;
}
