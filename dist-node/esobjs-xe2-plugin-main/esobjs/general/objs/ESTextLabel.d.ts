import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESLabel } from "../../base/objs";
import { WidgetEventInfo } from "../../base/objs";
export declare class ESTextLabel extends ESLabel {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        text: string | undefined;
        width: number | undefined;
        textEditing: boolean;
        textEditingInteraction: boolean;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        opacity: number;
        fontSize: number;
        textAlign: string;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderWidth: number;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderStyle: string;
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _widgetEvent;
    get widgetEvent(): Event<[WidgetEventInfo]>;
    static defaults: {
        allowTextEditing: boolean;
        width: number;
        text: string;
        editing: boolean;
        originRatioAndOffset: [number, number, number, number];
        opacity: number;
        backgroundColor: [number, number, number, number];
        padding: [number, number, number, number];
        borderRadius: [number, number, number, number];
        borderColor: [number, number, number, number];
        borderWidth: number;
        textAlign: string;
        borderStyle: string;
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
export declare namespace ESTextLabel {
    const createDefaultProps: () => {
        text: string | undefined;
        width: number | undefined;
        textEditing: boolean;
        textEditingInteraction: boolean;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        opacity: number;
        fontSize: number;
        textAlign: string;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderWidth: number;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderStyle: string;
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
}
export interface ESTextLabel extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESTextLabel.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESTextLabel.createDefaultProps> & {
    type: string;
}>;
export {};