

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const LoadingOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M8 1C7.58579 1 7.25 1.33579 7.25 1.75C7.25 2.16421 7.58579 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 8.41421 13.8358 8.75 14.25 8.75C14.6642 8.75 15 8.41421 15 8C15 4.13401 11.866 1 8 1Z" fill={ colors[0] }/>

  </>,
  name: 'loading_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M8 1C7.58579 1 7.25 1.33579 7.25 1.75C7.25 2.16421 7.58579 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 8.41421 13.8358 8.75 14.25 8.75C14.6642 8.75 15 8.41421 15 8C15 4.13401 11.866 1 8 1Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
