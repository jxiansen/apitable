import { IFieldProps } from '../../interface';

import { getWidget, getUiOptions, optionsList, getDefaultRegistry } from '../../utils';

function BooleanField(props: IFieldProps) {
  const {
    schema,
    name,
    uiSchema = {},
    idSchema,
    formData,
    registry = getDefaultRegistry(),
    required,
    disabled = false,
    readonly = false,
    autofocus = false,
    onChange,
    onFocus,
    onBlur,
    rawErrors,
  } = props;
  const { title } = schema;
  const { widgets, formContext, fields } = registry;
  const { widget = 'checkbox', ...options } = getUiOptions(uiSchema)!;
  const Widget = getWidget(schema, widget as any, widgets as any) as any;

  let enumOptions;

  if (Array.isArray(schema.oneOf)) {
    enumOptions = optionsList({
      oneOf: schema.oneOf.map((option: any) => ({
        ...option,
        title: option.title || (option.const === true ? 'Yes' : 'No'),
      })),
    });
  } else {
    enumOptions = optionsList({
      enum: schema.enum || [true, false],
      enumNames: (schema as any).enumNames || (schema.enum && schema.enum[0] === false ? ['No', 'Yes'] : ['Yes', 'No']),
    });
  }

  return (
    <Widget
      options={{ ...options, enumOptions }}
      schema={schema}
      id={idSchema && idSchema.$id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      label={title === undefined ? name : title}
      value={formData}
      required={required}
      disabled={disabled}
      readonly={readonly}
      registry={registry}
      formContext={formContext}
      autofocus={autofocus}
      rawErrors={rawErrors}
      DescriptionField={fields.DescriptionField}
    />
  );
}

export default BooleanField;
