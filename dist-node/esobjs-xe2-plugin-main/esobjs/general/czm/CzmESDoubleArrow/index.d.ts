import { CzmESVisualObject } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { SMGeoDoubleArrow } from 'smplotting-xe2-plugin/dist-node/smplotting-xe2-plugin-main';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESDoubleArrow } from '../../objs';
export declare class CzmESDoubleArrow extends CzmESVisualObject<ESDoubleArrow> {
    static readonly type: void;
    private _czmESDoubleArrow;
    get czmESDoubleArrow(): SMGeoDoubleArrow;
    constructor(sceneObject: ESDoubleArrow, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
