import {
  CollaCommandManager,
  ComputeRefManager,
  Engine,
  IError,
  IJOTAction,
  IReduxState,
  IResourceOpsCollect,
  OPEventManager,
  ResourceType,
} from 'core';
import { Store } from 'redux';
import { databus } from '@apitable/core';

export interface IResourceService {
  init(): void;
  createCollaEngine(resourceId: string, resourceType: ResourceType): boolean;
  readonly socket: SocketIOClient.Socket;
  /**
   * @deprecated This is a temporary member. All dependencies of CommandManager in the front-end will be removed in the future.
   */
  readonly commandManager: CollaCommandManager;
  readonly currentResource: databus.Datasheet | undefined;
  readonly opEventManager: OPEventManager;
  readonly computeRefManager: ComputeRefManager;
  getCollaEngine(resourceId: string): Engine | undefined;
  destroy(): void;
  reset(resourceId: string, resourceType: ResourceType): void;
  getCollaEngineKeys(): IterableIterator<string>;
  checkRoomExist(): boolean;
  switchResource(params: { from?: string; to: string; resourceType: ResourceType }): void;
  onNewChanges(resourceType: ResourceType, resourceId: string, actions: IJOTAction[]): any;
  applyOperations(store: Store<IReduxState>, resourceOpsCollects: IResourceOpsCollect[]): void;
}

export type IServiceError = (error: IError, type: 'modal' | 'message' | 'subscribeUsage') => void;
