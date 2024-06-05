import { CzmESObjectWithLocation } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { CzmParticleSystemPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESParticleSystemPrimitive } from '../../objs';
export declare class CzmESParticleSystemPrimitive extends CzmESObjectWithLocation<ESParticleSystemPrimitive> {
    static readonly type: void;
    private _czmESParticleSystemPrimitive;
    get czmESParticleSystemPrimitive(): CzmParticleSystemPrimitive;
    constructor(sceneObject: ESParticleSystemPrimitive, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
