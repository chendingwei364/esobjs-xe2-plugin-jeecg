import { CzmTilingSchemaJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESVisualObject } from "../../base/objs";
export declare type CzmSplitDirectionType = 'LEFT' | 'NONE' | 'RIGHT';
export declare type czmTilingSchemeType = 'WebMercatorTilingScheme' | 'GeographicTilingScheme' | 'ToGCJ02WebMercatorTilingScheme' | 'ToWGS84WebMercatorTilingScheme';
export declare function getCzmCodeFromESImageryLayer(imagery: ESImageryLayer): string | undefined;
/**
 * https://www.wolai.com/earthsdk/sTpXjiETeVPfEwGfqDqUUw
 */
export declare class ESImageryLayer extends ESVisualObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
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
        /**
         * https://www.wolai.com/earthsdk/sTpXjiETeVPfEwGfqDqUUw#2d5sKtFaVmPHVoLcmDaxK6
         */
        url: string;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        zIndex: number;
        actorTag: string;
        componentTag: string;
        maximumLevel: number;
        minimumLevel: number;
        czmImageryProviderType: "wms" | "tms" | "wmts" | "auto";
        czmTileMatrixLabels: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        czmTileWidth: number;
        czmTileHeight: number;
        czmTilingScheme: string;
        czmTilingSchemeJson: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmTilingSchemaJsonType | undefined>;
        czmSplitDirection: string;
        czmAlpha: number;
        czmBrightness: number;
        czmContrast: number;
        czmHue: number;
        czmSaturation: number;
        czmGamma: number;
    };
    get json(): JsonType;
    set json(value: JsonType);
    getCzmCode(): string | undefined;
    static defaults: {
        show: boolean;
        url: string;
        rectangle: [number, number, number, number];
        zIndex: number;
        actorTag: string;
        componentTag: string;
        minimumLevel: number;
        maximumLevel: number;
        czmImageryProviderType: "wms" | "tms" | "wmts" | "auto";
        czmTileMatrixLabels: never[];
        czmImageryProviderTypeEnum: [name: string, value: string][];
        czmTileWidth: number;
        czmTileHeight: number;
        czmTilingScheme: czmTilingSchemeType;
        czmTilingSchemeEnum: [name: string, value: string][];
        czmTilingSchemeJson: undefined;
        czmSplitDirection: CzmSplitDirectionType;
        czmAlpha: number;
        czmBrightness: number;
        czmContrast: number;
        czmHue: number;
        czmSaturation: number;
        czmGamma: number;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../../base").ESFlyToParam;
        flyInParam: import("../../base").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getESProperties(): {
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESImageryLayer {
    const createDefaultProps: () => {
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
        /**
         * https://www.wolai.com/earthsdk/sTpXjiETeVPfEwGfqDqUUw#2d5sKtFaVmPHVoLcmDaxK6
         */
        url: string;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        zIndex: number;
        actorTag: string;
        componentTag: string;
        maximumLevel: number;
        minimumLevel: number;
        czmImageryProviderType: "wms" | "tms" | "wmts" | "auto";
        czmTileMatrixLabels: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        czmTileWidth: number;
        czmTileHeight: number;
        czmTilingScheme: string;
        czmTilingSchemeJson: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmTilingSchemaJsonType | undefined>;
        czmSplitDirection: string;
        czmAlpha: number;
        czmBrightness: number;
        czmContrast: number;
        czmHue: number;
        czmSaturation: number;
        czmGamma: number;
    };
}
export interface ESImageryLayer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESImageryLayer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESImageryLayer.createDefaultProps> & {
    type: string;
}>;
export {};
