import { ESHuman } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESHuman extends UeESObjectWithLocation<ESHuman> {
    static readonly type: void;
    constructor(sceneObject: ESHuman, ueViewer: UeViewer);
}
