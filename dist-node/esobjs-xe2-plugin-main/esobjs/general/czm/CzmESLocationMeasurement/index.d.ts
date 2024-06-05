import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoLocationMeasurement } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESLocationMeasurement } from '../../objs';
import { CzmESEditing } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/utils';
export declare class CzmESLocationMeasurement extends CzmESVisualObject<ESLocationMeasurement> {
    static readonly type: void;
    private _czmLocationMeasurement;
    get czmLocationMeasurement(): GeoLocationMeasurement;
    private _sEditing;
    get sEditing(): CzmESEditing;
    constructor(sceneObject: ESLocationMeasurement, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
