import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoDivTextPoi, GeoImageModel, ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESTextLabel } from '../../objs';
export declare class TextLabel2D extends Destroyable {
    private _textLabel;
    get textLabel(): GeoDivTextPoi;
    flyTo: (duration: number | undefined, id: number) => void;
    constructor(sceneObject: ESTextLabel, czmViewer: CzmViewer);
}
export declare class TextLabel3D extends Destroyable {
    private _textLabel;
    get textLabel(): GeoDivTextPoi;
    private _imageModel;
    get imageModel(): GeoImageModel;
    private _url;
    get url(): string;
    private _defaultSize;
    get defaultSize(): [number, number];
    get defaultSizeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number], [number, number]]>;
    private _size;
    get size(): [number, number];
    get sizeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number], [number, number]]>;
    flyTo: (duration: number | undefined, id: number) => void;
    constructor(sceneObject: ESTextLabel, czmViewer: CzmViewer);
}
export declare class CzmESTextLabel extends CzmESObjectWithLocation<ESTextLabel> {
    static readonly type: void;
    private _event;
    get event(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    private _resetting;
    get resetting(): ObjResettingWithEvent<TextLabel2D | TextLabel3D, import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent>;
    constructor(sceneObject: ESTextLabel, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
