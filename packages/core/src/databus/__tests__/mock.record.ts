

import { IJOTAction, IOperation, OTActionName } from 'engine';
import { IRecord, IRecordCellValue } from 'exports/store/interfaces';
import { SegmentType } from 'types';

export const mockRecordVoTransformer = (() => {
  return (record: IRecord) => {
    return record;
  };
})();

export const mockRecordValues: IRecordCellValue[] = [
  {
    fld1: [{ type: SegmentType.Text, text: 'text4' }],
    fld2: ['opt2'],
  },
  {
    fld1: [{ type: SegmentType.Text, text: 'text5' }],
  },
  {
    fld2: ['opt1', 'opt3', 'opt2'],
  },
];

export const mockRecords: IRecord[] = [
  {
    id: 'rec4',
    data: {
      fld1: [{ type: SegmentType.Text, text: 'text4' }],
      fld2: ['opt2'],
    },
    comments: [],
    commentCount: 0,
    recordMeta: {},
  },
  {
    id: 'rec5',
    data: {
      fld1: [{ type: SegmentType.Text, text: 'text5' }],
      fld2: ['opt2', 'opt1'],
    },
    comments: [],
    commentCount: 0,
    recordMeta: {},
  },
  {
    id: 'rec6',
    data: {
      fld1: null,
      fld2: ['opt1', 'opt3', 'opt2'],
    },
    comments: [],
    commentCount: 0,
    recordMeta: {},
  },
];

export const mockDefaultRecord: IRecord = {
  id: 'rec4',
  data: {
    fld2: ['opt2', 'opt1'],
  },
  comments: [],
  commentCount: 0,
  recordMeta: {},
};

export const mockOperationOfAddRecords = (
  records: { id: string; rows: { view: number; index: number }[]; values?: IRecordCellValue }[],
): IOperation => ({
  actions: records.flatMap(({ id, rows, values }) => [
    ...rows.map(
      ({ view, index }) =>
        ({
          li: {
            recordId: id,
          },
          n: OTActionName.ListInsert,
          p: ['meta', 'views', view, 'rows', index],
        } as IJOTAction),
    ),
    {
      n: OTActionName.ObjectInsert,
      oi: {
        commentCount: 0,
        comments: [],
        data: values ?? {
          fld2: ['opt2', 'opt1'],
        },
        id,
        recordMeta: {},
      },
      p: ['recordMap', id],
    },
  ]),
  cmd: 'AddRecords',
  fieldTypeMap: records.some(({ values }) => values && 'fld1' in values)
    ? { fld1: 1, fld2: 4 }
    : {
      fld2: 4,
    },
});
