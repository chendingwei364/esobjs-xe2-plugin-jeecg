import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoDistanceMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESDistanceMeasurement } from '../../objs';
export declare class CzmESDistanceMeasurement extends CzmESVisualObject<ESDistanceMeasurement> {
    static readonly type: void;
    private _czmDistanceMeasurement;
    get czmDistanceMeasurement(): GeoDistanceMeasurement;
    constructor(sceneObject: ESDistanceMeasurement, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
