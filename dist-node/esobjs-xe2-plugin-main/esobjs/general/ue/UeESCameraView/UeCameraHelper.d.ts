import { GeoAxis, GeoPoint } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESCameraView, ESGltfModel } from '../../objs';
import { UeViewer } from "../../../base";
export declare class UeCameraHelper extends Destroyable {
    private _model;
    get model(): ESGltfModel;
    private _geoPoint;
    get geoPoint(): GeoPoint;
    private _geoAxis;
    get geoAxis(): GeoAxis;
    constructor(sceneObject: ESCameraView, ueViewer: UeViewer);
}
