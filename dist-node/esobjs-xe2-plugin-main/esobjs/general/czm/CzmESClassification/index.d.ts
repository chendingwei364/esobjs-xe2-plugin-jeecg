import { CzmESVisualObject } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base";
import { GeoClassificationPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESClassification } from '../../objs';
export declare class CzmESClassification extends CzmESVisualObject<ESClassification> {
    static readonly type: void;
    private _polygon;
    get polygon(): GeoClassificationPolygon;
    constructor(sceneObject: ESClassification, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
