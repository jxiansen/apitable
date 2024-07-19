/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SelectSingleFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM5.51018 6.9375L7.45873 10.3125C7.6993 10.7292 8.3007 10.7292 8.54127 10.3125L10.4898 6.9375C10.7304 6.52083 10.4297 6 9.94856 6L6.05144 6C5.57032 6 5.26961 6.52083 5.51018 6.9375Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'select_single_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM5.51018 6.9375L7.45873 10.3125C7.6993 10.7292 8.3007 10.7292 8.54127 10.3125L10.4898 6.9375C10.7304 6.52083 10.4297 6 9.94856 6L6.05144 6C5.57032 6 5.26961 6.52083 5.51018 6.9375Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
