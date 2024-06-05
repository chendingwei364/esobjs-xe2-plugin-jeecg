import { ESExcavate } from "../../objs";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoPolygon } from "../UeESGeoPolygon";
export declare class UeESExcavate extends UeESGeoPolygon<ESExcavate> {
    static readonly type: void;
    constructor(sceneObject: ESExcavate, ueViewer: UeViewer);
}
