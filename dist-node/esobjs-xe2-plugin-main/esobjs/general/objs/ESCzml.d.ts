import { ESSceneObject, Property } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmClockRangeType, CzmClockStepType } from "xbsj-xe2/dist-node/xe2-cesium-objects";
export declare class ESCzml extends ESSceneObject {
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
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        autoResetClock: boolean;
        clockEnabled: boolean;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number;
        clockStep: string;
        clockRange: string;
        shouldAnimate: boolean;
        loadFuncStr: string | undefined;
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
        data: ({
            id: string;
            version: string;
            availability?: undefined;
            billboard?: undefined;
            label?: undefined;
            path?: undefined;
            position?: undefined;
        } | {
            id: string;
            availability: string;
            billboard: {
                eyeOffset: {
                    cartesian: number[];
                };
                horizontalOrigin: string;
                image: string;
                pixelOffset: {
                    cartesian2: number[];
                };
                scale: number;
                show: {
                    interval: string;
                    boolean: boolean;
                }[];
                verticalOrigin: string;
            };
            label: {
                fillColor: {
                    interval: string;
                    rgba: number[];
                }[];
                font: string;
                horizontalOrigin: string;
                outlineColor: {
                    rgba: number[];
                };
                pixelOffset: {
                    cartesian2: number[];
                };
                scale: number;
                show: {
                    interval: string;
                    boolean: boolean;
                }[];
                style: string;
                text: string;
                verticalOrigin: string;
            };
            path: {
                material: {
                    solidColor: {
                        color: {
                            interval: string;
                            rgba: number[];
                        };
                    };
                };
                width: {
                    interval: string;
                    number: number;
                }[];
                show: {
                    interval: string;
                    boolean: boolean;
                }[];
            };
            position: {
                interpolationAlgorithm: string;
                interpolationDegree: number;
                epoch: string;
                cartesian: number[];
            };
            version?: undefined;
        })[];
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
        defaultLoadFuncStr: string;
        defaultLoadFuncDocStr: string;
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
export declare namespace ESCzml {
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
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        autoResetClock: boolean;
        clockEnabled: boolean;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number;
        clockStep: string;
        clockRange: string;
        shouldAnimate: boolean;
        loadFuncStr: string | undefined;
    };
}
export interface ESCzml extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESCzml.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESCzml.createDefaultProps> & {
    type: string;
}>;
export {};
