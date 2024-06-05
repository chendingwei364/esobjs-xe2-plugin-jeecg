import { ESImageLabel } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESLabel } from '../../..';
export declare class UeESImageLabel<T extends ESImageLabel = ESImageLabel> extends UeESLabel<T> {
    static readonly type: void;
    constructor(sceneObject: T, ueViewer: UeViewer);
}
