/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SubtractCircleColorFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <circle cx="8" cy="8" r="7" fill={colors[0]} />
      <path d="M5.5 8H10.5" stroke={colors[1]} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  name: 'subtract_circle_color_filled',
  defaultColors: ['#4D4D4D', 'white'],
  colorful: true,
  allPathData: ['M5.5 8H10.5'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
