import { CzmSignalTransmission, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESPath } from '../../objs';
import { CzmESGeoLineString } from '../CzmESGeoLineString';
export declare class CzmESPath<T extends ESPath = ESPath> extends CzmESGeoLineString<T> {
    static readonly type: void;
    private _signal;
    get signal(): CzmSignalTransmission;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
