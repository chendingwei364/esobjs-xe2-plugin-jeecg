import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { XbsjEarthViewer } from '..';
export declare class CzmViewerInstance extends Destroyable {
    private _xbsjEarthViewer;
    private _czmViewer;
    constructor(_xbsjEarthViewer: XbsjEarthViewer, _czmViewer: CzmViewer);
}
