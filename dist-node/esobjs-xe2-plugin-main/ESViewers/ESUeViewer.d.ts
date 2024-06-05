import { Event } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { ESObjectsManager, ESUEViewerOptions } from "../ESObjectsManager";
import { ESViewer } from "./ESViewer";
/**
 * https://www.wolai.com/earthsdk/igCH4kASqsnDLfAXZbn7zM
 */
export declare class ESUeViewer extends ESViewer {
    private _innerViewer;
    private _innerViewerDispose;
    get innerViewer(): UeViewer;
    get geoReferenceOrigin(): [number, number, number] | undefined;
    set geoReferenceOrigin(value: [number, number, number] | undefined);
    get geoReferenceOriginChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number, number] | undefined, [number, number, number] | undefined]>;
    get keepWorldOriginNearCamera(): boolean | undefined;
    set keepWorldOriginNearCamera(value: boolean | undefined);
    get keepWorldOriginNearCameraChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>;
    get widgetInteractionDistance(): number | undefined;
    set widgetInteractionDistance(value: number | undefined);
    get widgetInteractionDistanceChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    get sunIntensity(): number | undefined;
    set sunIntensity(value: number | undefined);
    get sunIntensityChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    get sunSkyControlled(): boolean | undefined;
    set sunSkyControlled(value: boolean | undefined);
    get sunSkyControlledChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>;
    get night(): boolean | undefined;
    set night(value: boolean | undefined);
    get nightChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>;
    private _syncEventDis;
    private _hoverEventDispose;
    private _hoverOutEventDispose;
    private _mouseMoveEventDispose;
    private _clickEventDispose;
    private _dbclickEventDispose;
    private _pickedEventDispose;
    private _viewerChanged;
    private _customMessage;
    get customMessage(): Event<[{
        et: "customMessage";
        eid: string;
        message: string;
    }]>;
    private _customMessageDispose;
    private _speechRecognition;
    get speechRecognition(): Event<[{
        et: "speechRecognition";
        eid: string;
        result: string;
        error: string;
    }]>;
    private _speechRecognitionDispose;
    /**
     * UE位置信息转经纬度
     */
    UEPositionToLonLatAlt(pos: [number, number, number]): Promise<[number, number, number] | undefined>;
    defaultCameraFlyIn(duration?: number): void;
    restoreOriginalScene(): void;
    quit(): void;
    getAllSocketNamesByActorTag(actorTag: string): Promise<string[] | undefined>;
    getCameraRelativeHeight(channel: string): Promise<number | undefined>;
    sendCustomMessage(message: string): Promise<{
        error: string | undefined;
    } | undefined>;
    getObjectByInfo(info: {
        actorTag: string;
        componentTag: string;
    }): Promise<{
        [k: string]: any;
        type: string;
    } | undefined>;
    saveStringToFile(str: string, path?: string, file?: string): Promise<{
        error: string | undefined;
    } | undefined>;
    private _setStatus;
    private _statusTime;
    get statusTime(): number;
    set statusTime(value: number);
    get statusTimeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _statusInterval;
    private _setStatusChanged;
    changeContainer(options: ESUEViewerOptions): void;
    constructor(objectManager: ESObjectsManager, options: ESUEViewerOptions);
}
