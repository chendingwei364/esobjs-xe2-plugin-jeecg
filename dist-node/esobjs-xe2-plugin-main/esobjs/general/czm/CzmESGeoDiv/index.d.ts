import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { GeoCustomDivPoi } from "xbsj-xe2/dist-node/xe2-base-objects";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoDiv } from '../../objs';
export declare class CzmESGeoDiv extends CzmESObjectWithLocation<ESGeoDiv> {
    static readonly type: void;
    private _geoCustomDivPoi;
    get geoCustomDivPoi(): GeoCustomDivPoi<{
        destroy(): undefined;
    }>;
    constructor(sceneObject: ESGeoDiv, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
