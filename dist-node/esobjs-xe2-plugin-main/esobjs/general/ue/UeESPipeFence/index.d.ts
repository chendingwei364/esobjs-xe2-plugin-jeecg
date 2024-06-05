import { ESPipeFence } from '../../objs';
import { UeViewer } from '../../../base';
import { UeESGeoVector } from '../../../base';
export declare class UeESPipeFence extends UeESGeoVector<ESPipeFence> {
    static readonly type: void;
    constructor(sceneObject: ESPipeFence, ueViewer: UeViewer);
}
