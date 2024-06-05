import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmTexture, CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESCustomPrimitive, ESLocalSkyBox } from "../../objs";
export declare class SkyBoxComponent extends Destroyable {
    private _esCustomPrimitive;
    esCustomPrimitive(): ESCustomPrimitive;
    private _czmTexture;
    czmTexture(): CzmTexture;
    constructor(sceneObject: ESLocalSkyBox, czmViewer: CzmViewer, imagePosition: string, positionMatrix: number[][]);
    changeOpacity(OpacityFactor: number): void;
}
