import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESCameraView } from "../ESCameraView";
import { ESCameraViewCollection } from "./index";
export declare type ViewInfo = {
    viewDistance?: number | undefined;
    duration?: number | undefined;
    position: [number, number, number];
    rotation?: [number, number, number] | undefined;
    thumbnail?: string | undefined;
    name?: string | undefined;
};
export declare class ViewWrapper extends Destroyable {
    private _view;
    get view(): ESCameraView;
    get viewInfo(): ViewInfo;
    constructor(sceneObject: ESCameraViewCollection, viewInfo?: ViewInfo);
}
