import { CustomDiv } from "xbsj-xe2/dist-node/xe2-base-objects";
import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESScale } from '../../objs';
export declare class CzmESScale extends CzmObject<ESScale> {
    static readonly type: void;
    private _customDiv;
    get customDiv(): CustomDiv<{
        destroy(): undefined;
    }>;
    constructor(sceneObject: ESScale, czmViewer: CzmViewer);
}
