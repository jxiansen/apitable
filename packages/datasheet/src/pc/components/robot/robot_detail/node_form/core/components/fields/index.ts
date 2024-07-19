

import DescriptionField from '../common/DescriptionField';
import ArrayField from './ArrayField/ArrayField';
import BooleanField from './BooleanField';
import MultiSchemaField from './MultiSchemaField';
import NullField from './NullField';
import NumberField from './NumberField';
import ObjectField from './ObjectField/ObjectField';
import SchemaField from './SchemaField/SchemaField';
import StringField from './StringField';
import { TitleField } from './TitleField';
import UnsupportedField from './UnsupportedField';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AnyOfField: MultiSchemaField,
  ArrayField,
  BooleanField,
  DescriptionField,
  NumberField,
  ObjectField,
  OneOfField: MultiSchemaField,
  SchemaField,
  StringField,
  TitleField,
  NullField,
  UnsupportedField,
};
