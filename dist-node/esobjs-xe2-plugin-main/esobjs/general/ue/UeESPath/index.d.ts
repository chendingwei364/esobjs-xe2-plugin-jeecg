import { ESPath } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoVector } from '../../../base';
export declare class UeESPath<T extends ESPath = ESPath> extends UeESGeoVector<T> {
    static readonly type: void;
    constructor(sceneObject: T, ueViewer: UeViewer);
}
