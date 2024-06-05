import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmCustomPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESCustomPrimitive } from "../../objs";
export declare class CzmESCustomPrimitive extends CzmESObjectWithLocation<ESCustomPrimitive> {
    static readonly type: void;
    private _czmCustomPrimitive;
    get czmCustomPrimitive(): CzmCustomPrimitive;
    constructor(sceneObject: ESCustomPrimitive, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
