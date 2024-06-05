import { CzmESGeoPolygon } from "../CzmESGeoPolygon";
import { PositionsEditing } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmPolygonPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESPolygonWithHole } from '../../objs';
export declare class CzmESPolygonWithHole extends CzmESGeoPolygon<ESPolygonWithHole> {
    static readonly type: void;
    private _czmPolygonPrimitive;
    get czmPolygonPrimitive(): CzmPolygonPrimitive;
    private _geoPolyline;
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    constructor(sceneObject: ESPolygonWithHole, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
