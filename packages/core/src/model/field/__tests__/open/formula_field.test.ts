import { APIMetaFieldPropertyFormatEnums, APIMetaFieldType, BasicValueType, DateFormat, FieldType, IFormulaField, TimeFormat } from 'types';
import { IOpenField } from 'types/open/open_field_read_types';
import { IUpdateOpenFormulaFieldProperty } from 'types/open/open_field_write_types';
import { getOpenFieldProperty, updateOpenFieldPropertyTransformProperty, validAddOpenProperty, validUpdateOpenProperty } from './common';

const formulaField: IFormulaField = {
  name: 'Formula Field',
  id: 'fld1111',
  type: FieldType.Formula,
  property: {
    datasheetId: 'dst1111',
    expression: "WORKDAY('2020/10/01' , 1)",
    formatting: {
      dateFormat: DateFormat['YYYY/MM/DD'],
      includeTime: true,
      timeFormat: TimeFormat['HH:mm'],
    },
  },
};

const openFormulaField: IOpenField = {
  name: 'Formula Field',
  id: 'fld1111',
  type: APIMetaFieldType.Formula,
  property: {
    expression: "WORKDAY('2020/10/01' , 1)",
    valueType: BasicValueType.DateTime,
    hasError: false,
    format: {
      type: APIMetaFieldPropertyFormatEnums.DateTime,
      format: {
        dateFormat: 'YYYY/MM/DD',
        timeFormat: 'HH:mm',
        includeTime: true,
      },
    },
  },
};

const propertyOptionalFill: IUpdateOpenFormulaFieldProperty = {
  expression: "WORKDAY('2020/10/01' , 1)",
  format: {
    type: APIMetaFieldPropertyFormatEnums.DateTime,
    format: {
      dateFormat: 'YYYY/MM/DD',
      timeFormat: 'HH:mm',
      includeTime: true,
    },
  },
};

const propertyOptionalNotFill: IUpdateOpenFormulaFieldProperty = {};

describe('The formula field reads the property format check', () => {
  const valid = getOpenFieldProperty(formulaField);
  it('correct property', function () {
    const [expectValue, receiveValue] = valid(openFormulaField.property);
    expect(receiveValue).toEqual(expectValue);
  });
});

describe('Formula field update property check', () => {
  const valid = validUpdateOpenProperty(formulaField);
  it('Do not fill in optional fields', () => {
    const result = valid(propertyOptionalNotFill);
    expect(result).toEqual(true);
  });

  it('fill in optional fields', () => {
    const result = valid(propertyOptionalFill);
    expect(result).toEqual(true);
  });

  it('When the update property is empty', () => {
    const result = valid(null);
    expect(result).toEqual(false);
  });
});

describe('Formula field update property conversion property check', () => {
  const valid = updateOpenFieldPropertyTransformProperty(formulaField);
  it('Do not fill in optional fields', () => {
    const [expectValue, receiveValue] = valid(propertyOptionalNotFill, {
      datasheetId: formulaField.property.datasheetId,
      expression: '',
    });
    expect(expectValue).toEqual(receiveValue);
  });

  it('fill in optional fields', () => {
    const [expectValue, receiveValue] = valid(propertyOptionalFill, formulaField.property);
    expect(expectValue).toEqual(receiveValue);
  });
});

describe('Add property check to formula field field', () => {
  const valid = validAddOpenProperty(formulaField);
  it('Do not fill in optional fields', () => {
    const result = valid(propertyOptionalNotFill);
    expect(result).toEqual(true);
  });

  it('fill in optional fields', () => {
    const result = valid(propertyOptionalFill);
    expect(result).toEqual(true);
  });

  it('when empty', () => {
    const result = valid(null);
    expect(result).toEqual(false);
  });
});
