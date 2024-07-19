import { action_set_cell } from '@apitable/databus-wasm-nodejs';
import { DatasheetActions } from '../datasheet';
import { ISnapshot } from '../../modules/database/store/interfaces/resource';
import MockDataForAction from './mock_data/action_mock';
describe('test set record', () => {
  it('test record map have no data', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = { recordId: 'x', fieldId: 'x', value: null };
    const result = DatasheetActions.setRecord2Action(snapshot, payload);
    const resul2 = action_set_cell(snapshot, payload);
    expect(result === null).toBe(true);
    expect(result).toEqual(resul2);
  });

  it('test no diff to update', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload: any = {
      recordId: 'reclx3H5CZbZP',
      fieldId: 'fldmHjmSjZxVn',
      value: [
        {
          text: '说的是',
          type: 1,
        },
      ],
    };
    const result = action_set_cell(snapshot, payload);

    let result3 = DatasheetActions.setRecord2Action(snapshot, payload);

    expect(result).toEqual(result3);
    expect(result === null).toBe(true);

    payload.fieldId = 'xxx';
    payload.value = null;
    const result2 = action_set_cell(snapshot, payload);
    result3 = DatasheetActions.setRecord2Action(snapshot, payload);
    expect(result2 === null).toBe(true);
    expect(result2).toEqual(result3);
  });

  it('test not modify', () => {
    const result_base = {
      n: 'OD',
      od: [{ text: '说的是', type: 1 }],
      p: ['recordMap', 'reclx3H5CZbZP', 'data', 'fldmHjmSjZxVn'],
    };
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload: any = { recordId: 'reclx3H5CZbZP', fieldId: 'fldmHjmSjZxVn', value: null };
    const result = action_set_cell(snapshot, payload);
    const result3 = DatasheetActions.setRecord2Action(snapshot, payload);

    expect(result !== null).toBe(true);
    expect(result).toEqual(result_base);
    expect(result).toEqual(result3);

    payload.value = [];
    const result2 = action_set_cell(snapshot, payload);
    expect(result2 !== null).toBe(true);
    const result4 = DatasheetActions.setRecord2Action(snapshot, payload);
    expect(result2).toEqual(result_base);
    expect(result2).toEqual(result4);
  });
  it('test add data', () => {
    const result_base = {
      n: 'OI',
      oi: ['reciZgdFWE4eC'],
      p: ['recordMap', 'recthZXaIAaOW', 'data', 'fldpYxbYNp5L4'],
    };
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = { recordId: 'recthZXaIAaOW', fieldId: 'fldpYxbYNp5L4', value: ['reciZgdFWE4eC'] };
    const result = action_set_cell(snapshot, payload);
    const result3 = DatasheetActions.setRecord2Action(snapshot, payload);

    expect(result !== null).toBe(true);
    expect(result).toEqual(result_base);
    expect(result).toEqual(result3);
  });

  it('test replace data', () => {
    const result_base = {
      n: 'OR',
      od: [{ text: '说的是', type: 1 }],
      oi: [{ text: '说的是你吗', type: 1 }],
      p: ['recordMap', 'reclx3H5CZbZP', 'data', 'fldmHjmSjZxVn'],
    };
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = {
      recordId: 'reclx3H5CZbZP',
      fieldId: 'fldmHjmSjZxVn',
      value: [
        {
          text: '说的是你吗',
          type: 1,
        },
      ],
    };
    const result = action_set_cell(snapshot, payload);
    const result3 = DatasheetActions.setRecord2Action(snapshot, payload);
    expect(result !== null).toBe(true);
    expect(result).toEqual(result_base);
    expect(result).toEqual(result3);
  });
});
