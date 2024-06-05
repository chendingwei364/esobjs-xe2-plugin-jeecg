import { Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { JsonValue, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESFillStyle, ESPointStyle, ESStrokeStyle, WidthType } from "./ESLocalVector";
import { ESVisualObject } from "./ESVisualObject";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
/**
 * https://www.wolai.com/earthsdk/u1Uc89HHrBjiGGB67BdFLc
 */
export declare abstract class ESGeoVector extends ESVisualObject {
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
    private _editing;
    get editing(): boolean;
    get editingChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    set editing(value: boolean);
    /**
     * 获取面积
     * https://www.wolai.com/earthsdk/u1Uc89HHrBjiGGB67BdFLc#jsFJqTTB9ELkSoFzoxSvCh
     * @returns
     */
    getArea(): number | undefined;
    getDistance(): number | undefined;
    getPerimeter(): number | undefined;
    getIntersect(position: [number, number, number][]): [number, number, number][][] | undefined;
    getUnion(position: [number, number, number][]): [number, number, number][][] | undefined;
    /**
     *
     * @param positions 用来裁切多边形的多边形
     * @returns 如果返回对象自身的positions,表示用来裁切的多边形完全包含在对象多边形之中，裁切出来中空的多边形需要自行处理；
     * 其他情况正常返回多边形值。
     */
    getDifference(position: [number, number, number][]): [number, number, number][][] | undefined;
    getBuffer(radius?: number, units?: string): [number, number, number][][] | undefined;
    geoPolygonOverlap(position: [number, number, number][]): boolean | undefined;
    constructor(id?: SceneObjectKey);
    static defaults: {
        points: [number, number, number][];
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("..").ESFlyToParam;
        flyInParam: import("..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    getESProperties(): {
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
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
export declare namespace ESGeoVector {
    const createDefaultProps: () => {
        pointed: boolean;
        pointStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESPointStyle>;
        stroked: boolean;
        strokeStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESStrokeStyle>;
        filled: boolean;
        fillStyle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESFillStyle>;
        points: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
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
    };
}
export interface ESGeoVector extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESGeoVector.createDefaultProps>> {
}
