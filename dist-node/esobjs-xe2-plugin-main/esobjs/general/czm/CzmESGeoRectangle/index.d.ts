import { CzmESGeoVector } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoRectangle } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoRectangle } from '../../objs';
export declare class CzmESGeoRectangle<T extends ESGeoRectangle = ESGeoRectangle> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _czmGeoESRectangle;
    get czmGeoESRectangle(): GeoRectangle;
    private _geoPolyline;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
