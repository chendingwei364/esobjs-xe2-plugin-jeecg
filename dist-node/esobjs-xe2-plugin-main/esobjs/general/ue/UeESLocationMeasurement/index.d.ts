import { ESLocationMeasurement } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESLocationMeasurement extends UeESObjectWithLocation<ESLocationMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESLocationMeasurement, ueViewer: UeViewer);
}
