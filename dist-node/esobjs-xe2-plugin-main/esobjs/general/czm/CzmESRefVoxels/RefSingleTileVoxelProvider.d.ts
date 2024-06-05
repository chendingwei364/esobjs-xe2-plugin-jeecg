import * as Cesium from 'cesium';

export declare class RefSingleTileVoxelProvider {
    constructor(options: {
        center: { x: number, y: number, z: number },
        x: { dimension: number, resolution: number },
        y: { dimension: number, resolution: number },
        z: { dimension: number, resolution: number },
        values: [number, number, number, number][],
        toColor: (value: number, color: Cesium.Color) => void;
    });

    caculModelMatrix(scale: number): Cesium.Matrix4;
}