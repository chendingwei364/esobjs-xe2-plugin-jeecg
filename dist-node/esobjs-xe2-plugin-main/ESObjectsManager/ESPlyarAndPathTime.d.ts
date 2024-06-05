import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESObjectsManager } from "./ESObjectsManager";
export declare class ESPlyarAndPathTime extends Destroyable {
    private _esObjectsManager;
    private _esPathListening;
    private _esPlayerListening;
    constructor(_esObjectsManager: ESObjectsManager);
}
