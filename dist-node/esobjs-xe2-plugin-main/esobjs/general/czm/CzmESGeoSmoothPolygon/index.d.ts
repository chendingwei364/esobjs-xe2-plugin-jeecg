import { GeoSmoothPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoSmoothPolygon } from '../../objs';
export declare class CzmESGeoSmoothPolygon extends CzmESVisualObject<ESGeoSmoothPolygon> {
    static readonly type: void;
    private _geoSmoothPolygon;
    get geoSmoothPolygon(): GeoSmoothPolygon;
    constructor(sceneObject: ESGeoSmoothPolygon, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
