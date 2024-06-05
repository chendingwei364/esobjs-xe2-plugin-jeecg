import { Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESVisualObject } from "../../base";
import { ESImageryLayer } from "./ESImageryLayer";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class GetCurrentTileCoordinates extends Destroyable {
    constructor(viewer: Viewer, sceneObject: ESGeHistoryImagery, esImageryLayer: ESImageryLayer);
}
export declare class ESGeHistoryImagery extends ESVisualObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        currentDate: string;
        zIndex: number;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
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
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _esImageryLayer;
    get esImageryLayer(): ESImageryLayer;
    private _datesEvent;
    get datesEvent(): Event<[string[] | undefined, Viewer]>;
    static defaults: {
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../../base").ESFlyToParam;
        flyInParam: import("../../base").ESFlyInParam;
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
export declare namespace ESGeHistoryImagery {
    const createDefaultProps: () => {
        currentDate: string;
        zIndex: number;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
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
    };
}
export interface ESGeHistoryImagery extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESGeHistoryImagery.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESGeHistoryImagery.createDefaultProps> & {
    type: string;
}>;
export {};
