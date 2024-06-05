import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESLocalPolygon, ESLocalPolygonZ } from '../../objs';
export declare class CzmESLocalPolygon extends CzmESObjectWithLocation<ESLocalPolygon> {
    static readonly type: void;
    private _eSLocalPolygon;
    get eSLocalPolygon(): ESLocalPolygonZ;
    constructor(sceneObject: ESLocalPolygon, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
