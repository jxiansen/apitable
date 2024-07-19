
// import { action_add_record } from '@apitable/databus-wasm-nodejs';
import { DatasheetActions } from '../datasheet';
import { ISnapshot } from '../../modules/database/store/interfaces/resource';
import MockDataForAction from './mock_data/action_add_record_mock';
describe('test add record', () => {

  it('test del field in the end', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = {
      fieldId: 'fldZ5s95v7tE6',
      datasheetId: 'dstckW8kzoZiUDMR76',
      viewId: 'viwuTxAXZp9fR'
    };
    const result = DatasheetActions.deleteField2Action(snapshot, payload);
    console.log(result);
    // const resul2 = action_add_record(snapshot, payload);
    
    // expect(result).toEqual(resul2);

  //   [
  //     {
  //         "n": "LD",
  //         "p": [
  //             "meta",
  //             "views",
  //             0,
  //             "columns",
  //             3
  //         ],
  //         "ld": {
  //             "hidden": false,
  //             "fieldId": "fldZ5s95v7tE6"
  //         }
  //     },
  //     {
  //         "n": "OD",
  //         "p": [
  //             "meta",
  //             "fieldMap",
  //             "fldZ5s95v7tE6"
  //         ],
  //         "od": {
  //             "id": "fldZ5s95v7tE6",
  //             "name": "多行文本",
  //             "type": 1,
  //             "property": null
  //         }
  //     }
  // ]
  });
});