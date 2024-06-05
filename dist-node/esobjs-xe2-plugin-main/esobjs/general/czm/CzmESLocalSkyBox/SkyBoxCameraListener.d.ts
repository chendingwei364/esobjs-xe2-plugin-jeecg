import { SkyBoxComponent } from './SkyBoxComponent';
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESLocalSkyBox } from "../../objs";
import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
export declare class SkyBoxCameraListener extends Destroyable {
    constructor(sceneObject: ESLocalSkyBox, czmViewer: CzmViewer, SkyBoxComponents: SkyBoxComponent[]);
}
