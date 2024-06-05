import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmCustomPrimitive, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESSection } from '../../objs';
export declare class CzmESSection extends CzmESObjectWithLocation<ESSection> {
    static readonly type: void;
    private _czmCustom;
    get czmCustom(): CzmCustomPrimitive;
    constructor(sceneObject: ESSection, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
}
