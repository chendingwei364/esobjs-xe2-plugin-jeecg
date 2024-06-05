import { CustomDiv } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESViewerStatusBar } from '../../objs';
export declare class CzmESViewerStatusBar extends CzmObject<ESViewerStatusBar> {
    static readonly type: void;
    private _customDiv;
    get customDiv(): CustomDiv<{
        destroy(): undefined;
    }>;
    constructor(sceneObject: ESViewerStatusBar, czmViewer: CzmViewer);
}
