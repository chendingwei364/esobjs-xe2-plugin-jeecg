import { ESFillStyle, ESGeoVector, ESPointStyle, ESStrokeStyle } from '../../objs';
import { UeViewer } from 'xbsj-xe2/dist-node/xe2-ue-objects';
import { UeESVisualObject } from '../UeESVisualObject';
export declare class UeESGeoVector<T extends ESGeoVector = ESGeoVector> extends UeESVisualObject<T> {
    static forceUeUpdateProps: string[];
    static propValFuncs: {
        pointStyle: (val: ESPointStyle) => {
            materialParams: string;
            size: number;
            sizeType: import("../../objs").WidthType;
            color: [number, number, number, number];
            material: string;
        };
        strokeStyle: (val: ESStrokeStyle) => {
            materialParams: string;
            width: number;
            widthType: import("../../objs").WidthType;
            color: [number, number, number, number];
            material: string;
        };
        fillStyle: (val: ESFillStyle) => {
            materialParams: string;
            color: [number, number, number, number];
            material: string;
            ground: boolean;
        };
    };
    constructor(sceneObject: T, ueViewer: UeViewer);
}
