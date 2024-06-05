import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmModelPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESCar } from '../../objs';
export declare class CzmESCar extends CzmESObjectWithLocation<ESCar> {
    static readonly type: void;
    private _czmModelPrimitive;
    get czmModelPrimitive(): CzmModelPrimitive;
    constructor(sceneObject: ESCar, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
