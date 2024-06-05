import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmModelPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESHuman } from '../../objs';
export declare class CzmESHuman extends CzmESObjectWithLocation<ESHuman> {
    static readonly type: void;
    private _czmModelPrimitive;
    get czmModelPrimitive(): CzmModelPrimitive;
    constructor(sceneObject: ESHuman, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
