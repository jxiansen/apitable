

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TriangleLeftOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M3.53092 6.94C2.74759 7.42959 2.74759 8.57041 3.53092 9.06L10.0875 13.1579C10.9201 13.6782 12 13.0797 12 12.0979L12 3.90212C12 2.92033 10.9201 2.32177 10.0875 2.84212L3.53092 6.94ZM10.5 11.6468L4.66512 8L10.5 4.35319V11.6468Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'triangle_left_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M3.53092 6.94C2.74759 7.42959 2.74759 8.57041 3.53092 9.06L10.0875 13.1579C10.9201 13.6782 12 13.0797 12 12.0979L12 3.90212C12 2.92033 10.9201 2.32177 10.0875 2.84212L3.53092 6.94ZM10.5 11.6468L4.66512 8L10.5 4.35319V11.6468Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
