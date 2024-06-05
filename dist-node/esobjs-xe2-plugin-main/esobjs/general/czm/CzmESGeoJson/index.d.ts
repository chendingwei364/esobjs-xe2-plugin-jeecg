import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoJson } from '../../objs';
export declare class CzmESGeoJson extends CzmObject<ESGeoJson> {
    static readonly type: void;
    constructor(sceneObject: ESGeoJson, czmViewer: CzmViewer);
}
