/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const ChartBarNormalFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M41 23V13C41 12.4477 40.5523 12 40 12L13 12C12.4477 12 12 12.4477 12 13V23C12 23.5523 12.4477 24 13 24H40C40.5523 24 41 23.5523 41 23Z"
        fill={colors[0]}
      />
      <path
        d="M68 45V35C68 34.4477 67.5523 34 67 34H13C12.4477 34 12 34.4477 12 35V45C12 45.5523 12.4477 46 13 46H67C67.5523 46 68 45.5523 68 45Z"
        fill={colors[1]}
      />
      <path
        d="M51 67V57C51 56.4477 50.5523 56 50 56H13C12.4477 56 12 56.4477 12 57V67C12 67.5523 12.4477 68 13 68H50C50.5523 68 51 67.5523 51 67Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'chart_bar_normal_filled',
  defaultColors: ['#7B67EE', '#7C68F0'],
  colorful: true,
  allPathData: [
    'M41 23V13C41 12.4477 40.5523 12 40 12L13 12C12.4477 12 12 12.4477 12 13V23C12 23.5523 12.4477 24 13 24H40C40.5523 24 41 23.5523 41 23Z',
    'M68 45V35C68 34.4477 67.5523 34 67 34H13C12.4477 34 12 34.4477 12 35V45C12 45.5523 12.4477 46 13 46H67C67.5523 46 68 45.5523 68 45Z',
    'M51 67V57C51 56.4477 50.5523 56 50 56H13C12.4477 56 12 56.4477 12 57V67C12 67.5523 12.4477 68 13 68H50C50.5523 68 51 67.5523 51 67Z',
  ],
  width: '80',
  height: '80',
  viewBox: '0 0 80 80',
});
