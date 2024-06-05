import { ESPolygonFlattenedPlane } from "../../objs";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoPolygon } from "../UeESGeoPolygon";
export declare class UeESPolygonFlattenedPlane extends UeESGeoPolygon<ESPolygonFlattenedPlane> {
    static readonly type: void;
    constructor(sceneObject: ESPolygonFlattenedPlane, ueViewer: UeViewer);
}
