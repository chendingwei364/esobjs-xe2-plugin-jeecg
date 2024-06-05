import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESVisualObject } from '../../../base';
import { ES3DTileset } from '../../objs';
export declare class UeES3DTileset<T extends ES3DTileset = ES3DTileset> extends UeESVisualObject<T> {
    static readonly type: void;
    constructor(sceneObject: T, ueViewer: UeViewer);
}
