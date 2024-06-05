import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class CzmESLocalCircleEditing extends Destroyable {
    private _positionReactParam;
    private _innerPositionReact;
    get innerPositionReact(): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    constructor(_positionReactParam: ReactParamsType<[number, number, number] | undefined>);
}
