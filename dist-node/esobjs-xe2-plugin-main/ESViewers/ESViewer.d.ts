/// <reference types="cesium" />
/// <reference types="xbsj-renderer/dist-node/xr-cesium/__declares/__cesium" />
/// <reference types="xbsj-xe2/dist-node/xe2-cesium-objects/__declares/__cesium" />
/// <reference types="xbsj-renderer/dist-node/xr-cesium/fixcamera/fixcameraflight" />
import { ESSceneObject, PickedInfo } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { ESObjectsManager } from '../ESObjectsManager';
export declare type ESViewerType = 'ESViewer' | 'ESUeViewer' | 'ESCzmViewer';
declare type FlyToParamType = {
    distance: number;
    heading: number;
    pitch: number;
    flyDuration: number;
    hDelta: number;
    pDelta: number;
};
declare type SkyboxType = {
    positiveX: string;
    negativeX: string;
    positiveY: string;
    negativeY: string;
    positiveZ: string;
    negativeZ: string;
};
declare type StatusInfoType = {
    fps: number;
    position: [number, number, number];
    rotation: [number, number, number];
    length: number;
};
/**
 * https://www.wolai.com/earthsdk/pHn9b4jQ8ArXz8U29bjrAb
 */
export declare abstract class ESViewer extends ESSceneObject {
    private _objectManager;
    private _vid;
    private _typeName;
    abstract get innerViewer(): CzmViewer | UeViewer;
    get typeName(): ESViewerType;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        globeShow: boolean;
        ionAccessToken: string;
        apiKey: string;
        apiUrl: string;
        secretKey: string;
        speechVoiceMode: string;
        hoverTime: number;
        debug: boolean;
        currentTime: number;
        rain: number;
        snow: number;
        cloud: number;
        fog: number;
        atmosphere: boolean;
        sun: boolean;
        moon: boolean;
        skybox: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SkyboxType | undefined>;
        depthOfField: number;
        editingPointSize: number | undefined;
        editingPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAuxiliaryPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingLineWidth: number | undefined;
        editingLineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAxisSize: number | undefined;
        editingAuxiliaryPointSize: number | undefined;
        autoExposure: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get objectManager(): ESObjectsManager;
    get status(): import("xbsj-xe2/dist-node/xe2-base-objects").ViewerStatus;
    get statusChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[import("xbsj-xe2/dist-node/xe2-base-objects").ViewerStatus, import("xbsj-xe2/dist-node/xe2-base-objects").ViewerStatus]>;
    get viewerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[import("cesium").Viewer | undefined, import("cesium").Viewer | undefined]> | import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[import("xbsj-xe2/dist-node/xe2-ue-objects/base/UeViewer/UeCloudViewerBase").UeCloudViewerBase | undefined, import("xbsj-xe2/dist-node/xe2-ue-objects/base/UeViewer/UeCloudViewerBase").UeCloudViewerBase | undefined]>;
    get actived(): boolean;
    private _activedDispose;
    private _syncViewer;
    get syncViewer(): ESViewer | undefined;
    set syncViewer(value: ESViewer | undefined);
    get syncViewerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESViewer | undefined, ESViewer | undefined]>;
    readonly syncEvent: import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    private _syncEventDispose;
    private _syncEventResetting;
    syncOtherViewer(viewer: ESViewer | undefined): void;
    _statusInfo: StatusInfoType;
    getEngineType(): "Cesium" | "UE";
    /**
     * 两种引擎返回值不一致
     * @param screenPosition 屏幕坐标
     * @param attachedInfo 自定义标识
     * @param parentInfo 是否拾取父节点 仅仅UE支持
     * @return PickedInfo | UePickedInfo | undefined
     */
    pick(screenPosition: [number, number], attachedInfo?: any, parentInfo?: boolean): Promise<PickedInfo | undefined>;
    pickPosition(screenPosition: [number, number]): Promise<[number, number, number] | undefined>;
    flyIn(position: [number, number, number], rotation?: [number, number, number], duration?: number): void;
    flyTo(flyToParam: FlyToParamType, position: [number, number, number]): void;
    getCurrentCameraInfo(): {
        position: [number, number, number];
        rotation: [number, number, number];
    } | undefined;
    getLengthInPixel(): number | undefined;
    protected _navigationMode: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<"Map" | "Walk" | "Line" | "UserDefined" | "RotateGlobe">;
    get navigationModeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<["Map" | "Walk" | "Line" | "UserDefined" | "RotateGlobe", "Map" | "Walk" | "Line" | "UserDefined" | "RotateGlobe"]>;
    getNavigationMode(): "Map" | "Walk" | "Line" | "UserDefined" | "RotateGlobe";
    changeToWalk(position: [number, number, number]): void;
    changeToMap(): void;
    /**
     *
     * @param latitude 纬度
     * @param height 高度
     * @param cycleTime 周期
     */
    changeToRotateGlobe(latitude: number, height: number, cycleTime: number): void;
    changeToLine(geoLineStringId: string, speed: number, heightOffset: number, loop: boolean): void;
    /**
     *
     * @param userDefinedPawn ue支持，用户自定义交互方式
     * @returns
     */
    changeToUserDefined(userDefinedPawn: string): void;
    getFPS(): number;
    _versions: string[];
    getVersion(): string[];
    getXEVersions(): string[];
    getHeightByLonLat(lon: number, lat: number, channel?: string): Promise<number | null>;
    getHeightsByLonLats(lonLats: [number, number][], channel?: string): Promise<(number | null)[] | undefined>;
    capture(resx?: number, resy?: number): Promise<string | undefined>;
    lonLatAltToScreenPosition(position: [number, number, number]): Promise<[number, number] | undefined>;
    /**事件 */
    private _hoverEvent;
    get hoverEvent(): Event<[{
        screenPosition: [number, number];
    }]>;
    private _hoverOutEvent;
    get hoverOutEvent(): Event<[]>;
    private _mouseMoveEvent;
    get mouseMoveEvent(): Event<[{
        screenPosition: [number, number];
    }]>;
    private _clickEvent;
    get clickEvent(): Event<[{
        screenPosition?: [number, number] | undefined;
    }]>;
    private _dbclickEvent;
    get dbclickEvent(): Event<[{
        screenPosition?: [number, number] | undefined;
    }]>;
    private _pickedEvent;
    get pickedEvent(): Event<[pickedInfo: PickedInfo]>;
    get id(): string;
    constructor(_objectManager: ESObjectsManager, _vid: string, _typeName: ESViewerType);
}
export declare namespace ESViewer {
    const createReactProps: () => {
        show: boolean;
        globeShow: boolean;
        ionAccessToken: string;
        apiKey: string;
        apiUrl: string;
        secretKey: string;
        speechVoiceMode: string;
        hoverTime: number;
        debug: boolean;
        currentTime: number;
        rain: number;
        snow: number;
        cloud: number;
        fog: number;
        atmosphere: boolean;
        sun: boolean;
        moon: boolean;
        skybox: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SkyboxType | undefined>;
        depthOfField: number;
        editingPointSize: number | undefined;
        editingPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAuxiliaryPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingLineWidth: number | undefined;
        editingLineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAxisSize: number | undefined;
        editingAuxiliaryPointSize: number | undefined;
        autoExposure: boolean | undefined;
    };
}
export declare namespace ESViewer {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        globeShow: boolean;
        ionAccessToken: string;
        apiKey: string;
        apiUrl: string;
        secretKey: string;
        speechVoiceMode: string;
        hoverTime: number;
        debug: boolean;
        currentTime: number;
        rain: number;
        snow: number;
        cloud: number;
        fog: number;
        atmosphere: boolean;
        sun: boolean;
        moon: boolean;
        skybox: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SkyboxType | undefined>;
        depthOfField: number;
        editingPointSize: number | undefined;
        editingPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAuxiliaryPointColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingLineWidth: number | undefined;
        editingLineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editingAxisSize: number | undefined;
        editingAuxiliaryPointSize: number | undefined;
        autoExposure: boolean | undefined;
    };
}
export interface ESViewer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESViewer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESViewer.createDefaultProps> & {
    type: string;
}>;
export {};
