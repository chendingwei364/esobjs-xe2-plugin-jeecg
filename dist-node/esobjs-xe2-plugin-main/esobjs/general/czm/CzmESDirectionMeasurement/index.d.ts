import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoDirectionMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESDirectionMeasurement } from '../../objs';
export declare class CzmESDirectionMeasurement extends CzmESVisualObject<ESDirectionMeasurement> {
    static readonly type: void;
    private _czmDirectionMeasurement;
    get czmDirectionMeasurement(): GeoDirectionMeasurement;
    constructor(sceneObject: ESDirectionMeasurement, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
