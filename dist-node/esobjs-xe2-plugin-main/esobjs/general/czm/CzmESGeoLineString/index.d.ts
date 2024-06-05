import { CzmESGeoVector } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoPolyline } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoLineString } from '../../objs';
export declare class CzmESGeoLineString<T extends ESGeoLineString = ESGeoLineString> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _geoPolyline;
    get geoPolyline(): GeoPolyline;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
