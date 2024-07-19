

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const ConicalRightFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M13.4043 8.6317C13.6197 8.49384 13.75 8.25573 13.75 8C13.75 7.74426 13.6197 7.50615 13.4043 7.36829L7.15429 3.36829C6.92344 3.22055 6.63038 3.2105 6.38994 3.34208C6.14951 3.47366 6 3.72591 6 4L6 12C6 12.2741 6.14951 12.5263 6.38994 12.6579C6.63038 12.7895 6.92344 12.7794 7.15429 12.6317L13.4043 8.6317Z" fill={ colors[0] }/>
    <path d="M3.75 12.75C3.33579 12.75 3 12.4142 3 12L3 4C3 3.58578 3.33579 3.25 3.75 3.25C4.16421 3.25 4.5 3.58578 4.5 4L4.5 12C4.5 12.4142 4.16421 12.75 3.75 12.75Z" fill={ colors[0] }/>

  </>,
  name: 'conical_right_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M13.4043 8.6317C13.6197 8.49384 13.75 8.25573 13.75 8C13.75 7.74426 13.6197 7.50615 13.4043 7.36829L7.15429 3.36829C6.92344 3.22055 6.63038 3.2105 6.38994 3.34208C6.14951 3.47366 6 3.72591 6 4L6 12C6 12.2741 6.14951 12.5263 6.38994 12.6579C6.63038 12.7895 6.92344 12.7794 7.15429 12.6317L13.4043 8.6317Z', 'M3.75 12.75C3.33579 12.75 3 12.4142 3 12L3 4C3 3.58578 3.33579 3.25 3.75 3.25C4.16421 3.25 4.5 3.58578 4.5 4L4.5 12C4.5 12.4142 4.16421 12.75 3.75 12.75Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
