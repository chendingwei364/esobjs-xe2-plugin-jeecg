import { CzmESGeoVector } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESVolumeMeasurement } from '../../objs';
import { GeoVolumeMeasurement } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmESVolumeMeasurement<T extends ESVolumeMeasurement = ESVolumeMeasurement> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _geoVolumeMeasurement;
    get geoVolumeMeasurement(): GeoVolumeMeasurement;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
