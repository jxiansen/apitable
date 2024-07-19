

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TriangleDownOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M6.94002 12.4691C7.42961 13.2524 8.57044 13.2524 9.06002 12.4691L13.1579 5.9125C13.6782 5.07994 13.0797 4 12.0979 4H3.90215C2.92035 4 2.3218 5.07994 2.84215 5.9125L6.94002 12.4691ZM11.6468 5.5L8.00002 11.3349L4.35321 5.5L11.6468 5.5Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'triangle_down_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M6.94002 12.4691C7.42961 13.2524 8.57044 13.2524 9.06002 12.4691L13.1579 5.9125C13.6782 5.07994 13.0797 4 12.0979 4H3.90215C2.92035 4 2.3218 5.07994 2.84215 5.9125L6.94002 12.4691ZM11.6468 5.5L8.00002 11.3349L4.35321 5.5L11.6468 5.5Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
