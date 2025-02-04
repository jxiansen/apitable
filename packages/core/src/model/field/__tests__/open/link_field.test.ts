import { APIMetaFieldType, FieldType, ILinkField } from 'types';
import { IOpenField } from 'types/open/open_field_read_types';
import { Conversion, IUpdateOpenMagicLinkFieldProperty } from 'types/open/open_field_write_types';
import { getOpenFieldProperty, updateOpenFieldPropertyTransformProperty, validAddOpenProperty, validUpdateOpenProperty } from './common';

const linkField: ILinkField = {
  name: 'Link field',
  id: 'fld1111',
  type: FieldType.Link,
  property: {
    foreignDatasheetId: 'dst111111',
    brotherFieldId: 'fld1111111',
    limitToView: 'viw111111',
    limitSingleRecord: false,
  },
};

const openLinkField: IOpenField = {
  name: 'Link field',
  id: 'fld1111',
  type: APIMetaFieldType.MagicLink,
  property: {
    foreignDatasheetId: 'dst111111',
    brotherFieldId: 'fld1111111',
    limitToViewId: 'viw111111',
    limitSingleRecord: false,
  },
};

const propertyOptionalFill: IUpdateOpenMagicLinkFieldProperty = {
  foreignDatasheetId: 'dst2222',
  limitToViewId: 'viw22222',
  limitSingleRecord: false,
  conversion: Conversion.KeepText,
};

const propertyOptionalNotFill: IUpdateOpenMagicLinkFieldProperty = {
  foreignDatasheetId: 'dst2222',
};

describe('Magic Link field read property format check', () => {
  const valid = getOpenFieldProperty(linkField);
  it('correct property', function () {
    const [expectValue, receiveValue] = valid(openLinkField.property);
    expect(expectValue).toEqual(receiveValue);
  });
});

describe('Magic associated field update property check', () => {
  const valid = validUpdateOpenProperty(linkField);
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

describe('Magic Link field update property conversion property check', () => {
  const valid = updateOpenFieldPropertyTransformProperty(linkField);
  it('Do not fill in optional fields', () => {
    const [expectValue, receiveValue] = valid(propertyOptionalNotFill, propertyOptionalNotFill);
    expect(expectValue).toEqual(receiveValue);
  });

  it('fill in optional fields', () => {
    const [expectValue, receiveValue] = valid(propertyOptionalFill, {
      foreignDatasheetId: 'dst2222',
      limitToView: 'viw22222',
      limitSingleRecord: false,
    });
    expect(expectValue).toEqual(receiveValue);
  });
});

describe('Magic Link field added property check', () => {
  const valid = validAddOpenProperty(linkField);
  it('Do not fill in optional fields', () => {
    const result = valid(propertyOptionalNotFill);
    expect(result).toEqual(true);
  });

  it('fill in Link fields', () => {
    const result = valid(propertyOptionalFill);
    expect(result).toEqual(true);
  });

  it('when empty', () => {
    const result = valid(null);
    expect(result).toEqual(false);
  });
});
