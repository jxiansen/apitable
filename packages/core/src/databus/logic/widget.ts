import { ResourceType } from 'types';
import { IResource } from './resource.interface';

export class Widget implements IResource {
  readonly type = ResourceType.Widget;

  constructor(
    public readonly id: string,
    public readonly name: string
  ) {}

  public get revision(): number {
    throw new Error('TODO');
  }
}
