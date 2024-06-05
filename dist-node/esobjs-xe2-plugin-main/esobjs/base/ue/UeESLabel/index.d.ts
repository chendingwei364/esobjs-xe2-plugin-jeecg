import { ESLabel } from '../../objs';
import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { UeESObjectWithLocation } from '../UeESObjectWithLocation';
export declare class UeESLabel<T extends ESLabel = ESLabel> extends UeESObjectWithLocation<T> {
    constructor(sceneObject: T, ueViewer: UeViewer);
}
