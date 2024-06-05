import { ESGeoDiv } from '../../objs';
import { UeObject, UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
export declare class UeESGeoDiv extends UeObject<ESGeoDiv> {
    static readonly type: void;
    private _screenPosition;
    get screenPosition(): [number, number] | undefined;
    get screenPositionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number] | undefined, [number, number] | undefined]>;
    set screenPosition(value: [number, number] | undefined);
    constructor(sceneObject: ESGeoDiv, ueViewer: UeViewer);
}
