import { BrickNode } from "../core/brick";

export class NoteBlock extends BrickNode {
    constructor() {
        super("note", {
            duration: "23",
        });
    }

    public render(): HTMLElement {
        const div = document.createElement("div");
        div.setAttribute(
            "class",
            "flex rounded h-[100px] w-[250px] shadow mb-2 bg-[#96DED1] items-center justify-center m-5"
        );
        div.innerHTML = this.name;
        return div;
    }
}
