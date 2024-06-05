import { CzmESGeoVector } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoAreaMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESAreaMeasurement } from '../../objs';
export declare class CzmESAreaMeasurement<T extends ESAreaMeasurement = ESAreaMeasurement> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _czmAreaMeasurement;
    get czmAreaMeasurement(): GeoAreaMeasurement;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
