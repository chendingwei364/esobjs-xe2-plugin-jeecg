import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESGeoVector } from "../../base/objs";
/**
 * @deprecated 目前已废弃
 */
export declare class ESGeoCircle extends ESGeoVector {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        fill: boolean;
        ground: boolean;
        outline: boolean;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        outlineWidth: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        pointEditing: boolean;
        depth: number;
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base/objs").ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base/objs").ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base/objs").ESFillStyle>;
        points: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
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
    constructor(id?: string);
    static defaults: {
        pointEditing: boolean;
        ground: boolean;
        outline: boolean;
        outlineColor: [number, number, number, number];
        outlineWidth: number;
        fill: boolean;
        color: [number, number, number, number];
        depth: number;
        points: [number, number, number][];
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESGeoCircle {
    const createDefaultProps: () => {
        fill: boolean;
        ground: boolean;
        outline: boolean;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        outlineWidth: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        pointEditing: boolean;
        depth: number;
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base/objs").ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base/objs").ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base/objs").ESFillStyle>;
        points: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
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
export interface ESGeoCircle extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESGeoCircle.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESGeoCircle.createDefaultProps> & {
    type: string;
}>;
export {};