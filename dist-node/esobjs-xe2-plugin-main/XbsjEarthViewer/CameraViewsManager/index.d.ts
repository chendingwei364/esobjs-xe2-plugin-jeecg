import { ProjectManager } from "xbsj-xe2/dist-node/xe2";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESCameraView, ESCameraViewCollection } from "../../esobjs";
export declare class CameraViewsManager extends Destroyable {
    private _projectManager;
    private _cnView;
    get cnView(): ESCameraView;
    private _globalView;
    get globalView(): ESCameraView;
    private _eSCameraViewCollection;
    get eSCameraViewCollection(): ESCameraViewCollection;
    constructor(_projectManager: ProjectManager);
    add(): void;
    delete(): void;
}
