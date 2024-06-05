import { ProjectManager } from "xbsj-xe2/dist-node/xe2";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESNavigator, ESScale, ESViewerStatusBar } from '../../esobjs';
export declare class ClassicNavigatorManager extends Destroyable {
    private projectManager;
    private _navigator?;
    get navigator(): ESNavigator | undefined;
    private _scale?;
    get scale(): ESScale | undefined;
    private _statusBar?;
    get statusBar(): ESViewerStatusBar | undefined;
    constructor(projectManager: ProjectManager);
}
