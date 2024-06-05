import { Property, PickedInfo, Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESSceneObject } from "./ESSceneObject";
import { ESFlyInParam, ESFlyToParam } from "../misc";
/**
 * https://www.wolai.com/earthsdk/u1sLHxcj6PErXf8ubcvC4j
 */
export declare abstract class ESVisualObject extends ESSceneObject {
    private _flyInEvent;
    get flyInEvent(): Listener<[duration: number | undefined, id: number]>;
    static _lastFlyInId: number;
    flyIn(duration?: number): void;
    private _flyToEvent;
    get flyToEvent(): Listener<[duration: number | undefined, id: number]>;
    static _lastFlyToId: number;
    flyTo(duration?: number): void;
    private _flyOverEvent;
    get flyOverEvent(): Event<[id: number, mode: "error" | "cancelled" | "over", viewer: Viewer]>;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _calcFlyToParamEvent;
    get calcFlyToParamEvent(): Listener;
    calcFlyToParam(): void;
    /**
     * 是否使用ESObjectWithLocation类中的calcFlyToParam
     */
    useCalcFlyToParamInESObjectWithLocation: boolean;
    /**
     * 清空飞入参数
     * https://www.wolai.com/earthsdk/u1sLHxcj6PErXf8ubcvC4j#pFGFyqbrwMcf6dJZq4YTnG
     */
    emptyFlyToParam(): void;
    /**
     * 清空飞向参数
     * https://www.wolai.com/earthsdk/u1sLHxcj6PErXf8ubcvC4j#mLbWgmfVmj3tFb1e1Zn9H
     */
    emptyFlyInParam(): void;
    private _calcFlyInParamEvent;
    get calcFlyInParamEvent(): Listener;
    calcFlyInParam(): void;
    getBoundSphere(viewer: Viewer): Promise<{
        center?: [number, number, number] | undefined;
        radius?: number | undefined;
        tips?: string | undefined;
    } | undefined>;
    static defaults: {
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: ESFlyToParam;
        flyInParam: ESFlyInParam;
        viewerTagsEnums: [string, string][]; /**
         * 清空飞向参数
         * https://www.wolai.com/earthsdk/u1sLHxcj6PErXf8ubcvC4j#mLbWgmfVmj3tFb1e1Zn9H
         */
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
    get flyToDistance(): number | undefined;
    get flyToHeading(): number | undefined;
    get flyToPitch(): number | undefined;
    get flyToFlyDuration(): number | undefined;
    get flyToHDelta(): number | undefined;
    get flyToPDelta(): number | undefined;
    get flyToDistanceChanged(): Listener<[ESFlyToParam | undefined, ESFlyToParam | undefined]>;
    get flyToHeadingChanged(): Listener<[ESFlyToParam | undefined, ESFlyToParam | undefined]>;
    get flyToPitchChanged(): Listener<[ESFlyToParam | undefined, ESFlyToParam | undefined]>;
    get flyToFlyDurationChanged(): Listener<[ESFlyToParam | undefined, ESFlyToParam | undefined]>;
    get flyToHDeltaChanged(): Listener<[ESFlyToParam | undefined, ESFlyToParam | undefined]>;
    get flyToPDeltaChanged(): Listener<[ESFlyToParam | undefined, ESFlyToParam | undefined]>;
    set flyToDistance(value: number | undefined);
    set flyToHeading(value: number | undefined);
    set flyToPitch(value: number | undefined);
    set flyToFlyDuration(value: number | undefined);
    set flyToHDelta(value: number | undefined);
    set flyToPDelta(value: number | undefined);
}
export declare namespace ESVisualObject {
    const createDefaultProps: () => {
        /**
         * https://www.wolai.com/earthsdk/u1sLHxcj6PErXf8ubcvC4j#aV7NLcX7GfjAvfEJwY3qVR
         */
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ESVisualObject extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESVisualObject.createDefaultProps>> {
}
