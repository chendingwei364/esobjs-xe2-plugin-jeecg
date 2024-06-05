import { CzmObject, CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESVisualObject } from '../objs';
export declare class CzmESVisualObject<T extends ESVisualObject = ESVisualObject> extends CzmObject<T> {
    constructor(sceneObject: T, czmViewer: CzmViewer);
    /**
     *
     * @param id
     * @param position
     * @param viewDistance
     * @param rotation
     * @param duration 注意单位是秒
     * @param hdelta
     * @param pdelta
     */
    protected flyToWithPromise(id: number, position: [number, number, number], viewDistance?: number | undefined, rotation?: [number, number, number] | undefined, duration?: number | undefined, hdelta?: number | undefined, pdelta?: number | undefined): void;
    /**
     *
     * @param duration 注意ES对象的时间单位都是秒
     * @param id
     * @returns
     */
    flyTo(duration: number | undefined, id: number): boolean;
    /**
     *
     * @param duration 注意ES对象的时间单位都是秒
     * @param id
     * @returns
     */
    flyIn(duration: number | undefined, id: number): boolean;
}
