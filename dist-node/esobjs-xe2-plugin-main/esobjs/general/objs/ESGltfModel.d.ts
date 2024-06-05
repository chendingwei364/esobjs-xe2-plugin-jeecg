import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESObjectWithLocation } from "../../base";
declare type ModelNodeTransformation = {
    translationX: number;
    translationY: number;
    translationZ: number;
    rotationHeading: number;
    rotationPitch: number;
    rotationRoll: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
};
/**
 * https://www.wolai.com/earthsdk/sJisEK7X7WgurSVJK6kXTe
 */
export declare class ESGltfModel extends ESObjectWithLocation {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        url: string;
        maximumScale: number | undefined;
        minimumPixelSize: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base").ESFlyInParam | undefined>;
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
    private _nodeTransformations;
    get nodeTransformations(): {
        [key: string]: ModelNodeTransformation;
    } | undefined;
    set nodeTransformations(value: {
        [key: string]: ModelNodeTransformation;
    } | undefined);
    get nodeTransformationsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[{
        [key: string]: ModelNodeTransformation;
    } | undefined, {
        [key: string]: ModelNodeTransformation;
    } | undefined]>;
    deleteNodeTransformation(nodeName: string): void;
    private _setNodePositionEvent;
    get setNodePositionEvent(): Event<[string, [number, number, number]]>;
    setNodePosition(nodeName: string, nodePosition: [number, number, number]): void;
    private _setNodeRotationEvent;
    get setNodeRotationEvent(): Event<[string, [number, number, number]]>;
    setNodeRotation(nodeName: string, nodeRotation: [number, number, number]): void;
    private _setNodeScaleEvent;
    get setNodeScaleEvent(): Event<[string, [number, number, number]]>;
    setNodeScale(nodeName: string, nodeScale: [number, number, number]): void;
    getNodePosition(nodeName: string): [number, number, number] | undefined;
    getNodeRotation(nodeName: string): [number, number, number] | undefined;
    getNodeScale(nodeName: string): [number, number, number] | undefined;
    private _printDebugInfoEvent;
    get printDebugInfoEvent(): Event<[]>;
    printDebugInfo(): void;
    static defaults: {
        url: string;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../../base").ESFlyToParam;
        flyInParam: import("../../base").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getESProperties(): {
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESGltfModel {
    const createDefaultProps: () => {
        url: string;
        maximumScale: number | undefined;
        minimumPixelSize: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../base").ESFlyInParam | undefined>;
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
export interface ESGltfModel extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESGltfModel.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESGltfModel.createDefaultProps> & {
    type: string;
}>;
export {};
