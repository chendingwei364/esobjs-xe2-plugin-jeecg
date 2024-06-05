import { CzmESGeoVector } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoCoplanarPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoPolygon } from '../../objs';
export declare class CzmESGeoPolygon<T extends ESGeoPolygon = ESGeoPolygon> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _geoPolygon;
    get geoPolygon(): GeoCoplanarPolygon;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
