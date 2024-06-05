import { UeESLocalVector2D } from './../../../base/ue/UeESLocalVector2D/index';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { ESLocalRectangle } from "../../objs";
export declare class UeESLocalRectangle extends UeESLocalVector2D<ESLocalRectangle> {
    static readonly type: void;
    constructor(sceneObject: ESLocalRectangle, ueViewer: UeViewer);
}
