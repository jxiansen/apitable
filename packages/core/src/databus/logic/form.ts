

import { ResourceType } from 'types';
import { IResource } from './resource.interface';

export class Form implements IResource {
  readonly type = ResourceType.Form;

  constructor(public readonly id: string, public readonly name: string) {}

  public get revision(): number {
    throw new Error('TODO');
  }
}
