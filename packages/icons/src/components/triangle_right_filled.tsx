/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TriangleRightFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M12.47 7.08993C13.2534 7.57951 13.2534 8.72034 12.47 9.20992L5.91341 13.3078C5.08085 13.8281 4.00092 13.2296 4.00092 12.2478L4.00092 4.05205C4.00092 3.07025 5.08086 2.4717 5.91341 2.99205L12.47 7.08993Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'triangle_right_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M12.47 7.08993C13.2534 7.57951 13.2534 8.72034 12.47 9.20992L5.91341 13.3078C5.08085 13.8281 4.00092 13.2296 4.00092 12.2478L4.00092 4.05205C4.00092 3.07025 5.08086 2.4717 5.91341 2.99205L12.47 7.08993Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
