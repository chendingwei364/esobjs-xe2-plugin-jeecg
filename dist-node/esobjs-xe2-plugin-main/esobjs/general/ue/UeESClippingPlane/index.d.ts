import { ESClippingPlane } from '../../objs';
import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { UeESObjectWithLocation } from '../../../base';
export declare class UeESClippingPlane extends UeESObjectWithLocation<ESClippingPlane> {
    static readonly type: void;
    constructor(sceneObject: ESClippingPlane, ueViewer: UeViewer);
}
