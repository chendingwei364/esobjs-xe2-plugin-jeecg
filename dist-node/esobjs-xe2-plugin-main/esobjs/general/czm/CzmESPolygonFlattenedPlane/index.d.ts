import { CzmESGeoVector } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmViewer, CzmPolygonFlattenedPlane } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { SceneObjectWithId } from "xbsj-xe2/dist-node/xe2-utils";
import { ESPolygonFlattenedPlane } from '../../objs';
export declare class CzmESPolygonFlattenedPlane<T extends ESPolygonFlattenedPlane = ESPolygonFlattenedPlane> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _polygonFlattenedPlane;
    get polygonFlattenedPlane(): CzmPolygonFlattenedPlane;
    private _tilesSceneObjectWithId;
    get tilesSceneObjectWithId(): SceneObjectWithId<import("xbsj-xe2/dist-node/xe2-base-objects").SceneObject>;
    private _tilesSceneObjectWithIdInit;
    private _event;
    get event(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
