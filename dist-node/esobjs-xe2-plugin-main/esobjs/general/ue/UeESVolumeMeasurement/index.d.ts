import { ESVolumeMeasurement } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoPolygon } from "../UeESGeoPolygon";
export declare class UeESVolumeMeasurement extends UeESGeoPolygon<ESVolumeMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESVolumeMeasurement, ueViewer: UeViewer);
}
