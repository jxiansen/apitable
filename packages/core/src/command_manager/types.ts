import { IOperation } from 'engine';
import { IFieldMap, IReduxState } from '../exports/store/interfaces';
import { ILinkedActions } from './command';
import { LinkedDataConformanceMaintainer } from 'model/linked_data_conformance_maintainer';
import { MemberFieldMaintainer } from 'model/member_maintainer';
import { ResourceType } from 'types';
import { CollaCommandName } from 'commands/enum';
import { IResourceOpsCollect } from './command_manager';

export interface ICollaCommandExecuteContext {
  state: IReduxState;
  ldcMaintainer: LinkedDataConformanceMaintainer;
  memberFieldMaintainer: MemberFieldMaintainer;
  fieldMapSnapshot: IFieldMap;
}

export enum ExecuteType {
  Execute,
  Undo,
  Redo,
}

export enum ExecuteResult {
  /** No need to execute */
  None = 'None',
  Fail = 'Fail',
  Success = 'Success',
}

export enum ExecuteFailReason {
  /** Don't know what went wrong */
  Unknown = 'Unknown',

  /** action validation failed */
  ActionError = 'ActionError',

  /** Operate on unsupported field, view */
  NotSupport = 'NotSupport',

  /** table, view name duplicate */
  NameRepeat = 'NameRepeat',

  /** The last one, cannot be deleted */
  LastOne = 'LastOne',

  /** Field type mismatch */
  FieldTypeNotMatch = 'FieldTypeNotMatch',

  /** Passed parameter problem */
  WrongOptions = 'WrongOptions',
}

export interface ICollaCommandExecuteResultBase {
  resourceId: string;
  resourceType: ResourceType;
}

export interface ICollaCommandOptionsBase extends ICollaCommandExecuteResultBase {
  cmd: CollaCommandName;
}

export interface ICollaCommandExecuteSuccessResult<T = any> extends ICollaCommandExecuteResultBase {
  result: ExecuteResult.Success;
  data?: T;
  operation: IOperation;
  linkedActions?: ILinkedActions[];
  executeType: ExecuteType;
  fieldMapSnapshot?: IFieldMap;
  resourceOpsCollects: IResourceOpsCollect[];
}

export interface ICollaCommandExecuteFailResult extends ICollaCommandExecuteResultBase {
  result: ExecuteResult.Fail;
  reason: ExecuteFailReason;
}

export interface ICollaCommandExecuteNoneResult extends ICollaCommandExecuteResultBase {
  result: ExecuteResult.None;
}

export type ICollaCommandExecuteResult<T = any> =
  | ICollaCommandExecuteSuccessResult<T>
  | ICollaCommandExecuteFailResult
  | ICollaCommandExecuteNoneResult;
