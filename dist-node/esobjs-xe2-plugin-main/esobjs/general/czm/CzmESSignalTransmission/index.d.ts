import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmSignalTransmission, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESSignalTransmission } from '../../objs';
export declare class CzmESSignalTransmission extends CzmESVisualObject<ESSignalTransmission> {
    static readonly type: void;
    private _czmSignalTransmission;
    get czmSignalTransmission(): CzmSignalTransmission;
    constructor(sceneObject: ESSignalTransmission, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
