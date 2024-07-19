

import { ResourceType } from 'types';
import { IResource } from './resource.interface';

export class Mirror implements IResource {
  readonly type = ResourceType.Mirror;

  constructor(public readonly id: string, public readonly name: string) {}

  public get revision(): number {
    throw new Error('TODO');
  }
}
