import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
import { ESAlarm } from '../../objs';
export declare class UeESAlarm extends UeESObjectWithLocation<ESAlarm> {
    static readonly type: void;
    constructor(sceneObject: ESAlarm, ueViewer: UeViewer);
}
