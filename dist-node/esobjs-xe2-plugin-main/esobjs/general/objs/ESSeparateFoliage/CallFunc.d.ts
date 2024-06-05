import { UeViewer } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { ESTreeParam, ToCutDownScaleType, ToScaleType } from "../ESSeparateFoliage";
export declare type TreesFuncsType = {
    AddTrees: {
        params: {
            id: string;
            TreeParams: ESTreeParam[];
        };
        result: {
            error: string | undefined;
        };
    };
    RemoveAllTrees: {
        params: {
            id: string;
        };
        result: {
            error: string | undefined;
        };
    };
    UpdateTreeParams: {
        params: {
            id: string;
            TreeParams: ESTreeParam[];
        };
        result: {
            error: string | undefined;
        };
    };
    CutDownTrees: {
        params: {
            id: string;
            TreeIds: ToCutDownScaleType[];
            TimeLength: number;
        };
        result: {
            error: string | undefined;
        };
    };
    GrowthSimulation: {
        params: {
            id: string;
            ToParams: ToScaleType[];
            TimeLength: number;
            SwitchTime: number;
        };
        result: {
            error: string | undefined;
        };
    };
};
declare const addTreesCallFunc: (ueViewer: UeViewer, id: string, trees: ESTreeParam[]) => Promise<{
    error: string | undefined;
} | undefined>;
declare const removeAllTreesCallFunc: (ueViewer: UeViewer, id: string) => Promise<{
    error: string | undefined;
} | undefined>;
declare const updateTreeParamsCallFunc: (ueViewer: UeViewer, id: string, trees: ESTreeParam[]) => Promise<{
    error: string | undefined;
} | undefined>;
declare const cutDownTreesCallFunc: (ueViewer: UeViewer, id: string, TreeIds: ToCutDownScaleType[], TimeLength: number) => Promise<{
    error: string | undefined;
} | undefined>;
declare const growthSimulationCallFunc: (ueViewer: UeViewer, id: string, ToParams: ToScaleType[], TimeLength: number, SwitchTime: number) => Promise<{
    error: string | undefined;
} | undefined>;
export { addTreesCallFunc, removeAllTreesCallFunc, updateTreeParamsCallFunc, cutDownTreesCallFunc, growthSimulationCallFunc };
