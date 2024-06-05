import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { ESObjectWithLocation } from '../../objs';
import { UeESVisualObject } from '../UeESVisualObject';
export declare class UeESObjectWithLocation<T extends ESObjectWithLocation = ESObjectWithLocation> extends UeESVisualObject<T> {
    static forceUeUpdateProps: string[];
    constructor(sceneObject: T, ueViewer: UeViewer);
}
