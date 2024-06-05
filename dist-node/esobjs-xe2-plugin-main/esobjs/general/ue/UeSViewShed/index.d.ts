import { ESViewShed } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESViewShed extends UeESObjectWithLocation<ESViewShed> {
    static readonly type: void;
    constructor(sceneObject: ESViewShed, ueViewer: UeViewer);
}
