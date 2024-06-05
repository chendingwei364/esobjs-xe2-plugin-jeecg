import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmBoxClippingPlanes, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESBoxClippingPlanes } from '../../objs';
export declare class CzmESBoxClippingPlanes extends CzmESObjectWithLocation<ESBoxClippingPlanes> {
    static readonly type: void;
    private _czmBoxClippingPlanes;
    get czmBoxClippingPlanes(): CzmBoxClippingPlanes;
    constructor(sceneObject: ESBoxClippingPlanes, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
