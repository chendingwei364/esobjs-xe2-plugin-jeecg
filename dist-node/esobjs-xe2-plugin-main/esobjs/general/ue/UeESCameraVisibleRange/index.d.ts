import { ESCameraVisibleRange } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESCameraVisibleRange extends UeESObjectWithLocation<ESCameraVisibleRange> {
    static readonly type: void;
    constructor(sceneObject: ESCameraVisibleRange, ueViewer: UeViewer);
}
