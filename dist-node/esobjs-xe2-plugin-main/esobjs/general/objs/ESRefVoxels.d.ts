import { PositionEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESObjectWithLocation } from "../../base/objs";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare type ColorConfigType = {
    v: number;
    c: [number, number, number, number];
};
export declare class ESRefVoxels extends ESObjectWithLocation {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        url: string;
        dimensions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        resolution: number;
        nearestSample: boolean;
        alphaBlend: boolean;
        alpha: number;
        clipMinX: number;
        clipMaxX: number;
        clipMinY: number;
        clipMaxY: number;
        clipMinZ: number;
        clipMaxZ: number;
        colorLegend: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorConfigType[] | undefined>;
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
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static defaults: {
        url: string;
        position: [number, number, number];
        dimensions: [number, number, number];
        resolution: number;
        nearestSample: boolean;
        alphaBlend: boolean;
        alpha: number;
        clipMinX: number;
        clipMaxX: number;
        clipMinY: number;
        clipMaxY: number;
        clipMinZ: number;
        clipMaxZ: number;
        colorLegend: ColorConfigType[];
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    private _positionEditing;
    get positionEditing(): PositionEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESRefVoxels {
    const createDefaultProps: () => {
        url: string;
        dimensions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        resolution: number;
        nearestSample: boolean;
        alphaBlend: boolean;
        alpha: number;
        clipMinX: number;
        clipMaxX: number;
        clipMinY: number;
        clipMaxY: number;
        clipMinZ: number;
        clipMaxZ: number;
        colorLegend: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorConfigType[] | undefined>;
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
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
}
export interface ESRefVoxels extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESRefVoxels.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESRefVoxels.createDefaultProps> & {
    type: string;
}>;
export {};
