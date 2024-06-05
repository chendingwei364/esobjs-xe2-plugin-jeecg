import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoDivSwitchPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESUEWidget } from '../../objs';
export declare class CzmESUEWidget extends CzmESObjectWithLocation<ESUEWidget> {
    static readonly type: void;
    private _geoDivSwitchPoi;
    get geoDivSwitchPoi(): GeoDivSwitchPoi;
    constructor(sceneObject: ESUEWidget, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
