import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { GeoBezierPath } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESGeoBezierPath } from '../../objs';
export declare class CzmESGeoBezierPath extends CzmESVisualObject<ESGeoBezierPath> {
    static readonly type: void;
    private _czmBezierPath;
    get czmBezierPath(): GeoBezierPath;
    constructor(sceneObject: ESGeoBezierPath, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
