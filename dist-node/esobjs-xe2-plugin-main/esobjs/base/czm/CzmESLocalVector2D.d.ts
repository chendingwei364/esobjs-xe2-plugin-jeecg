import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESLocalVector2D } from "../objs";
import { CzmESLocalVector } from "./CzmESLocalVector";
export declare class CzmESLocalVector2D<T extends ESLocalVector2D = ESLocalVector2D> extends CzmESLocalVector<T> {
    constructor(sceneObject: T, czmViewer: CzmViewer);
}
