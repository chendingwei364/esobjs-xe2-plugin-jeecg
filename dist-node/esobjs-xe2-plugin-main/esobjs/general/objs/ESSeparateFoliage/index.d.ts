import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESVisualObject } from "../../../base/objs";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
export declare type ESTreeTypeSep = {
    name: string;
    meshPath: string;
};
export declare type ESTreeParam = {
    id: string;
    treeTypeId: number;
    location: [number, number, number];
    scale: [number, number, number];
};
export declare type ToScaleType = {
    [key: string]: [[number, number, number], [number, number, number], [number, number, number], number];
};
export declare type ToCutDownScaleType = {
    [key: string]: [[number, number, number], number];
};
export declare class ESSeparateFoliage extends ESVisualObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        treeTypes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESTreeTypeSep[] | undefined>;
        stumpId: number;
        intervalTime: number;
        switchIntervalTime: number;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyInParam | undefined>;
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
    addTreesCallFunc(ueViewer: UeViewer, trees: ESTreeParam[]): Promise<{
        error: string | undefined;
    } | undefined>;
    updateTreeParamsCallFunc(ueViewer: UeViewer, trees: ESTreeParam[]): Promise<{
        error: string | undefined;
    } | undefined>;
    cutDownTreesCallFunc(ueViewer: UeViewer, TreeIds: ToCutDownScaleType[], TimeLength: number): Promise<{
        error: string | undefined;
    } | undefined>;
    removeAllTreesCallFunc(ueViewer: UeViewer): Promise<{
        error: string | undefined;
    } | undefined>;
    growthSimulationCallFunc(ueViewer: UeViewer, ToParams: ToScaleType[], TimeLength: number, SwitchTime: number): Promise<{
        error: string | undefined;
    } | undefined>;
    getIdByComponentNameAndHitItem(viewer: UeViewer, ComponentName: string, HitItem: number): Promise<{
        re: {
            TreeId: string;
        };
        error: string | undefined;
    } | undefined>;
    private _addTreesEvent;
    get addTreesEvent(): Event<[TreeParams: ESTreeParam[]]>;
    addTrees(TreeParams: ESTreeParam[]): void;
    private _removeAllTreesEvent;
    get removeAllTreesEvent(): Event<[]>;
    removeAllTrees(): void;
    private _updateTreeParamsEvent;
    get updateTreeParamsEvent(): Event<[TreeParams: ESTreeParam[]]>;
    updateTreeParams(TreeParams: ESTreeParam[]): void;
    private _cutDownTreesEvent;
    get cutDownTreesEvent(): Event<[TreeId: ToCutDownScaleType[], TimeLength: number]>;
    cutDownTrees(TreeId: ToCutDownScaleType[], TimeLength: number): void;
    private _growthSimulationEvent;
    get growthSimulationEvent(): Event<[ToParams: ToScaleType[], TimeLength: number, SwitchTime: number]>;
    growthSimulation(ToParams: ToScaleType[], TimeLength: number, SwitchTime: number): void;
    static defaults: {
        treeTypes: ESTreeTypeSep[];
        stumpId: number;
        intervalTime: number;
        switchIntervalTime: number;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../../..").ESFlyToParam;
        flyInParam: import("../../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESSeparateFoliage {
    const createDefaultProps: () => {
        treeTypes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESTreeTypeSep[] | undefined>;
        stumpId: number;
        intervalTime: number;
        switchIntervalTime: number;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ESSeparateFoliage extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESSeparateFoliage.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESSeparateFoliage.createDefaultProps> & {
    type: string;
}>;
export {};
