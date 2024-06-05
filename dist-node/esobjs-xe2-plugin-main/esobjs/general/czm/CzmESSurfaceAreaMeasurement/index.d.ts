import { CzmESGeoPolygon } from '../CzmESGeoPolygon';
import { CzmSpaceAreaMeasurement, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESSurfaceAreaMeasurement } from '../../objs';
export declare class CzmESSurfaceAreaMeasurement extends CzmESGeoPolygon<ESSurfaceAreaMeasurement> {
    static readonly type: void;
    private _czmAreaMeasurement;
    get czmAreaMeasurement(): CzmSpaceAreaMeasurement;
    constructor(sceneObject: ESSurfaceAreaMeasurement, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
