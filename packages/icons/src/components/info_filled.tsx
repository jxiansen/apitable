/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const InfoFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M9 3.5C9 4.05228 8.55228 4.5 8 4.5C7.44772 4.5 7 4.05228 7 3.5C7 2.94772 7.44772 2.5 8 2.5C8.55228 2.5 9 2.94772 9 3.5Z"
        fill={colors[0]}
      />
      <path
        d="M7.25 6.25C7.25 5.83579 7.58579 5.5 8 5.5C8.41421 5.5 8.75 5.83579 8.75 6.25V12.75C8.75 13.1642 8.41421 13.5 8 13.5C7.58579 13.5 7.25 13.1642 7.25 12.75V6.25Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'info_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M9 3.5C9 4.05228 8.55228 4.5 8 4.5C7.44772 4.5 7 4.05228 7 3.5C7 2.94772 7.44772 2.5 8 2.5C8.55228 2.5 9 2.94772 9 3.5Z',
    'M7.25 6.25C7.25 5.83579 7.58579 5.5 8 5.5C8.41421 5.5 8.75 5.83579 8.75 6.25V12.75C8.75 13.1642 8.41421 13.5 8 13.5C7.58579 13.5 7.25 13.1642 7.25 12.75V6.25Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
