import { CzmViewShed } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESViewShed } from '../../objs';
import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
export declare class CzmESViewShed extends CzmESObjectWithLocation<ESViewShed> {
    static readonly type: void;
    private _czmViewShed;
    get czmViewShed(): CzmViewShed;
    constructor(sceneObject: ESViewShed, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
