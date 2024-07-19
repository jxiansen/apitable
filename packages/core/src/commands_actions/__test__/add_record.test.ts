import { action_add_record } from '@apitable/databus-wasm-nodejs';
import { DatasheetActions } from '../datasheet';
import { ISnapshot } from '../../modules/database/store/interfaces/resource';
import MockDataForAction from './mock_data/action_add_record_mock';
describe('test add record', () => {
  it('test insert record in the end', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = {
      viewId: 'viwDtemXMuFxz',
      record: {
        id: 'reclj2P5LfpTF',
        data: {},
        commentCount: 0,
        comments: [],
        recordMeta: {},
      },
      index: 3,
      newRecordIndex: 0,
    };
    const result = DatasheetActions.addRecord2Action(snapshot, payload);
    const resul2 = action_add_record(snapshot, payload);

    expect(result).toEqual(resul2);
  });

  it('test insert record in the start', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = {
      viewId: 'viwDtemXMuFxz',
      record: {
        id: 'recslko04eos1',
        data: {},
        commentCount: 0,
        comments: [],
        recordMeta: {},
      },
      index: 0,
      newRecordIndex: 0,
    };
    const result = DatasheetActions.addRecord2Action(snapshot, payload);
    const resul2 = action_add_record(snapshot, payload);

    expect(result).toEqual(resul2);
  });

  it('test insert record in the middle', () => {
    const snapshot = MockDataForAction as any as ISnapshot;
    const payload = {
      viewId: 'viwDtemXMuFxz',
      record: {
        id: 'recyYpNFsYmUo',
        data: {},
        commentCount: 0,
        comments: [],
        recordMeta: {},
      },
      index: 2,
      newRecordIndex: 0,
    };
    const result = DatasheetActions.addRecord2Action(snapshot, payload);
    const resul2 = action_add_record(snapshot, payload);

    expect(result).toEqual(resul2);
  });
});
