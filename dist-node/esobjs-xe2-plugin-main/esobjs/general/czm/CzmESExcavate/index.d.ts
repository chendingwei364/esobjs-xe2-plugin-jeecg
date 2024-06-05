import { CzmESGeoVector } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmPolygonClippingPlanes, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESExcavate } from '../../objs';
import { SceneObjectWithId } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CzmESExcavate<T extends ESExcavate = ESExcavate> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _czmPolygonClippingPlanes;
    get czmPolygonClippingPlanes(): CzmPolygonClippingPlanes;
    private _viewer;
    get viewer(): CzmViewer | undefined;
    set viewer(value: CzmViewer | undefined);
    private _tilesSceneObjectWithId;
    get tilesSceneObjectWithId(): SceneObjectWithId<import("xbsj-xe2/dist-node/xe2-base-objects").SceneObject>;
    private _tilesSceneObjectWithIdInit;
    private _event;
    get event(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
