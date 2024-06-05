import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESLocalPolygon, ESLocalRectangle } from '../../objs';
export declare class CzmESLocalRectangle extends CzmESObjectWithLocation<ESLocalRectangle> {
    static readonly type: void;
    private _czmLocalRectangle;
    get czmLocalRectangle(): ESLocalPolygon;
    constructor(sceneObject: ESLocalRectangle, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
