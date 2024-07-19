import { IReduxState } from '../../exports/store/interfaces';
import { FieldType, IEmailField, IField } from 'types/field_types';
import { DatasheetActions } from '../../commands_actions/datasheet';
import { TextBaseField } from './text_base_field';
import { getFieldDefaultProperty } from './const';
import { IEmailProperty } from 'types/field_types';
export class EmailField extends TextBaseField {
  constructor(
    public override field: IEmailField,
    public override state: IReduxState
  ) {
    super(field, state);
  }

  override get apiMetaProperty() {
    return null;
  }

  static defaultProperty() {
    return getFieldDefaultProperty(FieldType.Email) as IEmailProperty;
  }

  static createDefault(fieldMap: { [fieldId: string]: IField }): IEmailField {
    return {
      id: DatasheetActions.getNewFieldId(fieldMap),
      name: DatasheetActions.getDefaultFieldName(fieldMap),
      type: FieldType.Email,
      property: this.defaultProperty(),
    };
  }
}
