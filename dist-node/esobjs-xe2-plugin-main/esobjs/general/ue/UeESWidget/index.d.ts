import { ESWidget, ESWidgetInfoType } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESLabel } from "../../../base";
export declare class UeESWidget extends UeESLabel<ESWidget> {
    static readonly type: void;
    static propValFuncs: {
        info: (val: ESWidgetInfoType) => string;
    };
    constructor(sceneObject: ESWidget, ueViewer: UeViewer);
}
