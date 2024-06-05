import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESGeoPolygon } from "./ESGeoPolygon";
/**
 * https://www.wolai.com/earthsdk/sqfdFs3bjWsL6WRdDVu4JM
 */
export declare class ESPolygonFlattenedPlane extends ESGeoPolygon {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        targetID: string;
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
    private _czmFlattenedPlaneId;
    get czmFlattenedPlaneId(): string;
    set czmFlattenedPlaneId(value: string);
    get czmFlattenedPlaneIdChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string, string]>;
    constructor(id?: SceneObjectKey);
    static defaults: {
        fillStyle: import("../../base/objs").ESFillStyle;
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
    getESProperties(): {
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESPolygonFlattenedPlane {
    const createDefaultProps: () => {
        targetID: string;
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
export interface ESPolygonFlattenedPlane extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESPolygonFlattenedPlane.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESPolygonFlattenedPlane.createDefaultProps> & {
    type: string;
}>;
export {};
