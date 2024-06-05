import { ESDistanceMeasurement } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoVector } from "../../../base";
export declare class UeESDistanceMeasurement extends UeESGeoVector<ESDistanceMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESDistanceMeasurement, ueViewer: UeViewer);
}
