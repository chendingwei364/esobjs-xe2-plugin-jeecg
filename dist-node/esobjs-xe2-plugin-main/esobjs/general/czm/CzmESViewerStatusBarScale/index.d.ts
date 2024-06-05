import { CustomDiv } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESViewerStatusBarScale } from '../../objs';
export declare class CzmESViewerStatusBarScale extends CzmObject<ESViewerStatusBarScale> {
    static readonly type: void;
    private _customDiv;
    get customDiv(): CustomDiv<{
        destroy(): undefined;
    }>;
    constructor(sceneObject: ESViewerStatusBarScale, czmViewer: CzmViewer);
}
