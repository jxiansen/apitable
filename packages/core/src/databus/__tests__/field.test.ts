import { FieldType } from 'types';
import { MockDataBus, resetDataLoader } from './mock.databus';

const db = MockDataBus.getDatabase();

beforeAll(resetDataLoader);

describe('field info', () => {
  test('basic field info', async () => {
    const dst1 = await db.getDatasheet('dst1', {
      loadOptions: {},
      storeOptions: {},
    });
    expect(dst1).toBeTruthy();

    const view1 = await dst1!.getView('viw1');
    expect(view1).toBeTruthy();

    expect(view1!.id).toStrictEqual('viw1');

    const fields = await view1!.getFields({});

    const fieldData = fields.map((field) => ({ id: field.id, name: field.name, type: field.type }));

    expect(fieldData).toStrictEqual([
      {
        id: 'fld1',
        name: 'field 1',
        type: FieldType.Text,
      },
      {
        id: 'fld2',
        name: 'field 2',
        type: FieldType.MultiSelect,
      },
    ]);
  });
});

describe('getViewObject', () => {
  test('verbatim', async () => {
    const dst1 = await db.getDatasheet('dst1', {
      loadOptions: {},
      storeOptions: {},
    });
    expect(dst1).toBeTruthy();

    const view1 = await dst1!.getView('viw1');
    expect(view1).toBeTruthy();

    expect(view1!.id).toStrictEqual('viw1');

    const fields = await view1!.getFields({});

    expect(fields.length).toBeGreaterThan(1);

    expect(fields[1]!.getViewObject((x) => x)).toStrictEqual({
      id: 'fld2',
      name: 'field 2',
      type: FieldType.MultiSelect,
      property: {
        options: [
          {
            color: 0,
            id: 'opt1',
            name: 'option 1',
          },
          {
            color: 1,
            id: 'opt2',
            name: 'option 2',
          },
          {
            color: 2,
            id: 'opt3',
            name: 'option 3',
          },
        ],
        defaultValue: ['opt2', 'opt1'],
      },
    });
  });
});
