import { AbsolutePlayer, ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class ESPlayer extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        currentTime: number;
        startTime: number;
        stopTime: number;
        playing: boolean;
        loop: boolean;
        speed: number;
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
    static defaults: {
        currentTime: number;
        startTime: number;
        stopTime: number;
        playing: boolean;
        loop: boolean;
        speed: number;
        viewerTagsEnums: [string, string][];
    };
    private _absolutePlayer;
    get absolutePlayer(): AbsolutePlayer;
    get ratio(): number;
    get ratioChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    set ratio(value: number);
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESPlayer {
    const createDefaultProps: () => {
        currentTime: number;
        startTime: number;
        stopTime: number;
        playing: boolean;
        loop: boolean;
        speed: number;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ESPlayer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESPlayer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESPlayer.createDefaultProps> & {
    type: string;
}>;
export {};
