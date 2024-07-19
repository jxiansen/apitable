

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const NextFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44Z" fill={ colors[0] }/>
    <path d="M23 20L27 24L23 28" stroke={ colors[1] } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

  </>,
  name: 'next_filled',
  defaultColors: ['#636363', 'white'],
  colorful: true,
  allPathData: ['M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44Z', 'M23 20L27 24L23 28'],
  width: '48',
  height: '48',
  viewBox: '0 0 48 48',
});
