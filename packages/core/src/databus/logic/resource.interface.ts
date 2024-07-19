

import { ResourceType } from 'types';

/**
 * `IResource` represents a resource in APITable.
 */
export interface IResource {
  readonly id: string;
  readonly type: ResourceType;
  readonly name: string;

  /**
   * The revision number of the resource
   */
  readonly revision: number;
}
