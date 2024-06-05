import { UeViewer } from '../../../base';
import { UeESGeoPolygon } from '../UeESGeoPolygon';
import { ESPolygonWithHole } from '../../objs';
export declare class UeESPolygonPrimitive extends UeESGeoPolygon<ESPolygonWithHole> {
    static readonly type: void;
    constructor(sceneObject: ESPolygonWithHole, ueViewer: UeViewer);
}
