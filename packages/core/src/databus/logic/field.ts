

import { IReduxState } from 'exports/store/interfaces';
import { Store } from 'redux';
import { FieldType, IField } from 'types';

export class Field {
  constructor(private readonly field: IField, private readonly store: Store<IReduxState>) {}

  get id(): string {
    return this.field.id;
  }

  get name(): string {
    return this.field.name;
  }

  get type(): FieldType {
    return this.field.type;
  }

  /**
   * Get the view object of the field via `transform`.
   */
  getViewObject<R>(transform: (field: IField, options: IFieldVoTransformOptions) => R): R {
    return transform(this.field, { state: this.store.getState() });
  }
}

/**
 * The options for the field view object transformer function.
 */
export interface IFieldVoTransformOptions {
  state: IReduxState
}