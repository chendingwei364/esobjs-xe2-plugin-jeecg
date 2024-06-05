import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmRoad, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESRoad } from '../../objs';
export declare class CzmESRoad extends CzmESVisualObject<ESRoad> {
    static readonly type: void;
    private _czmESRoad;
    get czmESRoad(): CzmRoad;
    constructor(sceneObject: ESRoad, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
