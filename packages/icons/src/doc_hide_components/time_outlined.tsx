/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TimeOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M8.75 5.25C8.75 4.83579 8.41421 4.5 8 4.5C7.58579 4.5 7.25 4.83579 7.25 5.25V8.5C7.25 8.91421 7.58579 9.25 8 9.25H10.5C10.9142 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 10.9142 7.75 10.5 7.75H8.75V5.25Z"
        fill={colors[0]}
      />
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'time_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M8.75 5.25C8.75 4.83579 8.41421 4.5 8 4.5C7.58579 4.5 7.25 4.83579 7.25 5.25V8.5C7.25 8.91421 7.58579 9.25 8 9.25H10.5C10.9142 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 10.9142 7.75 10.5 7.75H8.75V5.25Z',
    'M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
