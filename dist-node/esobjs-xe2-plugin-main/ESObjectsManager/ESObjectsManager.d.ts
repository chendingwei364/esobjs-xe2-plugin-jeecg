import { GroupPropTreeItem, LeafPropTreeItem, PropTree, SceneTree, SceneTreeItem, SceneTreeJsonValue, TreeItemInsertFlag } from 'xbsj-xe2/dist-node/xe2';
import { SceneObject } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, Event, JsonValue } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { PropertyCompCallbackFuncParamsType } from 'xbsj-xe2/dist-node/xe2/ProjectManager/PropertyCompCallbackFuncParamsType';
import { ESCzmViewer } from '../ESViewers/ESCzmViewer';
import { ESUeViewer } from '../ESViewers/ESUeViewer';
import { ESViewer } from '../ESViewers/ESViewer';
import { ESCameraViewCollection } from '../esobjs';
import { ViewInfo } from '../esobjs/general/objs/ESCameraViewCollection/ViewWrapper';
declare type ESViewerJsonValue = JsonValue;
export declare type ESObjectsManagerJson = {
    asset: {
        type: string;
        version: string;
        createdTime: string;
        modifiedTime: string;
        name: string;
    };
    viewers: ESViewerJsonValue[];
    sceneTree: SceneTreeJsonValue;
    viewCollection: ViewInfo[];
};
export declare type ESUEViewerOptions = {
    domid: string | HTMLElement;
    uri: string;
    app: string;
    id?: string;
};
export declare type ESCzmViewerOptions = {
    domid: string | HTMLElement;
    id?: string;
    czmOptions?: {
        [k: string]: any;
    };
};
export declare type SwitchToESUEViewerOptions = {
    domid: string | HTMLElement;
    uri: string;
    app: string;
    viewSync?: boolean;
};
export declare type SwitchToESCzmViewerOptions = {
    domid: string | HTMLElement;
    viewSync?: boolean;
};
/**
 * https://www.wolai.com/earthsdk/gRF9WpHdF9Cx1afsTHp9gt
 */
export declare class ESObjectsManager extends Destroyable {
    private _projectManager;
    private _cameraViewsManager;
    private _cameraViewCollectionDispose;
    get cameraViewsManager(): ESCameraViewCollection;
    private _asset;
    get json(): ESObjectsManagerJson;
    set json(value: ESObjectsManagerJson);
    get jsonStr(): string;
    set jsonStr(value: string);
    private _viewerCreatedEvent;
    get viewerCreatedEvent(): Event<[ESViewer]>;
    private _viewers;
    private _viewersDispose;
    getViewers(): Set<ESViewer>;
    private _activeViewer;
    get activeViewer(): ESViewer | undefined;
    set activeViewer(value: ESViewer | undefined);
    get activeViewerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ESViewer | undefined, ESViewer | undefined]>;
    createCesiumViewer(options: ESCzmViewerOptions): ESCzmViewer;
    createCesiumViewer(domid: string | HTMLElement, id?: string, czmOptions?: {
        [k: string]: any;
    }): ESCzmViewer;
    createUEViewer(options: ESUEViewerOptions): ESUeViewer;
    createUEViewer(domid: string | HTMLElement, uri: string, app: string, id?: string): ESUeViewer;
    switchToCesiumViewer(options: SwitchToESCzmViewerOptions): ESCzmViewer;
    switchToCesiumViewer(domid: string | HTMLElement, viewSync?: boolean): ESCzmViewer;
    switchToUEViewer(options: SwitchToESUEViewerOptions): ESUeViewer;
    switchToUEViewer(domid: string | HTMLElement, uri: string, app: string, viewSync?: boolean): ESUeViewer;
    private _syncOtherViewersToActived;
    get syncOtherViewersToActived(): boolean;
    set syncOtherViewersToActived(value: boolean);
    get syncOtherViewersToActivedChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _sceneTrees;
    get sceneTree(): SceneTree;
    getSceneTree(name?: string): SceneTree | undefined;
    /**
     * 默认场景树jsonLoadingEvent
     */
    get jsonLoadingEvent(): Event<[{
        type: "init" | "loading" | "loaded";
    } | {
        type: "error";
        error?: string | undefined;
    }]>;
    getSceneTrees(): SceneTree[];
    createSceneTree(options: {
        name: string;
        height?: number;
    }): SceneTree | undefined;
    createSceneTree(name: string, height?: number): SceneTree | undefined;
    createSceneObject<T extends SceneObject = SceneObject>(sceneObjectType: string | (new (id?: string | undefined) => T), id?: string): T | undefined;
    createSceneObjectFromClass<T extends SceneObject>(sceneObjConstructor: new (id?: string | undefined) => T, id?: string): T | undefined;
    createSceneObjectFromJson<T extends SceneObject>(sceneObjectJson: JsonValue & {
        [k: string]: any;
        type: string;
    }): T | undefined;
    getSceneObjectById(id: string): SceneObject | undefined;
    destroySceneObject(sceneObject: SceneObject): void;
    destroyAllSceneObjects(): void;
    createSceneObjectTreeItem<T extends SceneObject>(sceneObjectType: string | (new (id?: string | undefined) => T), id?: string, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
    createGroupTreeItem(name?: string, id?: string, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
    createSceneObjectTreeItemFromClass<T extends SceneObject>(sceneObjConstructor: new (id?: string | undefined) => T, id?: string, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
    createSceneObjectTreeItemFromJson(sceneObjectJson: JsonValue & {
        [k: string]: any;
        type: string;
    }, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
    destroySceneObjectTreeItem(sceneTreeItem: SceneTreeItem): void;
    destroyAllSceneObjectTreeItems(): void;
    get propUiTreeManager(): import("xbsj-xe2/dist-node/xe2").PropUiTreeManager;
    propTreeCallback(params: PropertyCompCallbackFuncParamsType & {
        treeItem: GroupPropTreeItem | LeafPropTreeItem;
        propTree: PropTree;
    }): void;
    getTreeItemFromSceneObject(sceneObject: SceneObject): SceneTreeItem | undefined;
    selectSingleTreeItemWithSceneObject(sceneObject: SceneObject | undefined): void;
    get sceneObjectsManager(): import("xbsj-xe2/dist-node/xe2-base-objects").SceneObjectsManager;
    private _esPlyarAndPathTime;
    constructor();
}
export {};
