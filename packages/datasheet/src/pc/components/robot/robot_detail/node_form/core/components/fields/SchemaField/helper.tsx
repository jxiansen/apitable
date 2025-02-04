import { JSONSchema7 } from 'json-schema';
import * as React from 'react';
import { COMPONENT_TYPES } from '../../../const';
import { IdSchema, IUiSchema } from '../../../interface';
import { getSchemaType } from '../../../utils';

export function getFieldComponent(
  schema: JSONSchema7,
  uiSchema: IUiSchema,
  idSchema: IdSchema,
  fields: {
    [name: string]: React.ElementType;
  },
) {
  const field = uiSchema['ui:field'];
  if (typeof field === 'function') {
    return field;
  }
  if (typeof field === 'string' && field in fields) {
    return fields[field];
  }

  const schemaType: any = getSchemaType(schema);
  const componentName = COMPONENT_TYPES[schemaType];

  // If the type is not defined and the schema uses 'anyOf' or 'oneOf', don't
  // render a field and let the MultiSchemaField component handle the form display
  if (!componentName && (schema.anyOf || schema.oneOf)) {
    return () => null;
  }

  return componentName in fields
    ? fields[componentName]
    : () => {
        const { UnsupportedField } = fields;

        return <UnsupportedField schema={schema} idSchema={idSchema} reason={`Unknown field type ${schema.type}`} />;
      };
}
