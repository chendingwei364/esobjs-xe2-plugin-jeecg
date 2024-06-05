import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { RayEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESCameraVisibleRange, ESCustomPrimitive } from "../../objs";
export declare class CzmESCameraVisibleRange extends CzmESObjectWithLocation<ESCameraVisibleRange> {
    static readonly type: void;
    private _esCustomPrimitive;
    get esCustomPrimitive(): ESCustomPrimitive;
    private _innerPositionReact;
    private _innerRotationReact;
    private _rayEditing;
    get rayEditing(): RayEditing;
    constructor(sceneObject: ESCameraVisibleRange, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
