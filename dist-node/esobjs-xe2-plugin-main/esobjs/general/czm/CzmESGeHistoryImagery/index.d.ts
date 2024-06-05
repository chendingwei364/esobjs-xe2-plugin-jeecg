import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeHistoryImagery } from '../../objs';
export declare class CzmESGeHistoryImagery extends CzmESVisualObject<ESGeHistoryImagery> {
    static readonly type: void;
    constructor(sceneObject: ESGeHistoryImagery, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
