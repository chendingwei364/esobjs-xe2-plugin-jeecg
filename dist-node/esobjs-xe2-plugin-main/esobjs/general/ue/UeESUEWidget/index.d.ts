import { ESUEWidget, ESUEWidgetInfoType } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESLabel } from "../../../base";
export declare class UeESUEWidget extends UeESLabel<ESUEWidget> {
    static readonly type: void;
    static propValFuncs: {
        info: (val: ESUEWidgetInfoType) => string;
    };
    constructor(sceneObject: ESUEWidget, ueViewer: UeViewer);
}
