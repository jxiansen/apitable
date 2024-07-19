/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const QuoteFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M6.57518 3.92595C6.94845 3.74638 7.10547 3.29822 6.9259 2.92495C6.74633 2.55169 6.29816 2.39466 5.9249 2.57424C4.40952 3.30326 3.2915 4.77079 2.6646 6.44832C2.05341 8.08382 1.87847 9.9934 2.29187 11.7968C2.50208 12.9089 3.47886 13.75 4.65209 13.75C5.97872 13.75 7.05417 12.6746 7.05417 11.3479C7.05417 10.0213 5.97872 8.94584 4.65209 8.94584C4.27006 8.94584 3.90887 9.03502 3.58819 9.1937C3.64416 8.42426 3.80957 7.66948 4.0697 6.9734C4.6038 5.54418 5.50498 4.4408 6.57518 3.92595Z"
        fill={colors[0]}
      />
      <path
        d="M14.0542 11.348C14.0542 12.6746 12.9787 13.75 11.6521 13.75C10.4789 13.75 9.50209 12.9089 9.29187 11.7968C8.87847 9.99343 9.05341 8.08385 9.66461 6.44835C10.2915 4.77082 11.4095 3.30329 12.9249 2.57427C13.2982 2.3947 13.7463 2.55172 13.9259 2.92498C14.1055 3.29825 13.9484 3.74641 13.5752 3.92598C12.505 4.44083 11.6038 5.54421 11.0697 6.97343C10.8096 7.66951 10.6442 8.42429 10.5882 9.19373C10.9089 9.03505 11.2701 8.94587 11.6521 8.94587C12.9787 8.94587 14.0542 10.0213 14.0542 11.348Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'quote_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M6.57518 3.92595C6.94845 3.74638 7.10547 3.29822 6.9259 2.92495C6.74633 2.55169 6.29816 2.39466 5.9249 2.57424C4.40952 3.30326 3.2915 4.77079 2.6646 6.44832C2.05341 8.08382 1.87847 9.9934 2.29187 11.7968C2.50208 12.9089 3.47886 13.75 4.65209 13.75C5.97872 13.75 7.05417 12.6746 7.05417 11.3479C7.05417 10.0213 5.97872 8.94584 4.65209 8.94584C4.27006 8.94584 3.90887 9.03502 3.58819 9.1937C3.64416 8.42426 3.80957 7.66948 4.0697 6.9734C4.6038 5.54418 5.50498 4.4408 6.57518 3.92595Z',
    'M14.0542 11.348C14.0542 12.6746 12.9787 13.75 11.6521 13.75C10.4789 13.75 9.50209 12.9089 9.29187 11.7968C8.87847 9.99343 9.05341 8.08385 9.66461 6.44835C10.2915 4.77082 11.4095 3.30329 12.9249 2.57427C13.2982 2.3947 13.7463 2.55172 13.9259 2.92498C14.1055 3.29825 13.9484 3.74641 13.5752 3.92598C12.505 4.44083 11.6038 5.54421 11.0697 6.97343C10.8096 7.66951 10.6442 8.42429 10.5882 9.19373C10.9089 9.03505 11.2701 8.94587 11.6521 8.94587C12.9787 8.94587 14.0542 10.0213 14.0542 11.348Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
