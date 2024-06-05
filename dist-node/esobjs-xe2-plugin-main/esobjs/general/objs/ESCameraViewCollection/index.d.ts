import { ObservableArray, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESSceneObject } from "../../../base/objs";
import { ViewInfo, ViewWrapper } from "./ViewWrapper";
/**
 * https://www.wolai.com/earthsdk/eV1jsaXWLWjaetTVCeSvww
 */
export declare class ESCameraViewCollection extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        playing: boolean;
        loop: boolean;
        intervalTime: number;
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
    private _currentViewIndex;
    get currentViewIndex(): number;
    get currentViewIndexChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _viewWrappers;
    private _currentViewWrapper;
    emitViewsWarpper(): void;
    private _container;
    get container(): HTMLDivElement | undefined;
    get containerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[HTMLDivElement | undefined, HTMLDivElement | undefined]>;
    set container(value: HTMLDivElement | undefined);
    get views(): ViewInfo[];
    get viewsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Event<[target: ObservableArray<ViewWrapper>]>;
    set views(value: ViewInfo[]);
    /**
     * 获取当前视角的index
     * @param viewWrapper 当前选中的视角
     * @returns 选中视角的index
     */
    private _getIndex;
    /**
     * 删除所有视角
     */
    clearAllViews(): void;
    /**
     * 添加视角
     */
    appendView(): void;
    /**
     * 插入视角
     * @param index 当前视角的index
     * @returns
     */
    insertView(index: number): void;
    /**
     * 设置当前视角
     * @param index 当前视角的index
     * @returns
     */
    setCurrentView(index: number): boolean;
    /**
     * 重置视角
     * @param index 当前视角的index
     * @returns
     */
    resetView(index: number): void;
    /**
     * 重置视角名称
     * @param index 当前视角的index
     * @returns
     */
    resetViewName(index: number, value: string): void;
    /**
     * 修改指定视角
     * @param index 当前视角的index
     * @returns
     */
    setView(index: number, val: ViewInfo): false | undefined;
    /**
     * 飞入指定视角
     * @param index
     */
    flyToView(index: number): void;
    /**
     * 上一个视角
     * @returns
     */
    flyToPrevView(): boolean;
    /**
    * 当前视角移动到上一个视角
    * @returns
    */
    moveToPreView(): void;
    /**
   * 当前视角移动到下一个视角
   * @returns
   */
    moveToNextView(): void;
    /**
     * 下一个视角
     * @returns
     */
    flyToNextView(): boolean;
    /**
     * 停止
     */
    stop(): void;
    /**
     * 删除指定视角
     * @param index 要删除视角的index
     * @returns
     */
    deleteView(index: number): void;
    /**
     * 删除当前视角
     * @returns
     */
    deleteCurrentView(): void;
    /**
     * 转换图片路径
     * @param url 图片路径
     * @returns 转化以后的图片路径
     */
    transitionImageUrl(url: string): string;
    constructor(id?: string);
    static defaults: {
        loop: boolean;
        playing: boolean;
        intervalTime: number;
        duration: number;
        views: never[];
        loopClose: string;
        loopOpen: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESCameraViewCollection {
    const createDefaultProps: () => {
        playing: boolean;
        loop: boolean;
        intervalTime: number;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ESCameraViewCollection extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESCameraViewCollection.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESCameraViewCollection.createDefaultProps> & {
    type: string;
} & {
    views: ViewInfo[];
}>;
export {};
