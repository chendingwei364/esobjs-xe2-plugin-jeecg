import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmPlane, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { SceneObjectWithId } from "xbsj-xe2/dist-node/xe2-utils";
import { ESClippingPlane } from '../../objs';
export declare class CzmESClippingPlane extends CzmESObjectWithLocation<ESClippingPlane> {
    static readonly type: void;
    private _innerPositionReact;
    private _czmPlane;
    get czmPlane(): CzmPlane;
    private _tilesSceneObjectWithId;
    get tilesSceneObjectWithId(): SceneObjectWithId<import("xbsj-xe2/dist-node/xe2-base-objects").SceneObject>;
    private _tilesSceneObjectWithIdInit;
    private _event;
    get event(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    private _tilesIdResetting;
    constructor(sceneObject: ESClippingPlane, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
