import { ESClassification } from '../../objs';
import { UeViewer } from '../../../base';
import { UeESGeoVector } from '../../../base';
export declare class UeESClassification extends UeESGeoVector<ESClassification> {
    static readonly type: void;
    constructor(sceneObject: ESClassification, ueViewer: UeViewer);
}
