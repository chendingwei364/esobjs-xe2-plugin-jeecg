import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmPolygonFence, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESPolygonFence } from '../../objs';
export declare class CzmESPolygonFence extends CzmESVisualObject<ESPolygonFence> {
    static readonly type: void;
    private _czmPolygonFence;
    get czmPolygonFence(): CzmPolygonFence;
    constructor(sceneObject: ESPolygonFence, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
