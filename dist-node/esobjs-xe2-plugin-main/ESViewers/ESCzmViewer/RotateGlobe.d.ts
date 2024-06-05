import { Destroyable } from "xbsj-renderer/dist-node/xr-base-utils";
import { ESCzmViewer } from ".";
export declare class RotateGlobe extends Destroyable {
    private _eSCzmViewer;
    get eSCzmViewer(): ESCzmViewer;
    /**
     * 相机高度
     * @type {number}
     * @instance
     * @default 10000000
     * @memberof RotateGlobe
     */
    private _height;
    get height(): number;
    set height(value: number);
    get heightChanged(): import("xbsj-renderer/dist-node/xr-base-utils").Listener<[number, number]>;
    /**
     * 飞行一圈的周期，单位为秒
     * @type {number}
     * @instance
     * @default 60
     * @memberof RotateGlobe
     */
    private _cycle;
    get cycle(): number;
    set cycle(value: number);
    get cycleChanged(): import("xbsj-renderer/dist-node/xr-base-utils").Listener<[number, number]>;
    /**
     * 相机所在纬线高度 单位弧度
     * @type {number}
     * @instance
     * @default 北纬38°
     * @memberof RotateGlobe
     */
    private _latitude;
    get latitude(): number;
    set latitude(value: number);
    get latitudeChanged(): import("xbsj-renderer/dist-node/xr-base-utils").Listener<[number, number]>;
    private _inner;
    /**
     * 启动环绕地球
     * @returns
     */
    start(): void | undefined;
    /**
     * 取消环绕地球
     * @returns
     */
    cancel(): void | undefined;
    constructor(_eSCzmViewer: ESCzmViewer);
}
