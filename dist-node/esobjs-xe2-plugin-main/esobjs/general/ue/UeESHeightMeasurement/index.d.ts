import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoVector } from "../../../base";
import { ESHeightMeasurement } from '../../objs';
export declare class UeESHeightMeasurement extends UeESGeoVector<ESHeightMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESHeightMeasurement, ueViewer: UeViewer);
}
