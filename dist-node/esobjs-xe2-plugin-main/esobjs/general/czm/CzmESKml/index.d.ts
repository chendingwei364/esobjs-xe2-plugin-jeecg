import { ESKml } from '../../objs';
import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
export declare class CzmESKml extends CzmObject<ESKml> {
    static readonly type: void;
    constructor(sceneObject: ESKml, czmViewer: CzmViewer);
}
