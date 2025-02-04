/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SubtractCircleFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM5.75 7.25C5.33579 7.25 5 7.58579 5 8C5 8.41421 5.33579 8.75 5.75 8.75H10.25C10.6642 8.75 11 8.41421 11 8C11 7.58579 10.6642 7.25 10.25 7.25H5.75Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'subtract_circle_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM5.75 7.25C5.33579 7.25 5 7.58579 5 8C5 8.41421 5.33579 8.75 5.75 8.75H10.25C10.6642 8.75 11 8.41421 11 8C11 7.58579 10.6642 7.25 10.25 7.25H5.75Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
