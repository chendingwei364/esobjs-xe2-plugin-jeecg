import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { ESAreaMeasurement } from '../../objs';
import { UeESGeoPolygon } from "../UeESGeoPolygon";
export declare class UeESAreaMeasurement extends UeESGeoPolygon<ESAreaMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESAreaMeasurement, ueViewer: UeViewer);
}
