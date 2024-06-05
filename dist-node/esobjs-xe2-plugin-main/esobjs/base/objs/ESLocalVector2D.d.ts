import { ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESLocalVector } from "./ESLocalVector";
export declare abstract class ESLocalVector2D extends ESLocalVector {
    static defaults: {
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("..").ESFlyToParam;
        flyInParam: import("..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    getESProperties(): {
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESLocalVector2D {
    const createDefaultProps: () => {
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("./ESLocalVector").ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("./ESLocalVector").ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("./ESLocalVector").ESFillStyle>;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("..").ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
}
export interface ESLocalVector2D extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESLocalVector2D.createDefaultProps>> {
}
