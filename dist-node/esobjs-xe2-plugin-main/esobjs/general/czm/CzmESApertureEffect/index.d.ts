import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmCustomPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESApertureEffect } from "../../objs";
export declare class CzmESApertureEffect extends CzmESObjectWithLocation<ESApertureEffect> {
    static readonly type: void;
    private _czmCustomPrimitive;
    get czmCustomPrimitive(): CzmCustomPrimitive;
    constructor(sceneObject: ESApertureEffect, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
