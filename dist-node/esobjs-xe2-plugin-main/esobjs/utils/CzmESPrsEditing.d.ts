import { PrsEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
export declare type CzmESPrsEditingOptionsType = {
    rotation?: {
        initialRotation?: [number, number, number];
        showHelper?: boolean;
    };
};
export declare class CzmESPrsEditing extends Destroyable {
    private _czmViewer;
    private _editing;
    private _positionReactParam;
    private _rotationReactParam;
    private _options?;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    get enabledChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _innerPositionReact;
    private _esOptions;
    get esOptions(): CzmESPrsEditingOptionsType;
    private _prsEditingSetting;
    get prsEditing(): PrsEditing | undefined;
    constructor(_czmViewer: CzmViewer, _editing: ReactParamsType<boolean> | undefined, _positionReactParam: ReactParamsType<[number, number, number] | undefined>, _rotationReactParam: ReactParamsType<[number, number, number] | undefined>, _options?: {
        rotation?: {
            initialRotation?: [number, number, number] | undefined;
            showHelper?: boolean | undefined;
        } | undefined;
    } | undefined);
}
