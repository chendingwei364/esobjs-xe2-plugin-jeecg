import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmFireParticleSystem, CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESFireParticleSystem } from '../../objs';
export declare class CzmESFireParticleSystem extends CzmESObjectWithLocation<ESFireParticleSystem> {
    static readonly type: void;
    private _czmFireParticleSystem;
    get czmFireParticleSystem(): CzmFireParticleSystem;
    constructor(sceneObject: ESFireParticleSystem, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
