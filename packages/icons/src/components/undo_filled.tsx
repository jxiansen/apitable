

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const UndoFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M7.74995 3.79335C7.74995 2.65081 6.3436 2.1071 5.57504 2.9525L1.75074 7.15915C1.3173 7.63593 1.3173 8.36407 1.75074 8.84085L5.57511 13.0476C6.34369 13.893 7.75008 13.3492 7.75003 12.2067L7.74994 10.4156C7.8736 10.3713 8.04491 10.3296 8.26851 10.3046C8.62327 10.2648 9.06027 10.2728 9.5439 10.3468C10.5134 10.4953 11.6105 10.9 12.5477 11.6324C12.9631 11.957 13.5007 11.9913 13.92 11.7931C14.1343 11.6918 14.3395 11.5188 14.4667 11.2679C14.5982 11.0085 14.6204 10.7159 14.5439 10.4364C14.0885 8.77209 12.9438 7.53151 11.6449 6.69291C10.4115 5.89663 8.99166 5.42988 7.74995 5.29284L7.74995 3.79335Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'undo_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M7.74995 3.79335C7.74995 2.65081 6.3436 2.1071 5.57504 2.9525L1.75074 7.15915C1.3173 7.63593 1.3173 8.36407 1.75074 8.84085L5.57511 13.0476C6.34369 13.893 7.75008 13.3492 7.75003 12.2067L7.74994 10.4156C7.8736 10.3713 8.04491 10.3296 8.26851 10.3046C8.62327 10.2648 9.06027 10.2728 9.5439 10.3468C10.5134 10.4953 11.6105 10.9 12.5477 11.6324C12.9631 11.957 13.5007 11.9913 13.92 11.7931C14.1343 11.6918 14.3395 11.5188 14.4667 11.2679C14.5982 11.0085 14.6204 10.7159 14.5439 10.4364C14.0885 8.77209 12.9438 7.53151 11.6449 6.69291C10.4115 5.89663 8.99166 5.42988 7.74995 5.29284L7.74995 3.79335Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
