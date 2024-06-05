import { GeoCustomDivPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESWidget } from '../../objs';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
export declare class Widget2D extends Destroyable {
    private _sceneObject;
    private _czmViewer;
    private _InfoBackGround;
    private _InfoItemRowBackGround;
    widgetInfo: HTMLElement;
    private _geoCustomDivPoi;
    get geoCustomDivPoi(): GeoCustomDivPoi<{
        destroy(): undefined;
    }>;
    InfoBackGround: any;
    InfoItemRowBackGround: any;
    sceneObject: ESWidget;
    constructor(_sceneObject: ESWidget, _czmViewer: CzmViewer, _InfoBackGround: any, _InfoItemRowBackGround: any);
    flyTo: (duration: number | undefined, id: number) => void;
    private createInstanceClass;
}
