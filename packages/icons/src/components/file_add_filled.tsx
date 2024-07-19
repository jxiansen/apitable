/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const FileAddFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M3.25 1C2.55964 1 2 1.55964 2 2.25V13.75C2 14.4404 2.55964 15 3.25 15H12.75C13.4404 15 14 14.4404 14 13.75V5.01023C14 4.68318 13.8718 4.36915 13.6429 4.13551L10.939 1.37528C10.7039 1.13526 10.3821 1 10.0461 1H3.25ZM8 5C8.41421 5 8.75 5.33579 8.75 5.75V7.25H10.25C10.6642 7.25 11 7.58579 11 8C11 8.41421 10.6642 8.75 10.25 8.75H8.75V10.25C8.75 10.6642 8.41421 11 8 11C7.58579 11 7.25 10.6642 7.25 10.25V8.75H5.75C5.33579 8.75 5 8.41421 5 8C5 7.58579 5.33579 7.25 5.75 7.25H7.25V5.75C7.25 5.33579 7.58579 5 8 5Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'file_add_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M3.25 1C2.55964 1 2 1.55964 2 2.25V13.75C2 14.4404 2.55964 15 3.25 15H12.75C13.4404 15 14 14.4404 14 13.75V5.01023C14 4.68318 13.8718 4.36915 13.6429 4.13551L10.939 1.37528C10.7039 1.13526 10.3821 1 10.0461 1H3.25ZM8 5C8.41421 5 8.75 5.33579 8.75 5.75V7.25H10.25C10.6642 7.25 11 7.58579 11 8C11 8.41421 10.6642 8.75 10.25 8.75H8.75V10.25C8.75 10.6642 8.41421 11 8 11C7.58579 11 7.25 10.6642 7.25 10.25V8.75H5.75C5.33579 8.75 5 8.41421 5 8C5 7.58579 5.33579 7.25 5.75 7.25H7.25V5.75C7.25 5.33579 7.58579 5 8 5Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
