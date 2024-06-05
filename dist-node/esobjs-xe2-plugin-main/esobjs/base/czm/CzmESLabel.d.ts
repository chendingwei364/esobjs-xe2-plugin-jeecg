import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESLabel } from "../objs";
import { CzmESObjectWithLocation } from "./CzmESObjectWithLocation";
export declare class CzmESLabel<T extends ESLabel = ESLabel> extends CzmESObjectWithLocation<T> {
    constructor(sceneObject: T, czmViewer: CzmViewer);
}
