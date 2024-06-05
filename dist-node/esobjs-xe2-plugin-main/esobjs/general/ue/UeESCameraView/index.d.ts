import { ESCameraView } from '../../objs';
import { UeViewer } from '../../../base';
import { UeESObjectWithLocation } from '../../../base';
export declare class UeESCameraView extends UeESObjectWithLocation<ESCameraView> {
    static readonly type: void;
    constructor(sceneObject: ESCameraView, ueViewer: UeViewer);
}
