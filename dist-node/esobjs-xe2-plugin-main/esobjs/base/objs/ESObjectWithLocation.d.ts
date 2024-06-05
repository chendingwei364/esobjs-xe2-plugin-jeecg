import { Event, ReactivePropsToNativePropsAndChanged, Listener } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESVisualObject } from "./ESVisualObject";
/**
 * https://www.wolai.com/earthsdk/tE8S54xN8LZtbQRd9GP8Ya
 */
export declare abstract class ESObjectWithLocation extends ESVisualObject {
    private _smoothMoveEvent;
    get smoothMoveEvent(): Event<[[number, number, number], number]>;
    smoothMove(Destination: [number, number, number], Time: number): void;
    private _smoothMoveWithRotationEvent;
    get smoothMoveWithRotationEvent(): Event<[[number, number, number], [number, number, number], number]>;
    smoothMoveWithRotation(Destination: [number, number, number], NewRotation: [number, number, number], Time: number): void;
    private _smoothMoveOnGroundEvent;
    get smoothMoveOnGroundEvent(): Event<[number, number, number, string]>;
    smoothMoveOnGround(Lon: number, Lat: number, Time: number, Ground: string): void;
    private _smoothMoveWithRotationOnGroundEvent;
    get smoothMoveWithRotationOnGroundEvent(): Event<[[number, number, number], number, number, number, string]>;
    smoothMoveWithRotationOnGround(NewRotation: [number, number, number], Lon: number, Lat: number, Time: number, Ground: string): void;
    private _automaticLandingEvent;
    get automaticLandingEvent(): Listener<[flag: boolean]>;
    automaticLanding(): void;
    private _smoothMoveKeepPitchEvent;
    get smoothMoveKeepPitchEvent(): Event<[[number, number, number], number]>;
    smoothMoveKeepPitch(Destination: [number, number, number], Time: number): void;
    private _smoothMoveRelativelyEvent;
    get smoothMoveRelativelyEvent(): Event<[[number, number, number], number]>;
    smoothMoveRelatively(RelativePosition: [number, number, number], Time: number): void;
    private _smoothMoveRelativelyWithRotationEvent;
    get smoothMoveRelativelyWithRotationEvent(): Event<[[number, number, number], [number, number, number], number]>;
    smoothMoveRelativelyWithRotation(RelativePosition: [number, number, number], NewRotation: [number, number, number], Time: number): void;
    private _editing;
    get editing(): boolean;
    get editingChanged(): Listener<[boolean, boolean]>;
    set editing(value: boolean);
    static defaults: {
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("..").ESFlyToParam;
        flyInParam: import("..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    /**
     * 是否使用ESObjectWithLocation类中的calcFlyToParam
     */
    useCalcFlyToParamInESObjectWithLocation: boolean;
    getESProperties(): {
        location: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        basic: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        general: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        dataSource: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        coordinate: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
        style: import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESObjectWithLocation {
    const createDefaultProps: () => {
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    };
}
export interface ESObjectWithLocation extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESObjectWithLocation.createDefaultProps>> {
}
