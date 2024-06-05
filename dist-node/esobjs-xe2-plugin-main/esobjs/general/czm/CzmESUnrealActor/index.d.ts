import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoPoint } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESUnrealActor } from '../../objs';
export declare class CzmESUnrealActor extends CzmESObjectWithLocation<ESUnrealActor> {
    static readonly type: void;
    private _geoPoint;
    get geoPoint(): GeoPoint;
    constructor(sceneObject: ESUnrealActor, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
