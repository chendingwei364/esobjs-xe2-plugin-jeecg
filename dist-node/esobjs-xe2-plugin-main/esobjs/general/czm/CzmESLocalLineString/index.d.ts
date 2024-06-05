import { ESLocalLineString, ESLocalLineStringZ } from '../../objs';
import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
export declare class CzmESLocalLineString extends CzmESObjectWithLocation<ESLocalLineString> {
    static readonly type: void;
    private _eSLocalLineStringZ;
    get eSLocalLineStringZ(): ESLocalLineStringZ;
    constructor(sceneObject: ESLocalLineString, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
