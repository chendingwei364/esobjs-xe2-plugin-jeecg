import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { XbsjEarthViewer } from '..';
export declare class UeViewerInstance extends Destroyable {
    private _xbsjEarthViewer;
    private _ueViewer;
    constructor(_xbsjEarthViewer: XbsjEarthViewer, _ueViewer: UeViewer);
}
