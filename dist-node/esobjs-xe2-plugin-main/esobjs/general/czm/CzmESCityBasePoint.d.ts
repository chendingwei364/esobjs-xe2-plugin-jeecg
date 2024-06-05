import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmCityBasePoint, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESCityBasePoint } from '../../general/objs';
export declare class CzmESCityBasePoint extends CzmESObjectWithLocation<ESCityBasePoint> {
    static readonly type: void;
    private _czmCityBasePoint;
    get czmCityBasePoint(): CzmCityBasePoint;
    constructor(sceneObject: ESCityBasePoint, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
