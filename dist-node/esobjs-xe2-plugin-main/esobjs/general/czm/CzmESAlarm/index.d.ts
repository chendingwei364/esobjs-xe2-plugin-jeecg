import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESAlarm } from "../../objs";
import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
export declare class CzmESAlarm extends CzmESObjectWithLocation<ESAlarm> {
    static readonly type: void;
    constructor(sceneObject: ESAlarm, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
