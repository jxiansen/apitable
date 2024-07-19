

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TriangleRightOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M12.4691 9.06C13.2524 8.57041 13.2524 7.42959 12.4691 6.94L5.9125 2.84212C5.07994 2.32177 4 2.92033 4 3.90212V12.0979C4 13.0797 5.07993 13.6782 5.9125 13.1579L12.4691 9.06ZM5.5 4.35318L11.3349 8L5.5 11.6468L5.5 4.35318Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'triangle_right_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M12.4691 9.06C13.2524 8.57041 13.2524 7.42959 12.4691 6.94L5.9125 2.84212C5.07994 2.32177 4 2.92033 4 3.90212V12.0979C4 13.0797 5.07993 13.6782 5.9125 13.1579L12.4691 9.06ZM5.5 4.35318L11.3349 8L5.5 11.6468L5.5 4.35318Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
