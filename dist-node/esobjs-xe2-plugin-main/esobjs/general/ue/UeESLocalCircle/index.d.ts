import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESLocalVector2D } from "../../../base";
import { ESLocalCircle } from '../../objs';
export declare class UeESLocalCircle extends UeESLocalVector2D<ESLocalCircle> {
    static readonly type: void;
    constructor(sceneObject: ESLocalCircle, ueViewer: UeViewer);
}
