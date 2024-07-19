/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const PreviousFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill={colors[0]} />
      <path d="M25 20L21 24L25 28" stroke={colors[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  name: 'previous_filled',
  defaultColors: ['#636363', 'white'],
  colorful: true,
  allPathData: [
    'M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z',
    'M25 20L21 24L25 28',
  ],
  width: '48',
  height: '48',
  viewBox: '0 0 48 48',
});
