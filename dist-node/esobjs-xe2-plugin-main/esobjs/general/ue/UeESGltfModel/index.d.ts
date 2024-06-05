import { ESGltfModel } from '../../objs';
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { UeESObjectWithLocation } from "../../../base";
export declare class UeESGltfModel<T extends ESGltfModel = ESGltfModel> extends UeESObjectWithLocation<T> {
    static forceUeUpdateProps: string[];
    static propValFuncs: {
        url: (val: string) => string;
    };
    static readonly type: void;
    constructor(sceneObject: T, ueViewer: UeViewer);
}
