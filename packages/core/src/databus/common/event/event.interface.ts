import { IResourceOpsCollect } from 'command_manager';
import { IError } from 'types';
import { CommandExecutionResultType } from './command.execution.result.type.enum';
import { ResourceEventType } from './event.type.enum';

export type IResourceEvent = IResourceDataChangeEvent | IResourceCommandExecutedEvent;

export type IResourceDataChangeEvent = INewRecordsEvent;

export interface INewRecordsEvent {
  type: ResourceEventType.DataChange;
}

export type IResourceCommandExecutedEvent = IResourceCommandExecutedSuccessEvent | IResourceCommandExecutedFailEvent;

export interface IResourceCommandExecutedSuccessEvent {
  type: ResourceEventType.CommandExecuted;

  /**
   * The result of the command execution.
   */
  execResult: CommandExecutionResultType.Success;

  /**
   * Resource OPs collected by the `CollaCommandManager`.
   */
  resourceOpCollections: IResourceOpsCollect[];
}

export interface IResourceCommandExecutedFailEvent {
  type: ResourceEventType.CommandExecuted;

  /**
   * The result of the command execution.
   */
  execResult: CommandExecutionResultType.Error;

  /**
   * The error of the command execution.
   */
  error: IError;

  /**
   * The error type of the command execution.
   */
  errorType?: 'message' | 'modal' | 'subscribeUsage';
}
