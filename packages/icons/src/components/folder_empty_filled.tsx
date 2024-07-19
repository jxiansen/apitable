

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const FolderEmptyFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M4.89064 2.75C5.17642 2.75 5.45358 2.84792 5.67592 3.02746L6.53676 3.72254C6.7591 3.90208 7.03626 4 7.32204 4H13.75C14.4404 4 15 4.55964 15 5.25L15 13.5C15 14.1904 14.4404 14.75 13.75 14.75H2.25C1.55964 14.75 1 14.1904 1 13.5V4C1 3.30964 1.55964 2.75 2.25 2.75H4.89064Z" fill={ colors[0] }/>

  </>,
  name: 'folder_empty_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M4.89064 2.75C5.17642 2.75 5.45358 2.84792 5.67592 3.02746L6.53676 3.72254C6.7591 3.90208 7.03626 4 7.32204 4H13.75C14.4404 4 15 4.55964 15 5.25L15 13.5C15 14.1904 14.4404 14.75 13.75 14.75H2.25C1.55964 14.75 1 14.1904 1 13.5V4C1 3.30964 1.55964 2.75 2.25 2.75H4.89064Z'],
  width: '17',
  height: '17',
  viewBox: '0 0 17 17',
});
