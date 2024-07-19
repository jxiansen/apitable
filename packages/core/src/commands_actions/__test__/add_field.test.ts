// import { action_add_field } from '@apitable/databus-wasm-nodejs';
// import { action_add_field } from '../../../../databus-wasm-nodejs';
import { DatasheetActions } from '../datasheet';
import { ISnapshot } from '../../modules/database/store/interfaces/resource';
import MockDataForAction from './mock_data/action_add_record_mock';
describe('test add field', () => {
  it('test add field in the end', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const options = {
      data: {
        id: 'fldFlJeRUPUb2',
        name: 'test',
        type: 1,
        property: null,
      },
      viewId: 'viwuTxAXZp9fR',
      index: 3,
      fieldId: undefined,
      offset: undefined,
      hiddenColumn: undefined,
    };
    const field = {
      id: 'fldFlJeRUPUb2',
      name: 'test',
      type: 1,
      property: null,
    };
    const payload = {
      viewId: options && options.viewId,
      index: options && options.index,
      fieldId: options && options.fieldId,
      offset: options && options.offset,
      hiddenColumn: options && options.hiddenColumn,
      field,
    };
    const result = DatasheetActions.addField2Action(snapshot, payload);
    // const resul2 = action_add_field(snapshot, payload);
    console.log(111);
    console.log(result);
    console.log(222);

    // expect(result).toEqual(resul2);

    // [
    //   {
    //     n: 'LI',
    //     p: [ 'meta', 'views', 0, 'columns', 3 ],
    //     li: { fieldId: 'fldFlJeRUPUb2', hidden: false }
    //   },
    //   {
    //     n: 'OI',
    //     p: [ 'meta', 'fieldMap', 'fldFlJeRUPUb2' ],
    //     oi: { id: 'fldFlJeRUPUb2', name: 'test', type: 1, property: null }
    //   }
    // ]
  });
});
