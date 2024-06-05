import { PositionEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
export declare class CzmESEditing extends Destroyable {
    private _czmViewer;
    private _editing;
    private _positionReactParam;
    private _innerPositionReact;
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    constructor(_czmViewer: CzmViewer, _editing: ReactParamsType<boolean> | undefined, _positionReactParam: ReactParamsType<[number, number, number] | undefined>);
}
