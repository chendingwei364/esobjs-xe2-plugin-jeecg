import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoHeightMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESHeightMeasurement } from '../../objs';
export declare class CzmESHeightMeasurement extends CzmESVisualObject<ESHeightMeasurement> {
    static readonly type: void;
    private _geoHeightMeasurement;
    get czmHeightMeasurement(): GeoHeightMeasurement;
    constructor(sceneObject: ESHeightMeasurement, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
