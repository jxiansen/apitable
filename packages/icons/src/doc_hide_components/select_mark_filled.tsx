

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SelectMarkFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M62 2L2 62H62V2ZM54.3988 38.6637C55.5337 39.7987 55.5337 41.6388 54.3988 42.7738L43.7425 53.43C42.6076 54.565 40.7674 54.565 39.6325 53.43L33.82 47.6175C32.685 46.4826 32.685 44.6424 33.82 43.5075C34.9549 42.3725 36.7951 42.3725 37.93 43.5075L41.6875 47.2649L50.2887 38.6637C51.4237 37.5288 53.2638 37.5288 54.3988 38.6637Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'select_mark_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M62 2L2 62H62V2ZM54.3988 38.6637C55.5337 39.7987 55.5337 41.6388 54.3988 42.7738L43.7425 53.43C42.6076 54.565 40.7674 54.565 39.6325 53.43L33.82 47.6175C32.685 46.4826 32.685 44.6424 33.82 43.5075C34.9549 42.3725 36.7951 42.3725 37.93 43.5075L41.6875 47.2649L50.2887 38.6637C51.4237 37.5288 53.2638 37.5288 54.3988 38.6637Z'],
  width: '64',
  height: '64',
  viewBox: '0 0 64 64',
});
