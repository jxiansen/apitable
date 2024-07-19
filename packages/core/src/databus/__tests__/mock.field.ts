import { APIMetaFieldType, IAPIMetaField } from 'types';

export const mockFieldVos: IAPIMetaField[] = [
  {
    id: 'fld1',
    name: 'field 1',
    type: APIMetaFieldType.Text,
    property: undefined,
    isPrimary: true,
    editable: undefined as any,
  },
  {
    id: 'fld2',
    name: 'field 2',
    type: APIMetaFieldType.MultiSelect,
    property: {
      options: [
        {
          color: {
            name: 'deepPurple_0',
            value: '#E5E1FC',
          },
          id: 'opt1',
          name: 'option 1',
        },
        {
          color: {
            name: 'indigo_0',
            value: '#DDE7FF',
          },
          id: 'opt2',
          name: 'option 2',
        },
        {
          color: {
            name: 'blue_0',
            value: '#DDF5FF',
          },
          id: 'opt3',
          name: 'option 3',
        },
      ],
    },
    editable: undefined as any,
  },
];
