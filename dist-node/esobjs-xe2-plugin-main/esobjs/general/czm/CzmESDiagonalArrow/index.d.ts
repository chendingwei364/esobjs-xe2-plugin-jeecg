import { CzmESVisualObject } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { SMGeoDiagonalArrow } from 'smplotting-xe2-plugin/dist-node/smplotting-xe2-plugin-main';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESDiagonalArrow } from '../../objs';
export declare class CzmESDiagonalArrow extends CzmESVisualObject<ESDiagonalArrow> {
    static readonly type: void;
    private _czmESDiagonalArrow;
    get czmESDiagonalArrow(): SMGeoDiagonalArrow;
    constructor(sceneObject: ESDiagonalArrow, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
