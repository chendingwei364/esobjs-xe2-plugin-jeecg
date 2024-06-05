import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { ESSurfaceAreaMeasurement } from '../../objs';
import { UeESGeoPolygon } from "../UeESGeoPolygon";
/**
 * 未实现
 */
export declare class UeESSurfaceAreaMeasurement extends UeESGeoPolygon<ESSurfaceAreaMeasurement> {
    static readonly type: void;
    constructor(sceneObject: ESSurfaceAreaMeasurement, ueViewer: UeViewer);
}
