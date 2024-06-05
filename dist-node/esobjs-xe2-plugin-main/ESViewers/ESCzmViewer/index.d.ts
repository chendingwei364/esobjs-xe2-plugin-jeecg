import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESCzmViewerOptions, ESObjectsManager } from '../../ESObjectsManager';
import { ESViewer } from '../ESViewer';
/**
 * https://www.wolai.com/earthsdk/vsNUdU6avwV6wiVeSDH7nC
 */
export declare class ESCzmViewer extends ESViewer {
    private _options;
    private _innerViewer;
    private _createCesiumViewerFuncDispose;
    private _innerViewerDispose;
    get innerViewer(): CzmViewer;
    private _syncEventDis;
    private _hoverEventDispose;
    private _hoverOutEventDispose;
    private _mouseMoveEventDispose;
    private _clickEventDispose;
    private _dbclickEventDispose;
    private _pickedEventDispose;
    private _viewerChanged;
    changeContainer(options: ESCzmViewerOptions): void;
    private _geoPolylinePathCameraController;
    private _rotateGlobe;
    changeToWalk(position: [number, number, number]): void;
    changeToMap(): void;
    changeToRotateGlobe(latitude: number, height: number, cycleTime: number): void;
    changeToLine(geoLineStringId: string, speed: number, heightOffset: number, loop: boolean): void;
    changeToUserDefined(userDefinedPawn: string): void;
    constructor(objectManager: ESObjectsManager, _options: ESCzmViewerOptions);
}
