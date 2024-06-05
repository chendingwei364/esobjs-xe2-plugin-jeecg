import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { View } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESCameraView } from '../../objs';
export declare class CzmESCameraView extends CzmESObjectWithLocation<ESCameraView> {
    static readonly type: void;
    private _view;
    get view(): View;
    constructor(sceneObject: ESCameraView, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
