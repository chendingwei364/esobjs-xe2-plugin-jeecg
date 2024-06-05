import { CustomDiv } from "xbsj-xe2/dist-node/xe2-base-objects";
import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESNavigator } from '../../objs';
export declare class CzmESNavigator extends CzmObject<ESNavigator> {
    static readonly type: void;
    private _customDiv;
    get customDiv(): CustomDiv<{
        destroy(): undefined;
    }>;
    constructor(sceneObject: ESNavigator, czmViewer: CzmViewer);
}
