import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmCameraVideo, CzmViewer, CzmTexture } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESVideoFusion } from "../../objs";
export declare class CzmESVideoFusion extends CzmESObjectWithLocation<ESVideoFusion> {
    static readonly type: void;
    private _czmCameraVideo;
    get czmCameraVideo(): CzmCameraVideo;
    private _czmTexture;
    get czmTexture(): CzmTexture;
    constructor(sceneObject: ESVideoFusion, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
