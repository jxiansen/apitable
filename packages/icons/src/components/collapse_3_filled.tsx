/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const Collapse3Filled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M11.7603 5.29959C12.0639 5.01774 12.0814 4.54319 11.7996 4.23966C11.5177 3.93613 11.0432 3.91855 10.7397 4.2004L7.23966 7.4504C7.08684 7.59231 7 7.79145 7 8C7 8.20855 7.08684 8.40769 7.23966 8.54959L10.7397 11.7996C11.0432 12.0814 11.5177 12.0639 11.7996 11.7603C12.0814 11.4568 12.0639 10.9823 11.7603 10.7004L8.85221 8L11.7603 5.29959Z"
        fill={colors[0]}
      />
      <path
        d="M5.5 4.75C5.5 4.33579 5.16421 4 4.75 4C4.33579 4 4 4.33579 4 4.75V11.25C4 11.6642 4.33579 12 4.75 12C5.16421 12 5.5 11.6642 5.5 11.25V4.75Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'collapse_3_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M11.7603 5.29959C12.0639 5.01774 12.0814 4.54319 11.7996 4.23966C11.5177 3.93613 11.0432 3.91855 10.7397 4.2004L7.23966 7.4504C7.08684 7.59231 7 7.79145 7 8C7 8.20855 7.08684 8.40769 7.23966 8.54959L10.7397 11.7996C11.0432 12.0814 11.5177 12.0639 11.7996 11.7603C12.0814 11.4568 12.0639 10.9823 11.7603 10.7004L8.85221 8L11.7603 5.29959Z',
    'M5.5 4.75C5.5 4.33579 5.16421 4 4.75 4C4.33579 4 4 4.33579 4 4.75V11.25C4 11.6642 4.33579 12 4.75 12C5.16421 12 5.5 11.6642 5.5 11.25V4.75Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
