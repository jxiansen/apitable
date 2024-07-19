/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TriangleUpOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M9.06002 3.5309C8.57044 2.74757 7.42961 2.74756 6.94002 3.5309L2.84215 10.0875C2.3218 10.9201 2.92035 12 3.90214 12H12.0979C13.0797 12 13.6782 10.9201 13.1579 10.0875L9.06002 3.5309ZM4.35321 10.5L8.00002 4.6651L11.6468 10.5H4.35321Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'triangle_up_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M9.06002 3.5309C8.57044 2.74757 7.42961 2.74756 6.94002 3.5309L2.84215 10.0875C2.3218 10.9201 2.92035 12 3.90214 12H12.0979C13.0797 12 13.6782 10.9201 13.1579 10.0875L9.06002 3.5309ZM4.35321 10.5L8.00002 4.6651L11.6468 10.5H4.35321Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
