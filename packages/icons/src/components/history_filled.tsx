/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const HistoryFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M3.51402 1.35565C3.59373 0.949183 3.98786 0.684294 4.39434 0.764009C4.80081 0.843723 5.06569 1.23785 4.98598 1.64432L4.86256 2.27368C5.79888 1.77972 6.86563 1.49999 8 1.49999C11.7279 1.49999 14.75 4.52207 14.75 8.24999C14.75 11.9779 11.7279 15 8 15C4.27208 15 1.25 11.9779 1.25 8.24999C1.25 7.83578 1.58579 7.49999 2 7.49999C2.41421 7.49999 2.75 7.83578 2.75 8.24999C2.75 11.1495 5.1005 13.5 8 13.5C10.8995 13.5 13.25 11.1495 13.25 8.24999C13.25 5.35049 10.8995 2.99999 8 2.99999C7.09823 2.99999 6.25241 3.22652 5.51289 3.6268L6.15908 3.76705C6.56387 3.85491 6.82079 4.25428 6.73293 4.65907C6.64508 5.06386 6.24571 5.32078 5.84092 5.23292L3.59805 4.74612C3.19899 4.65951 2.94256 4.26956 3.02115 3.86885L3.51402 1.35565Z"
        fill={colors[0]}
      />
      <path
        d="M8.75 5.25009C8.75 4.83588 8.41421 4.50009 8 4.50009C7.58579 4.50009 7.25 4.83588 7.25 5.25009V8.45589C7.25 8.90985 7.49612 9.32812 7.89295 9.54859L9.88577 10.6557C10.2479 10.8569 10.7045 10.7264 10.9056 10.3643C11.1068 10.0022 10.9763 9.54563 10.6142 9.34447L8.75 8.30879V5.25009Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'history_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M3.51402 1.35565C3.59373 0.949183 3.98786 0.684294 4.39434 0.764009C4.80081 0.843723 5.06569 1.23785 4.98598 1.64432L4.86256 2.27368C5.79888 1.77972 6.86563 1.49999 8 1.49999C11.7279 1.49999 14.75 4.52207 14.75 8.24999C14.75 11.9779 11.7279 15 8 15C4.27208 15 1.25 11.9779 1.25 8.24999C1.25 7.83578 1.58579 7.49999 2 7.49999C2.41421 7.49999 2.75 7.83578 2.75 8.24999C2.75 11.1495 5.1005 13.5 8 13.5C10.8995 13.5 13.25 11.1495 13.25 8.24999C13.25 5.35049 10.8995 2.99999 8 2.99999C7.09823 2.99999 6.25241 3.22652 5.51289 3.6268L6.15908 3.76705C6.56387 3.85491 6.82079 4.25428 6.73293 4.65907C6.64508 5.06386 6.24571 5.32078 5.84092 5.23292L3.59805 4.74612C3.19899 4.65951 2.94256 4.26956 3.02115 3.86885L3.51402 1.35565Z',
    'M8.75 5.25009C8.75 4.83588 8.41421 4.50009 8 4.50009C7.58579 4.50009 7.25 4.83588 7.25 5.25009V8.45589C7.25 8.90985 7.49612 9.32812 7.89295 9.54859L9.88577 10.6557C10.2479 10.8569 10.7045 10.7264 10.9056 10.3643C11.1068 10.0022 10.9763 9.54563 10.6142 9.34447L8.75 8.30879V5.25009Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
