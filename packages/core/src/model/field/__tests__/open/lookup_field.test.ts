import { APIMetaFieldPropertyFormatEnums, DateFormat, FieldType, ILookUpField, RollUpFuncType, TimeFormat } from 'types';
import { IUpdateOpenMagicLookUpFieldProperty } from 'types/open/open_field_write_types';
import { getOpenFieldProperty, updateOpenFieldPropertyTransformProperty, validAddOpenProperty, validUpdateOpenProperty } from './common';

const lookupField: ILookUpField = {
  name: 'lookup field',
  id: 'fld1111',
  type: FieldType.LookUp,
  property: {
    datasheetId: 'dst123',
    relatedLinkFieldId: 'fldxxxx',
    lookUpTargetFieldId: 'fldccc',
    rollUpType: RollUpFuncType.AND,
    formatting: {
      dateFormat: DateFormat['YYYY/MM/DD'],
      includeTime: true,
      timeFormat: TimeFormat['HH:mm'],
    },
  },
};

// const openLookUpField: IOpenField = {
// name: 'lookup field',
// id: 'fld1111',
// type: APIMetaFieldType.MagicLookUp,
// property: {
// relatedLinkFieldId: 'fldxxxx',
// targetFieldId: 'fldccc',
// hasError: false,
// rollupFunction: RollUpFuncType.AND,
// valueType: 'String',
// format: {
// type: APIMetaFieldPropertyFormatEnums.DateTime,
// format: {
// dateFormat: 'YYYY/MM/DD',
// timeFormat: 'HH:mm',
// includeTime: true
// }
// }
// }
// };

const propertyOptionalFill: IUpdateOpenMagicLookUpFieldProperty = {
  relatedLinkFieldId: 'fldxxxx',
  targetFieldId: 'fldccc',
  rollupFunction: RollUpFuncType.AND,
  format: {
    type: APIMetaFieldPropertyFormatEnums.DateTime,
    format: {
      dateFormat: 'YYYY/MM/DD',
      timeFormat: 'HH:mm',
      includeTime: true,
    },
  },
};

const propertyOptionalNotFill: IUpdateOpenMagicLookUpFieldProperty = {
  relatedLinkFieldId: 'fldxxxx',
  targetFieldId: 'fldccc',
};

describe('Magic reference field read property format check', () => {
  const valid = getOpenFieldProperty(lookupField);
  it('correct property', function () {
    const [expectValue, receiveValue] = valid({
      hasError: true,
      relatedLinkFieldId: 'fldxxxx',
      rollupFunction: RollUpFuncType.AND,
      targetFieldId: 'fldccc',
    });
    expect(receiveValue).toEqual(expectValue);
  });
});

describe('Magic reference field update property check', () => {
  const valid = validUpdateOpenProperty(lookupField);
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

describe('Magic reference field update property conversion property check', () => {
  const valid = updateOpenFieldPropertyTransformProperty(lookupField);
  it('Do not fill in optional fields', () => {
    const [expectValue, receiveValue] = valid(propertyOptionalNotFill, {
      relatedLinkFieldId: 'fldxxxx',
      lookUpTargetFieldId: 'fldccc',
      datasheetId: lookupField.property.datasheetId,
    });
    expect(expectValue).toEqual(receiveValue);
  });

  it('fill in optional fields', () => {
    const [expectValue, receiveValue] = valid(propertyOptionalFill, lookupField.property);
    expect(expectValue).toEqual(receiveValue);
  });
});

describe('Magic reference field added property check', () => {
  const valid = validAddOpenProperty(lookupField);
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
