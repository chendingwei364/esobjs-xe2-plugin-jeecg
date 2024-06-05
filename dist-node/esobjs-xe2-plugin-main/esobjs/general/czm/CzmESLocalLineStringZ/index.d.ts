import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoPolyline } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESLocalLineStringZ } from '../../objs';
export declare class CzmESLocalLineStringZ extends CzmESObjectWithLocation<ESLocalLineStringZ> {
    static readonly type: void;
    private _geoPolyline;
    get geoPolyline(): GeoPolyline;
    constructor(sceneObject: ESLocalLineStringZ, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
