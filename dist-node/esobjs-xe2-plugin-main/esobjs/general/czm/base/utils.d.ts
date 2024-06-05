import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESFlyToParam, ESObjectWithLocation } from "../../..";
export declare function flyToUsingFlyToParam(czmViewer: CzmViewer, position: [number, number, number], flyToParam: ESFlyToParam, duration?: number): void;
export declare function flyToESObjectWithLocation(czmViewer: CzmViewer, sceneObject: ESObjectWithLocation, duration?: number): void;
export declare function calcFlyToParamWithESObjectWithLocation(czmViewer: CzmViewer, sceneObject: ESObjectWithLocation): void;
