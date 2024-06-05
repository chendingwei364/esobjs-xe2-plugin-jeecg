/// <reference types="cesium" />
/// <reference types="xbsj-renderer/dist-node/xr-cesium/__declares/__cesium" />
/// <reference types="xbsj-xe2/dist-node/xe2-cesium-objects/__declares/__cesium" />
/// <reference types="xbsj-renderer/dist-node/xr-cesium/fixcamera/fixcameraflight" />
import { ProjectManager } from "xbsj-xe2/dist-node/xe2";
import { ESSceneObject, SceneObject } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, Listener, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ES3DTileset } from '../esobjs';
import { CameraViewsManager } from "./CameraViewsManager";
import { ClassicNavigatorManager } from "./ClassicNavigator";
import { GlobeMaterialManager } from './GlobeMaterialManager';
import { MeasurementManager } from "./MeasurementManager";
import { ViewerManager } from './ViewerManager';
export * from './CameraViewsManager';
export * from './ClassicNavigator';
export * from './GlobeMaterialManager';
export * from './MeasurementManager';
export * from './ViewerManager';
export declare type NavigationModeType = {
    Mode: 'Map';
} | {
    Mode: 'Walk';
    Position: [number, number, number];
} | {
    Mode: 'Line';
    GeoLineStringId: string;
    Speed: number;
    HeightOffset: number;
    Loop: boolean;
} | {
    Mode: 'UserDefined';
    UserDefinedPawn: string;
};
export declare class XbsjEarthViewer extends Destroyable {
    private _projectManager;
    get projectManager(): ProjectManager;
    get sceneObjectsManager(): import("xbsj-xe2/dist-node/xe2-base-objects").SceneObjectsManager;
    private _cameraViewsManager;
    get cameraViewsManager(): CameraViewsManager;
    private _navigatorManager;
    get navigatorManager(): ClassicNavigatorManager;
    private _changeModeEvent;
    get changeModeEvent(): Listener<[parms: NavigationModeType]>;
    changeNavigationMode(parms: NavigationModeType): void;
    private _viewerManager;
    get viewerManager(): ViewerManager;
    private _globeMaterialManager;
    get globeMaterialManager(): GlobeMaterialManager;
    private _measurementManager;
    get measurementManager(): MeasurementManager;
    private _requestUrl;
    get requestUrl(): string;
    get requestUrlChanged(): Listener<[string, string]>;
    set requestUrl(value: string);
    getCzmNative(sceneObject: ESSceneObject): import("xbsj-xe2/dist-node/xe2-cesium-objects").CzmObject<SceneObject> | undefined;
    /**
     * 获取czm原始3dtiles
     * @param sceneObject
     * @returns
     */
    getCzmNative3DTiles(sceneObject: ES3DTileset): import("cesium").Cesium3DTileset | undefined;
    get czmlabPath(): string;
    set czmlabPath(target: string);
    constructor();
    private _czmViewerPathNavigation;
}
export declare namespace XbsjEarthViewer {
    const createDefaultProps: () => {
        showSceneTreeView: boolean;
        lastPopupZindex: number;
        globeShow: boolean;
        navigationMode: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NavigationModeType | undefined>;
        currentTime: number;
        editingPointSize: number;
        editingPointColor: number[];
        editingAuxiliaryPointColor: number[];
        editingLineWidth: number;
        editingLineColor: number[];
        editingAxisSize: number;
        editingAuxiliaryPointSize: number;
        cloudShow: number;
        rainShow: number;
        snowShow: number;
        fullFogShow: boolean;
        fogShow: number;
        sunShow: boolean;
        moonShow: boolean;
        atmosphereShow: boolean;
        starrySky: boolean;
        sceneSkyBoxShow: boolean;
        shadowsShow: boolean;
        depthOfFieldShow: boolean;
        ambientOcclusionShow: boolean;
        floodlightShow: boolean;
    };
}
export interface XbsjEarthViewer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjEarthViewer.createDefaultProps>> {
}
