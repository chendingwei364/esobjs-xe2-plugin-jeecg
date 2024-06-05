import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoCircle } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESLocalCircle } from '../../objs';
export declare class CzmESLocalCircle extends CzmESObjectWithLocation<ESLocalCircle> {
    static readonly type: void;
    private _geoCircle;
    get geoCircle(): GeoCircle;
    private _innerPositionReact;
    constructor(sceneObject: ESLocalCircle, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
