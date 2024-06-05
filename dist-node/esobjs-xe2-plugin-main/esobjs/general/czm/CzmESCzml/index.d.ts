import { ESCzml } from '../../objs';
import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
export declare class CzmESCzml extends CzmObject<ESCzml> {
    static readonly type: void;
    constructor(sceneObject: ESCzml, czmViewer: CzmViewer);
}
