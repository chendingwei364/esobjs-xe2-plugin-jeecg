import { UeObject, UeViewer } from '../../../base';
import { ESUnrealActor } from '../../objs';
export declare class UeESUnrealActor extends UeObject<ESUnrealActor> {
    static readonly type: void;
    constructor(sceneObject: ESUnrealActor, ueViewer: UeViewer);
}
