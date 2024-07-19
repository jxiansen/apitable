/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const WarnCircleColorFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M9 10.75C9 11.3023 8.55228 11.75 8 11.75C7.44772 11.75 7 11.3023 7 10.75C7 10.1977 7.44772 9.75 8 9.75C8.55228 9.75 9 10.1977 9 10.75ZM8.75 5C8.75 4.58579 8.41421 4.25 8 4.25C7.58579 4.25 7.25 4.58579 7.25 5V8C7.25 8.41421 7.58579 8.75 8 8.75C8.41421 8.75 8.75 8.41421 8.75 8V5Z"
        fill={colors[1]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'warn_circle_color_filled',
  defaultColors: ['#FFB752', 'white'],
  colorful: true,
  allPathData: [
    'M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z',
    'M9 10.75C9 11.3023 8.55228 11.75 8 11.75C7.44772 11.75 7 11.3023 7 10.75C7 10.1977 7.44772 9.75 8 9.75C8.55228 9.75 9 10.1977 9 10.75ZM8.75 5C8.75 4.58579 8.41421 4.25 8 4.25C7.58579 4.25 7.25 4.58579 7.25 5V8C7.25 8.41421 7.58579 8.75 8 8.75C8.41421 8.75 8.75 8.41421 8.75 8V5Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
