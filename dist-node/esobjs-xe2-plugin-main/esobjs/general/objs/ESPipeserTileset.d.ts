import { PartialWithUndefinedReactivePropsToNativeProps, Event, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ES3DTileset } from "./ES3DTileset";
export declare class ESPipeserTileset extends ES3DTileset {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
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
        url: string;
        actorTag: string;
        materialMode: "normal" | "technology";
        highlight: boolean;
        maximumScreenSpaceError: number;
        highlightID: number;
        highlightColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        offset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        czmImageBasedLightingFactor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        czmLuminanceAtZenith: number;
        czmMaximumMemoryUsage: number;
        czmClassificationType: string;
        czmStyleJson: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        editing: boolean;
        czmBackFaceCulling: boolean;
        czmDebugShowBoundingVolume: boolean;
        czmDebugShowContentBoundingVolume: boolean;
        czmskipLevelOfDetail: boolean;
        clippingPlaneEnabled: boolean;
        unionClippingRegions: boolean;
        clippingPlaneEdgeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        clippingPlaneEdgeWidth: number;
        colorMode: string;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static description: {
        colorMode: [string, string][];
    };
    private _highlightFeatureEvent;
    get highlightFeatureEvent(): Event<[id: string]>;
    highlightFeature(id: string): void;
    private _highlightFeatureAndFlyToEvent;
    get highlightFeatureAndFlyToEvent(): Event<[id: string, duration: number]>;
    highlightFeatureAndFlyTo(id: string, duration: number): void;
    private _setLayerVisibleEvent;
    get setLayerVisibleEvent(): Event<[layerJson: string]>;
    setLayerVisible(layerJson: string): void;
    private _setLayerColorEvent;
    get setLayerColorEvent(): Event<[layerJson: string]>;
    setLayerColor(layerJson: string): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESPipeserTileset {
    const createDefaultProps: () => {
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
        url: string;
        actorTag: string;
        materialMode: "normal" | "technology";
        highlight: boolean;
        maximumScreenSpaceError: number;
        highlightID: number;
        highlightColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        offset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        czmImageBasedLightingFactor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        czmLuminanceAtZenith: number;
        czmMaximumMemoryUsage: number;
        czmClassificationType: string;
        czmStyleJson: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        editing: boolean;
        czmBackFaceCulling: boolean;
        czmDebugShowBoundingVolume: boolean;
        czmDebugShowContentBoundingVolume: boolean;
        czmskipLevelOfDetail: boolean;
        clippingPlaneEnabled: boolean;
        unionClippingRegions: boolean;
        clippingPlaneEdgeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        clippingPlaneEdgeWidth: number;
        colorMode: string;
    };
}
export interface ESPipeserTileset extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESPipeserTileset.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESPipeserTileset.createDefaultProps> & {
    type: string;
}>;
export {};
