import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESLocalVector2D } from "../../../base";
import { ESLocalPolygon } from '../../objs';
export declare class UeESLocalPolygon extends UeESLocalVector2D<ESLocalPolygon> {
    static readonly type: void;
    constructor(sceneObject: ESLocalPolygon, ueViewer: UeViewer);
}
