

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const InfoCircleColorFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>
    <path d="M9 5.25C9 4.69772 8.55228 4.25 8 4.25C7.44772 4.25 7 4.69772 7 5.25C7 5.80228 7.44772 6.25 8 6.25C8.55228 6.25 9 5.80228 9 5.25ZM8.75 11C8.75 11.4142 8.41421 11.75 8 11.75C7.58579 11.75 7.25 11.4142 7.25 11V8C7.25 7.58579 7.58579 7.25 8 7.25C8.41421 7.25 8.75 7.58579 8.75 8V11Z" fill={ colors[1] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'info_circle_color_filled',
  defaultColors: ['#907FF0', 'white'],
  colorful: true,
  allPathData: ['M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z', 'M9 5.25C9 4.69772 8.55228 4.25 8 4.25C7.44772 4.25 7 4.69772 7 5.25C7 5.80228 7.44772 6.25 8 6.25C8.55228 6.25 9 5.80228 9 5.25ZM8.75 11C8.75 11.4142 8.41421 11.75 8 11.75C7.58579 11.75 7.25 11.4142 7.25 11V8C7.25 7.58579 7.58579 7.25 8 7.25C8.41421 7.25 8.75 7.58579 8.75 8V11Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
