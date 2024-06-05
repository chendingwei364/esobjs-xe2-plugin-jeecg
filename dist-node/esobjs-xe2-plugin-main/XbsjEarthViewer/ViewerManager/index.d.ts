import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { XbsjEarthViewer } from "..";
import { CzmViewerInstance } from "./CzmViewerInstance";
import { UeViewerInstance } from "./UeViewerInstance";
export declare type ViewerType = 'CZM' | 'UE';
export declare class ViewerManager extends Destroyable {
    private _xbsjEarthViewer;
    private _czmViewer;
    get czmViewer(): CzmViewer;
    private _czmViewerInstance;
    get czmViewerInstance(): CzmViewerInstance;
    private _ueViewer;
    get ueViewer(): UeViewer;
    private _ueViewerInstance;
    get ueViewerInstance(): UeViewerInstance;
    private _position;
    private _rotation;
    private _viewType;
    get viewerType(): ViewerType;
    get viewerTypeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewerType, ViewerType]>;
    set viewerType(value: ViewerType);
    changeUeShow(flag: boolean, uri: string, signallingServerId: string, ueToUeFlag?: boolean): Promise<void>;
    constructor(_xbsjEarthViewer: XbsjEarthViewer);
}
