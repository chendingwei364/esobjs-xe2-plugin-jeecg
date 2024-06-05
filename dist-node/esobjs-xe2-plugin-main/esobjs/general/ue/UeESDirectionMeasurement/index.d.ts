import { ESDirectionMeasurement } from "../../objs";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoVector } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
export declare class UeESDirectionMeasurement extends UeESGeoVector<ESDirectionMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESDirectionMeasurement, ueViewer: UeViewer);
}
