import { CzmESGeoVector } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { GeoPolyline, GeoPolylines } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmCustomPrimitive, CzmTexture, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESPipeFence } from '../../objs';
export declare class CzmESPipeFence<T extends ESPipeFence = ESPipeFence> extends CzmESGeoVector<T> {
    static readonly type: void;
    private _line;
    get line(): GeoPolyline;
    private _lines;
    get lines(): GeoPolylines;
    private _czmCustomPrimitive;
    get czmCustomPrimitive(): CzmCustomPrimitive;
    private _distances;
    get distances(): number;
    set distances(value: number);
    get distancesChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _czmTexture;
    czmTexture(): CzmTexture;
    private _event;
    get event(): import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent;
    private _resetting;
    get resetting(): any;
    bindGeoPolylines(sceneObject: ESPipeFence, czmViewer: CzmViewer): GeoPolylines;
    computeBoundingBox(): void;
    bindCustomPrimitive(sceneObject: ESPipeFence, czmViewer: CzmViewer): CzmCustomPrimitive;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
