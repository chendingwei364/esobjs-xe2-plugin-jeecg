import { ESWidget } from '../../objs';
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { CzmESObjectWithLocation } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
export declare class CzmESWidget extends CzmESObjectWithLocation<ESWidget> {
    static readonly type: void;
    private _widgetTemp;
    get widgetTemp(): any;
    set widgetTemp(val: any);
    constructor(sceneObject: ESWidget, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    private imgUrl;
}
