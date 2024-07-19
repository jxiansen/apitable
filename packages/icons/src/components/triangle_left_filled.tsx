/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TriangleLeftFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M3.53001 9.21012C2.74667 8.72054 2.74667 7.57971 3.53001 7.09012L10.0866 2.99225C10.9192 2.4719 11.9991 3.07046 11.9991 4.05225L11.9991 12.248C11.9991 13.2298 10.9192 13.8283 10.0866 13.308L3.53001 9.21012Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'triangle_left_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M3.53001 9.21012C2.74667 8.72054 2.74667 7.57971 3.53001 7.09012L10.0866 2.99225C10.9192 2.4719 11.9991 3.07046 11.9991 4.05225L11.9991 12.248C11.9991 13.2298 10.9192 13.8283 10.0866 13.308L3.53001 9.21012Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
