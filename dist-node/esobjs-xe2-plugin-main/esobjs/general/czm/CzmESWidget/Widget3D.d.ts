import { CzmViewer, CzmCustomPrimitive, CzmTexture } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESWidget } from '../../objs';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
export declare class Widget3D extends Destroyable {
    private _sceneObject;
    private _czmViewer;
    private _InfoBackGround;
    private _InfoItemRowBackGround;
    private _customPrimitive;
    get czmCustomPrimitive(): CzmCustomPrimitive;
    private _czmTexture;
    get czmTexture(): CzmTexture;
    sceneObject: ESWidget;
    czmViewer: CzmViewer;
    private InfoBackGround;
    private InfoItemRowBackGround;
    constructor(_sceneObject: ESWidget, _czmViewer: CzmViewer, _InfoBackGround: any, _InfoItemRowBackGround: any);
    flyTo: (duration: number | undefined, id: number) => void;
}
