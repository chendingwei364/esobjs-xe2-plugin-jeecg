import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { ESVisualObject } from '../../objs';
import { UeESSceneObject } from '../UeESSceneObject';
export declare class UeESVisualObject<T extends ESVisualObject = ESVisualObject> extends UeESSceneObject<T> {
    constructor(sceneObject: T, ueViewer: UeViewer);
}
