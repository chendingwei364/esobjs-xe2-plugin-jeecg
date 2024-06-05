import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ProjectManager } from "xbsj-xe2/dist-node/xe2";
import { CzmGlobeMaterial } from "xbsj-xe2/dist-node/xe2-cesium-objects";
export declare class GlobeMaterialManager extends Destroyable {
    private projectManager;
    private _GlobeMaterial;
    get GlobeMaterial(): CzmGlobeMaterial;
    constructor(projectManager: ProjectManager);
}
