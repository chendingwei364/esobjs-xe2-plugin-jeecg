import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoDivTextPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoDivTextPoi } from '../../objs';
import { CzmESEditing } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/utils';
export declare class CzmESGeoDivTextPoi<T extends ESGeoDivTextPoi = ESGeoDivTextPoi> extends CzmESObjectWithLocation<T> {
    static readonly type: void;
    private _czmDivTextPoi;
    get czmDivTextPoi(): GeoDivTextPoi;
    private _sEditing;
    get sEditing(): CzmESEditing;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
