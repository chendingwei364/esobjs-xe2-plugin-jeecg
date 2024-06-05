import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { ESObjectWithLocation } from "../../base/objs";
/**
 * https://www.wolai.com/earthsdk/sb6BoXk1ALsXvGf76g1tLW
 */
export declare class ESCameraView extends ESObjectWithLocation {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        thumbnail: string;
        duration: number;
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
    private _resetWithCurrentCameraEvent;
    get resetWithCurrentCameraEvent(): Event<[]>;
    /**
     * 设置为当前视角
     */
    resetWithCurrentCamera(): void;
    private _captureEvent;
    get captureEvent(): Event<[x?: number | undefined, y?: number | undefined]>;
    /**
     * 获取缩略图
     * @param x 缩略图的宽度
     * @param y 缩略图的高度
     */
    capture(x?: number, y?: number): void;
    /**
     * 用于在创建时自动执行
     */
    execOnCreating(): void;
    /**
     * 以当前相机的姿态重置相机姿态 resetCamera名称修改initByCurrent
     * @param viewer
     * @returns
     */
    initByCurrent(viewer: UeViewer): Promise<{
        error: string | undefined;
    } | undefined>;
    static defaults: {
        thumbnailWidth: number;
        thumbnailHeight: number;
        duration: number;
        thumbnail: string;
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("../..").ESFlyToParam;
        flyInParam: import("../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESCameraView {
    const createDefaultProps: () => {
        thumbnail: string;
        duration: number;
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
export interface ESCameraView extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESCameraView.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESCameraView.createDefaultProps> & {
    type: string;
}>;
export {};
