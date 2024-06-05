import { Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { JsonValue, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESObjectWithLocation } from "./ESObjectWithLocation";
export declare type WidthType = "world" | "screen";
export declare type ESPointStyle = {
    size: number;
    sizeType: WidthType;
    color: [number, number, number, number];
    material: string;
    materialParams: JsonValue;
};
export declare type ESStrokeStyle = {
    width: number;
    widthType: WidthType;
    color: [number, number, number, number];
    material: string;
    materialParams: JsonValue;
};
export declare type ESFillStyle = {
    color: [number, number, number, number];
    material: string;
    materialParams: JsonValue;
    ground: boolean;
};
/**
 * https://www.wolai.com/earthsdk/8ZYnmuDDkpCLCGrvtFyuDv
 */
export declare abstract class ESLocalVector extends ESObjectWithLocation {
    getStrokeMaterialParamInfo(viewer: Viewer): Promise<{
        params?: {
            name: string;
            type: string;
            value: number | [number, number, number, number];
        }[] | undefined;
    } | undefined>;
    getFillMaterialParamInfo(viewer: Viewer): Promise<{
        params?: {
            name: string;
            type: string;
            value: number | [number, number, number, number];
        }[] | undefined;
    } | undefined>;
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
    get pointSize(): number;
    set pointSize(value: number);
    get pointSizeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESPointStyle, ESPointStyle]>;
    get pointSizeType(): WidthType;
    set pointSizeType(value: WidthType);
    get pointSizeTypeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESPointStyle, ESPointStyle]>;
    get pointColor(): [number, number, number, number];
    set pointColor(value: [number, number, number, number]);
    get pointColorChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESPointStyle, ESPointStyle]>;
    get pointMaterial(): string;
    set pointMaterial(value: string);
    get pointMaterialChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESPointStyle, ESPointStyle]>;
    get pointMaterialParams(): JsonValue;
    set pointMaterialParams(value: JsonValue);
    get pointMaterialParamsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESPointStyle, ESPointStyle]>;
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get strokeWidthChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESStrokeStyle, ESStrokeStyle]>;
    get strokeWidthType(): WidthType;
    set strokeWidthType(value: WidthType);
    get strokeWidthTypeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESStrokeStyle, ESStrokeStyle]>;
    get strokeColor(): [number, number, number, number];
    set strokeColor(value: [number, number, number, number]);
    get strokeColorChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESStrokeStyle, ESStrokeStyle]>;
    get strokeMaterial(): string;
    set strokeMaterial(value: string);
    get strokeMaterialChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESStrokeStyle, ESStrokeStyle]>;
    get strokeMaterialParams(): JsonValue;
    set strokeMaterialParams(value: JsonValue);
    get strokeMaterialParamsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESStrokeStyle, ESStrokeStyle]>;
    get fillColor(): [number, number, number, number];
    set fillColor(value: [number, number, number, number]);
    get fillColorChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESFillStyle, ESFillStyle]>;
    get fillMaterial(): string;
    set fillMaterial(value: string);
    get fillMaterialChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESFillStyle, ESFillStyle]>;
    get fillMaterialParams(): JsonValue | undefined;
    set fillMaterialParams(value: JsonValue | undefined);
    get fillMaterialParamsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESFillStyle, ESFillStyle]>;
    get fillGround(): boolean;
    set fillGround(value: boolean);
    get fillGroundChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESFillStyle, ESFillStyle]>;
}
export declare namespace ESLocalVector {
    const createDefaultProps: () => {
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESFillStyle>;
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
}
export interface ESLocalVector extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESLocalVector.createDefaultProps>> {
}
