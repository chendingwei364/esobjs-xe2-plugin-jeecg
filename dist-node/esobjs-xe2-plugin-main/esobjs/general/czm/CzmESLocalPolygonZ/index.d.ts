import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoCoplanarPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESLocalPolygonZ } from '../../objs';
export declare class CzmESLocalPolygonZ extends CzmESObjectWithLocation<ESLocalPolygonZ> {
    static readonly type: void;
    private _geoPolygon;
    get geoPolygon(): GeoCoplanarPolygon;
    constructor(sceneObject: ESLocalPolygonZ, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
