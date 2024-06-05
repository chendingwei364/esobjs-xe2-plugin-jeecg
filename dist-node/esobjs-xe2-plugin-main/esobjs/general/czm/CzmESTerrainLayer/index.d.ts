import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmTerrain, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESTerrainLayer } from '../../objs';
export declare class CzmESTerrainLayer extends CzmESVisualObject<ESTerrainLayer> {
    static readonly type: void;
    private _czmTerrain;
    get czmTerrain(): CzmTerrain;
    constructor(sceneObject: ESTerrainLayer, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
