import { Property, ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class ESGeoJson extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        uri: string;
        fill: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        stroke: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        strokeWidth: number;
        clampToGround: boolean;
        allowPicking: boolean;
        loadFuncStr: string | undefined;
        markerSymbol: string;
        markerColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        markerSize: number;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: string);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        fill: [number, number, number, number];
        stroke: [number, number, number, number];
        strokeWidth: number;
        markerSymbol: string;
        markerColor: [number, number, number, number];
        markerSize: number;
        clampToGround: boolean;
        uri: string;
        defaultLoadFuncStr: string;
        defaultLoadFuncDocStr: string;
        data: {
            type: string;
            features: {
                type: string;
                geometry: {
                    type: string;
                    coordinates: number[];
                };
                properties: {
                    title: string;
                    "marker-symbol": string;
                    "marker-color": string;
                };
            }[];
        };
        dataMd: string;
        viewerTagsEnums: [string, string][];
    };
    getESProperties(): {
        basic: Property[];
        general: Property[];
        dataSource: Property[];
        location: Property[];
        coordinate: Property[];
        style: Property[];
    };
    getProperties(language?: string): Property[];
}
export declare namespace ESGeoJson {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        uri: string;
        fill: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        stroke: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        strokeWidth: number;
        clampToGround: boolean;
        allowPicking: boolean;
        loadFuncStr: string | undefined;
        markerSymbol: string;
        markerColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        markerSize: number;
    };
}
export interface ESGeoJson extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESGeoJson.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESGeoJson.createDefaultProps> & {
    type: string;
}>;
export {};
