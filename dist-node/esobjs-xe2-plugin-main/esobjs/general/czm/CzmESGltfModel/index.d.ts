import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmModelPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGltfModel } from '../../objs';
export declare class CzmESGltfModel<T extends ESGltfModel = ESGltfModel> extends CzmESObjectWithLocation<T> {
    static readonly type: void;
    private _model;
    get model(): CzmModelPrimitive;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
