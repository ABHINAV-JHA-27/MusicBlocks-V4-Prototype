import { Swimlane } from "../old/types/index";
import { proxy } from "valtio";

const store = proxy({
    swimlanes: [] as Swimlane[],
});

export default store;
