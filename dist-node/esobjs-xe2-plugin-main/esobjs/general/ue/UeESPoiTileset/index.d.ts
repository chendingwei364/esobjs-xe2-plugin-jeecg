import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESVisualObject } from "../../../base";
import { ESPoiTileset } from '../../objs';
export declare class UeESPoiTileset extends UeESVisualObject<ESPoiTileset> {
    static readonly type: void;
    static forceUeUpdateProps: string[];
    static propValFuncs: {
        url: (val: string) => string;
    };
    constructor(sceneObject: ESPoiTileset, ueViewer: UeViewer);
}
