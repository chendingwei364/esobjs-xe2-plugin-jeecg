import { Czm3DTiles, CzmViewer, CzmFlattenedPlane, CzmClippingPlanes } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ES3DTileset } from '../../objs';
import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
export declare class CzmES3DTileset extends CzmESVisualObject<ES3DTileset> {
    static readonly type: void;
    private _czm3DTiles;
    get czm3DTiles(): Czm3DTiles;
    private _clippingPlanes;
    get clippingPlanes(): CzmClippingPlanes;
    private _flattenedPlane;
    get flattenedPlane(): CzmFlattenedPlane;
    constructor(sceneObject: ES3DTileset, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
