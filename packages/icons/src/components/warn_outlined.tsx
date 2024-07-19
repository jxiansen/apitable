/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const WarnOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M9 12.5C9 13.0523 8.55228 13.5 8 13.5C7.44772 13.5 7 13.0523 7 12.5C7 11.9477 7.44772 11.5 8 11.5C8.55228 11.5 9 11.9477 9 12.5Z"
        fill={colors[0]}
      />
      <path
        d="M7.25 3.25C7.25 2.83579 7.58579 2.5 8 2.5C8.41421 2.5 8.75 2.83579 8.75 3.25V9.75C8.75 10.1642 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.1642 7.25 9.75V3.25Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'warn_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M9 12.5C9 13.0523 8.55228 13.5 8 13.5C7.44772 13.5 7 13.0523 7 12.5C7 11.9477 7.44772 11.5 8 11.5C8.55228 11.5 9 11.9477 9 12.5Z',
    'M7.25 3.25C7.25 2.83579 7.58579 2.5 8 2.5C8.41421 2.5 8.75 2.83579 8.75 3.25V9.75C8.75 10.1642 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.1642 7.25 9.75V3.25Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
