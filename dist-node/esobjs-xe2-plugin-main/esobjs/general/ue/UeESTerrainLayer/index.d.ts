import { UeESVisualObject } from '../../../base';
import { UeViewer } from '../../../base';
import { ESTerrainLayer } from '../../';
export declare class UeESTerrainLayer extends UeESVisualObject<ESTerrainLayer> {
    static readonly type: void;
    static forceUeUpdateProps: string[];
    static propValFuncs: {
        url: (val: string) => string;
        czmMaxzoom: null;
        czmMinzoom: null;
    };
    constructor(sceneObject: ESTerrainLayer, ueViewer: UeViewer);
}
