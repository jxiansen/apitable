import { IResourceCommandExecutedEvent, IResourceDataChangeEvent } from './event.interface';
import { ResourceEventType } from './event.type.enum';

export type IResourceEventHandler = IResourceDataChangeEventHandler | IResourceCommandExecutedEventHandler;

export interface IResourceDataChangeEventHandler {
  type: ResourceEventType.DataChange;
  handle(event: IResourceDataChangeEvent): Promise<void> | void;
}

export interface IResourceCommandExecutedEventHandler {
  type: ResourceEventType.CommandExecuted;
  handle(event: IResourceCommandExecutedEvent): Promise<void> | void;
}
