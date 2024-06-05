import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectWithId } from "xbsj-xe2/dist-node/xe2-utils";
import { SceneObject, GeoPathCameraController, GeoPolylinePath, ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { ESGeoLineString } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs";
declare class GeoPolylinePathBinding extends Destroyable {
    constructor(eSGeoLineString: ESGeoLineString, geoPolylinePath: GeoPolylinePath);
}
export declare class PathNavigation extends Destroyable {
    static defaults: {
        speed: number;
        loop: boolean;
        offsetHeight: number;
        enabled: boolean;
    };
    private _esGeoLineStringId;
    get esGeoLineStringId(): string | undefined;
    set esGeoLineStringId(value: string | undefined);
    get esGeoLineStringIdChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string | undefined, string | undefined]>;
    private _speed;
    get speed(): number | undefined;
    set speed(value: number | undefined);
    get speedChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _loop;
    get loop(): boolean | undefined;
    set loop(value: boolean | undefined);
    get loopChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>;
    private _offsetHeight;
    get offsetHeight(): number | undefined;
    set offsetHeight(value: number | undefined);
    get offsetHeightChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _enabled;
    get enabled(): boolean | undefined;
    set enabled(value: boolean | undefined);
    get enabledChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>;
    private _sceneObjectWithId;
    get sceneObjectWithId(): SceneObjectWithId<SceneObject>;
    private _geoPathCameraController;
    get geoPathCameraController(): GeoPathCameraController;
    private _geoPolylinePath;
    get geoPolylinePath(): GeoPolylinePath;
    private _geoPolylinePathResetting;
    get geoPolylinePathResetting(): ObjResettingWithEvent<GeoPolylinePathBinding, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[SceneObject | undefined, SceneObject | undefined]>>;
    constructor();
}
export {};
