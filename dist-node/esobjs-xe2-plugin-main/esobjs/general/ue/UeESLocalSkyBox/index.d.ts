import { UeESObjectWithLocation } from "../../../base";
import { ESLocalSkyBox } from "../../objs";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
export declare class UeESLocalSkyBox extends UeESObjectWithLocation<ESLocalSkyBox> {
    static readonly type: void;
    constructor(sceneObject: ESLocalSkyBox, ueViewer: UeViewer);
}
