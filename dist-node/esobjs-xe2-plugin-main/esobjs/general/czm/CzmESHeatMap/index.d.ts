import { CzmESVisualObject } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmHeatMap, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESHeatMap } from '../../objs';
export declare class CzmESHeatMap extends CzmESVisualObject<ESHeatMap> {
    static readonly type: void;
    private _czmHeatMap;
    get czmHeatMap(): CzmHeatMap;
    constructor(sceneObject: ESHeatMap, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
