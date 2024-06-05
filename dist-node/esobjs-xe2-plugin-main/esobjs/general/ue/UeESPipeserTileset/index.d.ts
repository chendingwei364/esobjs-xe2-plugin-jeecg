import { UeViewer } from '../../../base';
import { UeES3DTileset } from '../UeES3DTileset';
import { ESPipeserTileset } from '../../objs';
export declare class UeESPipeserTileset extends UeES3DTileset<ESPipeserTileset> {
    static readonly type: void;
    constructor(sceneObject: ESPipeserTileset, ueViewer: UeViewer);
}
