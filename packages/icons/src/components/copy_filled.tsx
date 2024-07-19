/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const CopyFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M5 11.25H2.75C2.05964 11.25 1.5 10.6904 1.5 9.99999L1.50004 2.74999C1.50004 2.05964 2.05968 1.5 2.75004 1.5H8.75C9.44036 1.5 10 2.05964 10 2.75V4H13.25C13.9404 4 14.5 4.55964 14.5 5.25V13.25C14.5 13.9404 13.9404 14.5 13.25 14.5H6.25C5.55965 14.5 5 13.9404 5 13.25V11.25ZM3 9.75L3.00004 3H8.5V4H6.25C5.55965 4 5 4.55964 5 5.25V9.75H3Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'copy_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M5 11.25H2.75C2.05964 11.25 1.5 10.6904 1.5 9.99999L1.50004 2.74999C1.50004 2.05964 2.05968 1.5 2.75004 1.5H8.75C9.44036 1.5 10 2.05964 10 2.75V4H13.25C13.9404 4 14.5 4.55964 14.5 5.25V13.25C14.5 13.9404 13.9404 14.5 13.25 14.5H6.25C5.55965 14.5 5 13.9404 5 13.25V11.25ZM3 9.75L3.00004 3H8.5V4H6.25C5.55965 4 5 4.55964 5 5.25V9.75H3Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
