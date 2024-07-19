import { getNewId, IDPrefix } from '@apitable/core';

export class DatasheetDescriptionDto {
  type!: string;
  data!: IDaum[];
  render!: string;
}

interface IDaum {
  type: string;
  data: IData;
  object: string;
  children: IChildren[];
  _id: string;
}

interface IData {
  align: string;
}

interface IChildren {
  text: string;
}

export function genDatasheetDescriptionDto(text: string): DatasheetDescriptionDto {
  return {
    type: 'slate',
    data: [
      {
        type: 'paragraph',
        data: {
          align: 'alignLeft',
        },
        object: 'block',
        children: [
          {
            text,
          },
        ],
        _id: getNewId(IDPrefix.Editor),
      },
      {
        type: 'paragraph',
        data: {
          align: 'alignLeft',
        },
        object: 'block',
        children: [
          {
            text: '',
          },
        ],
        _id: getNewId(IDPrefix.Editor),
      },
    ],
    render: `<p class="ve_align_alignLeft">${text}</p><p class="ve_align_alignLeft"></p>`,
  };
}
