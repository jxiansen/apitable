import { getFieldOptionColor } from 'model/color';
import { ISelectField } from 'types';
import { APIMetaFieldType } from 'types/field_api_enums';
import { IOpenField } from 'types/open/open_field_read_types';
import { IUpdateOpenSingleSelectFieldProperty } from 'types/open/open_field_write_types';
import {
  getOpenFieldProperty,
  transformProperty,
  updateOpenFieldPropertyTransformProperty,
  validAddOpenProperty,
  validUpdateOpenProperty,
} from './common';

const singleSelectField: ISelectField = {
  name: 'single select field',
  id: 'fld1111',
  type: 3,
  property: {
    options: [
      {
        id: 'opt000',
        name: 'Test Label 1',
        color: 1,
      },
      {
        id: 'opt001',
        name: 'Test Label 2',
        color: 2,
      },
    ],
  },
};
const invalidIdField: ISelectField = {
  name: 'single select field',
  id: 'fld1111',
  type: 3,
  property: {
    options: [
      {
        id: '',
        name: 'Test Label 1',
        color: 0,
      },
      {
        id: '',
        name: 'Test Label 2',
        color: 0,
      },
    ],
    defaultValue: 'Test Label 1',
  },
};

const openSingleSelectField: IOpenField = {
  id: 'fld1111',
  name: 'select single field',
  type: APIMetaFieldType.SingleSelect,
  property: {
    options: [
      {
        id: 'opt000',
        name: 'Test Label 1',
        color: getFieldOptionColor(1),
      },
      {
        id: 'opt001',
        name: 'Test Label 2',
        color: getFieldOptionColor(2),
      },
    ],
  },
};

const writeOpenPropertyDelete: IUpdateOpenSingleSelectFieldProperty = {
  options: [
    {
      id: 'opt000',
      name: 'Test Label 1',
      color: 1,
    },
  ],
};

const writeOpenProperty: IUpdateOpenSingleSelectFieldProperty = {
  options: [
    {
      id: 'opt000',
      name: 'Test Label 1',
      color: 1,
    },
    {
      id: 'opt001',
      name: 'Test Label 2',
      color: 2,
    },
  ],
};

describe('Radio field read property format check', () => {
  const valid = getOpenFieldProperty(singleSelectField);
  it('correct property', function () {
    const [expectValue, receiveValue] = valid(openSingleSelectField.property);
    expect(receiveValue).toEqual(expectValue);
  });
});

describe('radio field update property check', () => {
  const valid = validUpdateOpenProperty(singleSelectField);
  it('Enter the property that will delete the option and take the side effect parameter', () => {
    const result = valid(writeOpenPropertyDelete, { enableSelectOptionDelete: true });
    expect(result).toEqual(true);
  });

  it('Enter the property that deletes the option without side effect parameters', () => {
    const result = valid(writeOpenPropertyDelete);
    expect(result).toEqual(false);
  });

  it('When the radio field update property is empty', () => {
    const result = valid(null);
    expect(result).toEqual(false);
  });
});

describe('Add property check to radio field', () => {
  const valid = validAddOpenProperty(singleSelectField);
  it('Enter the correct new property parameter', () => {
    const result = valid(writeOpenProperty);
    expect(result).toEqual(true);
  });

  it('When the new property is empty', () => {
    const result = valid(null);
    expect(result).toEqual(false);
  });
});

describe('radio field update property conversion property check', () => {
  const valid = updateOpenFieldPropertyTransformProperty(singleSelectField);
  it('Enter the correct update property parameters', () => {
    const [expectValue, receiveValue] = valid(writeOpenProperty, singleSelectField.property);
    expect(expectValue).toEqual(receiveValue);
  });
});

describe('Add a property check to the radio field', () => {
  const valid = validAddOpenProperty(singleSelectField);
  it('property has value', () => {
    const result = valid(writeOpenProperty);
    expect(result).toEqual(true);
  });

  it('when empty', () => {
    const result = valid(null);
    expect(result).toEqual(false);
  });
});

describe('transform property', () => {
  const property = transformProperty(invalidIdField);
  it('missing id, should generate option.id', () => {
    expect(property).toHaveProperty(['options', 0, 'id']);
  });

  it('missing color, should generate option.color', () => {
    expect(property).toHaveProperty(['options', 0, 'color']);
  });

  it('missing id, should change defaultValue to option.id', () => {
    expect(property).toHaveProperty(['options', 0, 'id'], property.defaultValue);
  });
});
