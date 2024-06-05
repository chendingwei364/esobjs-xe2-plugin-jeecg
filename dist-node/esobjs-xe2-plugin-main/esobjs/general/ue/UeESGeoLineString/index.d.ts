import { ESGeoLineString } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoVector } from '../../../base';
export declare class UeESGeoLineString<T extends ESGeoLineString = ESGeoLineString> extends UeESGeoVector<T> {
    static readonly type: void;
    constructor(sceneObject: T, ueViewer: UeViewer);
}
