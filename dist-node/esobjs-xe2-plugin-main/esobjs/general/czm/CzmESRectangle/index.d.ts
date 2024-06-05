import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoRectangle } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESRectangle } from '../../objs';
export declare class CzmESRectangle extends CzmESVisualObject<ESRectangle> {
    static readonly type: void;
    private _czmESRectangle;
    get czmESRectangle(): GeoRectangle;
    constructor(sceneObject: ESRectangle, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
