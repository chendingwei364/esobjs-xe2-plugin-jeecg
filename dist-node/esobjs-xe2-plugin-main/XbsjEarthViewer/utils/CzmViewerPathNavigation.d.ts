import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { XbsjEarthViewer } from "..";
import { PathNavigation } from "./PathNavigation";
export declare class CzmViewerPathNavigation extends Destroyable {
    private _pathNavigation;
    get pathNavigation(): PathNavigation;
    constructor(xbsjEarthViewer: XbsjEarthViewer, czmViewer: CzmViewer);
}
