import { ESGeoPolygon } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESGeoVector } from '../../../base';
export declare class UeESGeoPolygon<T extends ESGeoPolygon = ESGeoPolygon> extends UeESGeoVector<T> {
    static readonly type: void;
    constructor(sceneObject: T, ueViewer: UeViewer);
}
