import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESLocalVector } from "../objs";
import { CzmESObjectWithLocation } from "./CzmESObjectWithLocation";
export declare class CzmESLocalVector<T extends ESLocalVector = ESLocalVector> extends CzmESObjectWithLocation<T> {
    constructor(sceneObject: T, czmViewer: CzmViewer);
}
