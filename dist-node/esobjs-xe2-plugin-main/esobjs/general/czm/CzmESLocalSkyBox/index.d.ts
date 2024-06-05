import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { ESLocalSkyBox } from "../../objs";
import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
export declare class CzmESLocalSkyBox extends CzmESObjectWithLocation<ESLocalSkyBox> {
    static readonly type: void;
    constructor(sceneObject: ESLocalSkyBox, czmViewer: CzmViewer);
    ChangeAutoFollow(): void;
    flyTo(duration: number | undefined, id: number): boolean;
}
