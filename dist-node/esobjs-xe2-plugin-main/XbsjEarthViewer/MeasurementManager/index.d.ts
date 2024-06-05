import { ProjectManager } from "xbsj-xe2/dist-node/xe2";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESVolumeMeasurement, ESAreaMeasurement, ESDirectionMeasurement, ESDistanceMeasurement, ESHeightMeasurement, ESLocationMeasurement, ESSurfaceAreaMeasurement } from "../../esobjs";
export declare type MeasureType = ESVolumeMeasurement | ESAreaMeasurement | ESDirectionMeasurement | ESDistanceMeasurement | ESHeightMeasurement | ESLocationMeasurement | ESSurfaceAreaMeasurement;
export declare type MeasureTypeParam = 'ESVolumeMeasurement' | 'ESAreaMeasurement' | 'ESDirectionMeasurement' | 'ESDistanceMeasurement' | 'ESHeightMeasurement' | 'ESLocationMeasurement' | 'ESSurfaceAreaMeasurement';
export declare class MeasurementManager extends Destroyable {
    private projectManager;
    private viewerManager;
    private _currentEditingType;
    get currentEditingType(): MeasureTypeParam | '';
    set currentEditingType(value: MeasureTypeParam | '');
    get currentEditingTypeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<["" | MeasureTypeParam, "" | MeasureTypeParam]>;
    private _objectlist;
    get objectlist(): MeasureType[];
    private _processing;
    constructor(projectManager: ProjectManager, viewerManager: any);
    create(type: MeasureTypeParam): void;
    clearAll(): void;
}
