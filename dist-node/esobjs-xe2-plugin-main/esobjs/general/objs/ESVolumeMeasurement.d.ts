import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESGeoPolygon } from "./ESGeoPolygon";
/**
 * https://www.wolai.com/earthsdk/qwNTqqCTPy5XHw6MYrkkoK
 */
export declare class ESVolumeMeasurement extends ESGeoPolygon {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        planeHeight: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number | undefined>;
        gridWidth: number;
        cutVolume: number;
        fillVolume: number;
        cutAndFillVolume: number;
        progress: number;
        depthTest: boolean;
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESFillStyle>;
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
    private _startEvent;
    get startEvent(): Listener;
    start(): void;
    private _clearEvent;
    get clearEvent(): Listener;
    clear(): void;
    constructor(id?: SceneObjectKey);
    static defaults: {
        fillStyle: import("../..").ESFillStyle;
        filled: boolean;
        stroked: boolean;
        strokeStyle: {
            width: number;
            widthType: string;
            color: number[];
            material: string;
            materialParams: {};
        };
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
export declare namespace ESVolumeMeasurement {
    const createDefaultProps: () => {
        planeHeight: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number | undefined>;
        gridWidth: number;
        cutVolume: number;
        fillVolume: number;
        cutAndFillVolume: number;
        progress: number;
        depthTest: boolean;
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../..").ESFillStyle>;
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
export interface ESVolumeMeasurement extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESVolumeMeasurement.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESVolumeMeasurement.createDefaultProps> & {
    type: string;
}>;
export {};
