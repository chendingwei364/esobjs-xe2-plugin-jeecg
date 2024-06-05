import { ESCar } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESCar extends UeESObjectWithLocation<ESCar> {
    static readonly type: void;
    constructor(sceneObject: ESCar, ueViewer: UeViewer);
}
