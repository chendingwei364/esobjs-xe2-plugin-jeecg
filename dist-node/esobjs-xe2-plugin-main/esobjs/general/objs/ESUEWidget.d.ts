import { Event, JsonValue, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESLabel } from "../../base/objs";
import { WidgetEventInfo } from "../../base/objs";
export declare type ESUEWidgetInfoType = {
    Title: string;
    Content: string;
};
export declare class ESUEWidget extends ESLabel {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        screenRender: boolean;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        anchor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        sizeByContent: boolean;
        renderMode: number;
        rotationType: number;
        zOrder: number;
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        widgetClass: string;
        socketName: string;
        positionOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        info: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESUEWidgetInfoType | undefined>;
        actorTag: string;
        rotationOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _widgetEvent;
    get widgetEvent(): Event<[WidgetEventInfo]>;
    static defaults: {
        info: ESUEWidgetInfoType;
        widgetClass: string;
        socketName: string;
        positionOffset: [number, number, number];
        actorTag: string;
        rotationOffset: [number, number, number];
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getESProperties(): {
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESUEWidget {
    const createDefaultProps: () => {
        screenRender: boolean;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        anchor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        sizeByContent: boolean;
        renderMode: number;
        rotationType: number;
        zOrder: number;
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        widgetClass: string;
        socketName: string;
        positionOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        info: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESUEWidgetInfoType | undefined>;
        actorTag: string;
        rotationOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
}
export interface ESUEWidget extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESUEWidget.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESUEWidget.createDefaultProps> & {
    type: string;
}>;
export {};
