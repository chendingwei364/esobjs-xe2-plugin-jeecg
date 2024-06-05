import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESVisualObject } from "../../base/objs";
export declare function getFinalTerrainProviderUrlString(url: string): string | undefined;
export declare function getCzmCodeFromCzmTerrain(czmTerrain: ESTerrainLayer): string | undefined;
/**
 * https://www.wolai.com/earthsdk/mrRQPHx2hww6BgzBwEdPaV
 */
export declare class ESTerrainLayer extends ESVisualObject {
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
        /**
         * https://www.wolai.com/earthsdk/mrRQPHx2hww6BgzBwEdPaV#YwSV19hmkyuF1sZ2NWjdp
         */
        url: string;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        czmMaxzoom: number | undefined;
        czmMinzoom: number | undefined;
        zIndex: number;
    };
    get json(): JsonType;
    set json(value: JsonType);
    getCzmCode(): string | undefined;
    static defaults: {
        show: boolean;
        url: string;
        rectangle: [number, number, number, number];
        zIndex: number;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getESProperties(): {
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESTerrainLayer {
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
        /**
         * https://www.wolai.com/earthsdk/mrRQPHx2hww6BgzBwEdPaV#YwSV19hmkyuF1sZ2NWjdp
         */
        url: string;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        czmMaxzoom: number | undefined;
        czmMinzoom: number | undefined;
        zIndex: number;
    };
}
export interface ESTerrainLayer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESTerrainLayer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESTerrainLayer.createDefaultProps> & {
    type: string;
}>;
export {};
