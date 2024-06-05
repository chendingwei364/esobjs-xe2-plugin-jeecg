import { ESPolygonFence } from '../../';
import { UeViewer } from '../../../base';
import { UeESGeoVector } from '../../../base';
export declare class UeESPolygonFence extends UeESGeoVector<ESPolygonFence> {
    static readonly type: void;
    constructor(sceneObject: ESPolygonFence, ueViewer: UeViewer);
}
