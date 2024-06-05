import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESObjectWithLocation } from '../objs';
import { CzmESVisualObject } from './CzmESVisualObject';
import { CzmESPrsEditing } from "../../utils/CzmESPrsEditing";
export declare class CzmESObjectWithLocation<T extends ESObjectWithLocation = ESObjectWithLocation> extends CzmESVisualObject<T> {
    private _sPrsEditing;
    private _sPrsEditingInit;
    get sPrsEditing(): CzmESPrsEditing;
    constructor(sceneObject: T, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
