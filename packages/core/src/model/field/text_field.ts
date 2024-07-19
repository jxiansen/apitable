

import { FieldType, IField, ITextField } from 'types/field_types';
import { DatasheetActions } from '../../commands_actions/datasheet';
import { TextBaseField } from './text_base_field';
import { getFieldDefaultProperty } from './const';
import { ITextFieldProperty } from 'types/field_types';

export class TextField extends TextBaseField {
  static defaultProperty() {
    return getFieldDefaultProperty(FieldType.Text) as ITextFieldProperty;
  }

  static createDefault(fieldMap: { [fieldId: string]: IField }): ITextField {
    return {
      id: DatasheetActions.getNewFieldId(fieldMap),
      name: DatasheetActions.getDefaultFieldName(fieldMap),
      type: FieldType.Text,
      property: this.defaultProperty(),
    };
  }
}
