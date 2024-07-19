

import { IReduxState } from '../../exports/store/interfaces';
import { FieldType, IField, IPhoneField,IPhoneProperty } from 'types/field_types';
import { DatasheetActions } from '../../commands_actions/datasheet';
import { TextBaseField } from './text_base_field';
import { getFieldDefaultProperty } from './const';

export class PhoneField extends TextBaseField {
  constructor(public override field: IPhoneField, state: IReduxState) {
    super(field, state);
  }

  static defaultProperty() {
    return getFieldDefaultProperty(FieldType.Phone) as IPhoneProperty;
  }

  override get apiMetaProperty() {
    return null;
  }

  static createDefault(fieldMap: { [fieldId: string]: IField }): IPhoneField {
    return {
      id: DatasheetActions.getNewFieldId(fieldMap),
      name: DatasheetActions.getDefaultFieldName(fieldMap),
      type: FieldType.Phone,
      property: this.defaultProperty(),
    };
  }
}
