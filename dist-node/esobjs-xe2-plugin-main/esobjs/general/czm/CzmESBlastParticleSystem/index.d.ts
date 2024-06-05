import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmBlastParticleSystem, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESBlastParticleSystem } from '../../objs';
export declare class CzmESBlastParticleSystem extends CzmESObjectWithLocation<ESBlastParticleSystem> {
    static readonly type: void;
    private _czmBlastParticeSystem;
    get czmBlastParticeSystem(): CzmBlastParticleSystem;
    constructor(sceneObject: ESBlastParticleSystem, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
