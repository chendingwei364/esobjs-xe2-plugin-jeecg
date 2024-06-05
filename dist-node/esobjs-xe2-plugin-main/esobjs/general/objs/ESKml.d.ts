import { Property, ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmClockRangeType, CzmClockStepType } from "xbsj-xe2/dist-node/xe2-cesium-objects";
export declare class ESKml extends ESSceneObject {
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
        allowPicking: boolean;
        loadFuncStr: string | undefined;
        data: string | undefined;
        autoResetClock: boolean;
        clockEnabled: boolean;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number;
        clockStep: string;
        clockRange: string;
        shouldAnimate: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _resetClockEvent;
    get resetClockEvent(): Event<[]>;
    resetClock(): void;
    constructor(id?: string);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        defaultLoadFuncStr: string;
        defaultLoadFuncDocStr: string;
        data: string;
        dataMd: string;
        autoResetClock: boolean;
        clockEnabled: boolean;
        startTime: () => number;
        stopTime: () => number;
        currentTime: () => number;
        multiplier: number;
        clockStep: CzmClockStepType;
        clockRange: CzmClockRangeType;
        shouldAnimate: boolean;
        uri: string;
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
export declare namespace ESKml {
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
        allowPicking: boolean;
        loadFuncStr: string | undefined;
        data: string | undefined;
        autoResetClock: boolean;
        clockEnabled: boolean;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number;
        clockStep: string;
        clockRange: string;
        shouldAnimate: boolean;
    };
}
export interface ESKml extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESKml.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESKml.createDefaultProps> & {
    type: string;
}>;
export {};
