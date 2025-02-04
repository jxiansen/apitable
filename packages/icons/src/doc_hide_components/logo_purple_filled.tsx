/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const LogoPurpleFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <g clipPath="url(#clip0_4062_1469)">
        <path
          d="M0 104.988C0 124.334 15.6657 140 35.0118 140H104.988C124.334 140 140 124.334 140 104.988V35.0118C140 15.6657 124.334 0 104.988 0H35.0118C15.6657 0 0 15.6657 0 35.0118V104.988Z"
          fill={colors[0]}
        />

        <path
          d="M93.2858 104.941C86.8685 104.941 81.6309 99.7034 81.6309 93.2862C81.6309 86.8689 86.8685 81.6313 93.2858 81.6313C99.7031 81.6313 104.941 86.8689 104.941 93.2862C104.941 99.7034 99.7031 104.941 93.2858 104.941Z"
          fill={colors[1]}
        />

        <path
          d="M81.6309 58.3688L58.3684 81.6314L35.0586 104.941V81.6314V58.3688V35.0591H58.3684V58.3688L81.6309 35.0591H104.941L81.6309 58.3688Z"
          fill={colors[1]}
        />
      </g>
      <defs>
        <clipPath id="clip0_4062_1469">
          <rect width="140" height="140" fill={colors[1]} />
        </clipPath>
      </defs>
    </>
  ),
  name: 'logo_purple_filled',
  defaultColors: ['#7B67EE', 'white'],
  colorful: true,
  allPathData: [
    'M0 104.988C0 124.334 15.6657 140 35.0118 140H104.988C124.334 140 140 124.334 140 104.988V35.0118C140 15.6657 124.334 0 104.988 0H35.0118C15.6657 0 0 15.6657 0 35.0118V104.988Z',
    'M93.2858 104.941C86.8685 104.941 81.6309 99.7034 81.6309 93.2862C81.6309 86.8689 86.8685 81.6313 93.2858 81.6313C99.7031 81.6313 104.941 86.8689 104.941 93.2862C104.941 99.7034 99.7031 104.941 93.2858 104.941Z',
    'M81.6309 58.3688L58.3684 81.6314L35.0586 104.941V81.6314V58.3688V35.0591H58.3684V58.3688L81.6309 35.0591H104.941L81.6309 58.3688Z',
  ],
  width: '140',
  height: '140',
  viewBox: '0 0 140 140',
});
