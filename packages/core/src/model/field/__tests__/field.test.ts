import { mock, Random } from 'mockjs';
import { mockState } from '../../../formula_parser/__tests__/mock_state';
import { FieldType } from '../../../types';
import { Field } from '../index';

const create500ThousandArray = (itemType: string) => {
  const arr: string[] = [];
  for (let i = 0; i < 10000; i++) {
    switch (itemType) {
      case 'zh':
        arr.push(Random.csentence(10, 30));
        break;
      case 'number':
        arr.push(String(Random.natural()));
        break;
      case 'date':
        arr.push(Random.datetime());
        break;
      case 'url':
        arr.push(Random.url());
        break;
      case 'email':
        arr.push(Random.email());
        break;
      case 'phone':
        arr.push(`136${mock(/\d{8}/)}`);
        break;
      default:
    }
  }
  return arr;
};

const compare = (fType: any, type: number, itemType: string, expectTime = 1000) => {
  const field = {
    id: 'b',
    name: 'b',
    type: fType,
    property: null,
  } as any;
  const fieldMethod = Field.bindContext(field, mockState as any) as Field;
  const data = create500ThousandArray(itemType);
  const begin = +new Date();
  // const zhIntlCollator = typeof Intl !== 'undefined' ? new Intl.Collator('zh-CN') : undefined;
  data.sort((pre, cur) => {
    return fieldMethod.compare([{ text: pre, type }], [{ text: cur, type }], false);
  });
  const end = +new Date();
  expect(end - begin).toBeLessThan(expectTime);
};

describe('', () => {
  it('should ', function () {
    console.log(create500ThousandArray, compare);
  });
});

describe.skip('10,000 data test field sorting', () => {
  it('Chinese single-line text sorting takes less than 1000ms', () => {
    compare(FieldType.Text, 1, 'zh');
  });
  it('Number sorting takes less than 1000ms', () => {
    compare(FieldType.Number, 2, 'number');
  });
  it('Date sorting takes less than 1000ms', () => {
    compare(FieldType.DateTime, 5, 'date');
  });
  it('Link sorting takes less than 1000ms', () => {
    compare(FieldType.URL, 8, 'url');
  });
  it('Mail sorting takes less than 1000ms', () => {
    compare(FieldType.Email, 9, 'email');
  });
  it('Phone number sorting takes less than 1000ms', () => {
    compare(FieldType.Phone, 10, 'phone');
  });
});
