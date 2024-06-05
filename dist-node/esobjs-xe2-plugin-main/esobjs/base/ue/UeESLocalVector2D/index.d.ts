import { ESLocalVector2D } from '../../objs';
import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { UeESLocalVector } from '../UeESLocalVector';
export declare class UeESLocalVector2D<T extends ESLocalVector2D = ESLocalVector2D> extends UeESLocalVector<T> {
    constructor(sceneObject: T, ueViewer: UeViewer);
}
