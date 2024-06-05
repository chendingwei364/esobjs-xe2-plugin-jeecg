import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ObjResettingWithEvent } from "xbsj-xe2/dist-node/xe2-utils";
import { ESRefVoxels } from '../../objs';
declare class CzmRefVoxels extends Destroyable {
    constructor(sceneObject: ESRefVoxels, czmESRefVoxels: CzmESRefVoxels, values: [number, number, number, number][]);
}
export declare class CzmESRefVoxels extends CzmESObjectWithLocation<ESRefVoxels> {
    static readonly type: void;
    private _values;
    get values(): [number, number, number, number][] | undefined;
    set values(value: [number, number, number, number][] | undefined);
    get valuesChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number, number, number][] | undefined, [number, number, number, number][] | undefined]>;
    private _recreateEvent;
    get recreateEvent(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    private _resetting;
    get resetting(): ObjResettingWithEvent<CzmRefVoxels, import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent>;
    constructor(sceneObject: ESRefVoxels, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
export {};
