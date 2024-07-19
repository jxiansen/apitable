/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const KanbanFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path d="M1.5 2.75C1.5 2.05964 2.05964 1.5 2.75 1.5H4.5V11.5H2.75C2.05964 11.5 1.5 10.9404 1.5 10.25V2.75Z" fill={colors[0]} />
      <path d="M6 1.5H10V13.25C10 13.9404 9.44036 14.5 8.75 14.5H7.25C6.55964 14.5 6 13.9404 6 13.25V1.5Z" fill={colors[0]} />
      <path d="M13.25 1.5H11.5V9.5H13.25C13.9404 9.5 14.5 8.94036 14.5 8.25V2.75C14.5 2.05964 13.9404 1.5 13.25 1.5Z" fill={colors[0]} />
    </>
  ),
  name: 'kanban_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M1.5 2.75C1.5 2.05964 2.05964 1.5 2.75 1.5H4.5V11.5H2.75C2.05964 11.5 1.5 10.9404 1.5 10.25V2.75Z',
    'M6 1.5H10V13.25C10 13.9404 9.44036 14.5 8.75 14.5H7.25C6.55964 14.5 6 13.9404 6 13.25V1.5Z',
    'M13.25 1.5H11.5V9.5H13.25C13.9404 9.5 14.5 8.94036 14.5 8.25V2.75C14.5 2.05964 13.9404 1.5 13.25 1.5Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
