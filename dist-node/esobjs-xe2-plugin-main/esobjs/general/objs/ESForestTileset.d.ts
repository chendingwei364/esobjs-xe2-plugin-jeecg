import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESVisualObject } from "../../base/objs";
export declare type Vector2D = [number, number];
export declare type ESTreeType = {
    name: string;
    mesh: string;
    cullingDistance: number;
    scale: number;
};
export declare type ESXiaoBanWidget = {
    class: string;
    pivot: Vector2D;
    space: number;
};
export declare class ESForestTileset extends ESVisualObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        url: string;
        treeTypes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESTreeType[] | undefined>;
        xiaoBanWidget: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESXiaoBanWidget | undefined>;
        youShiSZ: string;
        diLei: string;
        senLinLB: string;
        labelMaterial: string;
        heightOffset: number;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static defaults: {
        url: string;
        treeTypes: ESTreeType[];
        xiaoBanWidgetDefault: {
            class: string;
            pivot: number[];
            space: number;
        };
        youShiSZ: string;
        diLei: string;
        senLinLB: string;
        labelMaterial: string;
        heightOffset: number;
        XiaoBanWidgetSampleValue: string;
        TreeTypeSampleValue: string;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESForestTileset {
    const createDefaultProps: () => {
        url: string;
        treeTypes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESTreeType[] | undefined>;
        xiaoBanWidget: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESXiaoBanWidget | undefined>;
        youShiSZ: string;
        diLei: string;
        senLinLB: string;
        labelMaterial: string;
        heightOffset: number;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ESForestTileset extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESForestTileset.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESForestTileset.createDefaultProps> & {
    type: string;
}>;
export {};
