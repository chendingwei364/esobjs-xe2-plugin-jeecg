import { GeoCanvasImagePoi, GeoImageModel } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { CzmESLabel } from '../../../base';
import { ESImageLabel } from '../../objs';
export declare class ImageLabel2D extends Destroyable {
    private _geoCanvasImagePoi;
    get geoCanvasImagePoi(): GeoCanvasImagePoi;
    flyTo: (duration: number | undefined, id: number) => void;
    constructor(sceneObject: ESImageLabel, czmViewer: CzmViewer);
}
export declare class ImageLabel3D extends Destroyable {
    private _imageModel;
    get imageModel(): GeoImageModel;
    flyTo: (duration: number | undefined, id: number) => void;
    constructor(sceneObject: ESImageLabel, czmViewer: CzmViewer, czmESImageLabel: CzmESImageLabel);
}
export declare class CzmESImageLabel<T extends ESImageLabel = ESImageLabel> extends CzmESLabel<T> {
    static readonly type: void;
    private _geoCanvasImagePoi;
    get geoCanvasImagePoi(): GeoCanvasImagePoi;
    private _urlReact;
    get urlReact(): any;
    set urlReact(value: any);
    get urlReactChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string | undefined, string | undefined]>;
    private _event;
    get event(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    private _resetting;
    get resetting(): any;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
