/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const VideoOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M10.2526 8.43271C10.5852 8.24013 10.5852 7.75987 10.2526 7.56729L7.00052 5.68451C6.66719 5.49153 6.25 5.73206 6.25 6.11722V9.88278C6.25 10.2679 6.66719 10.5085 7.00052 10.3155L10.2526 8.43271Z"
        fill={colors[0]}
      />
      <path
        d="M2.25 2C1.55964 2 1 2.55964 1 3.25V12.75C1 13.4404 1.55964 14 2.25 14H13.75C14.4404 14 15 13.4404 15 12.75V3.25C15 2.55964 14.4404 2 13.75 2H2.25ZM2.5 12.5V3.5H13.5V12.5H2.5Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'video_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M10.2526 8.43271C10.5852 8.24013 10.5852 7.75987 10.2526 7.56729L7.00052 5.68451C6.66719 5.49153 6.25 5.73206 6.25 6.11722V9.88278C6.25 10.2679 6.66719 10.5085 7.00052 10.3155L10.2526 8.43271Z',
    'M2.25 2C1.55964 2 1 2.55964 1 3.25V12.75C1 13.4404 1.55964 14 2.25 14H13.75C14.4404 14 15 13.4404 15 12.75V3.25C15 2.55964 14.4404 2 13.75 2H2.25ZM2.5 12.5V3.5H13.5V12.5H2.5Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
