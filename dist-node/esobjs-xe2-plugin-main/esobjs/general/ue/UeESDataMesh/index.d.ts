import { ESDataMesh } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESDataMesh extends UeESObjectWithLocation<ESDataMesh> {
    static readonly type: void;
    constructor(sceneObject: ESDataMesh, ueViewer: UeViewer);
}
