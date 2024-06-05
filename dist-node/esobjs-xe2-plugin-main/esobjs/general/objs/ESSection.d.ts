import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESObjectWithLocation } from "../../base/objs";
declare type CzmClippingPlaneJsonType = {
    normal: [number, number, number];
    distance: number;
};
declare type NativeNumber16Type = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
declare type CzmClippingPlaneCollectionJsonType = {
    planes?: CzmClippingPlaneJsonType[];
    enabled?: boolean;
    modelMatrix?: NativeNumber16Type;
    unionClippingRegions?: boolean;
    edgeColor?: [number, number, number, number];
    edgeWidth?: number;
};
export declare class ESSection extends ESObjectWithLocation {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        pixelSize: number;
        localPosition: number[];
        clippingPlanes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmClippingPlaneCollectionJsonType | undefined>;
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
    constructor(id?: SceneObjectKey);
    static defaults: {
        pixelSize: number;
        clippingPlanes: {
            planes: {
                normal: number[];
                distance: number;
            }[];
            enabled: boolean;
            modelMatrix: number[];
            unionClippingRegions: boolean;
            edgeColor: number[];
            edgeWidth: number;
        };
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESSection {
    const createDefaultProps: () => {
        pixelSize: number;
        localPosition: number[];
        clippingPlanes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmClippingPlaneCollectionJsonType | undefined>;
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
export interface ESSection extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESSection.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESSection.createDefaultProps> & {
    type: string;
}>;
export {};
