import { CzmCustomPrimitive, CzmTexture, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { CzmESObjectWithLocation } from "../../../base";
import { ESDataMesh } from "../../objs";
export declare type CzmESDataMeshBuffers = {
    indexBuffer: Uint16Array;
    vertexBuffer: Float32Array;
    propBuffers: Float32Array[];
};
export declare class CzmESDataMesh extends CzmESObjectWithLocation<ESDataMesh> {
    static readonly type: void;
    private _czmCustomPrimitive;
    get czmCustomPrimitive(): CzmCustomPrimitive;
    private _czmTexture;
    get czmTexture(): CzmTexture;
    constructor(sceneObject: ESDataMesh, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
