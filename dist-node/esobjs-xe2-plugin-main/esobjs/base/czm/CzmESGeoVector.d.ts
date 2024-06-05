import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESGeoVector } from "../objs";
import { CzmESVisualObject } from "./CzmESVisualObject";
export declare class CzmESGeoVector<T extends ESGeoVector = ESGeoVector> extends CzmESVisualObject<T> {
    constructor(sceneObject: T, czmViewer: CzmViewer);
}
