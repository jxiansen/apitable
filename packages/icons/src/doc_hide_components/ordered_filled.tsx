/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const OrderedFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M3.50005 2.25001C3.50005 2.04778 3.37823 1.86546 3.19139 1.78807C3.00455 1.71068 2.78949 1.75346 2.64649 1.89646L1.70406 2.8389C1.5088 3.03416 1.5088 3.35075 1.70407 3.54601C1.89933 3.74127 2.21591 3.74127 2.41117 3.54601L2.50005 3.45713V5.75001H2C1.72386 5.75001 1.5 5.97387 1.5 6.25001C1.5 6.52616 1.72386 6.75001 2 6.75001H4.00391C4.28005 6.75001 4.50391 6.52616 4.50391 6.25001C4.50391 5.97387 4.28005 5.75001 4.00391 5.75001H3.50005V2.25001Z"
        fill={colors[0]}
      />
      <path
        d="M6 3.50001C6 3.0858 6.33579 2.75001 6.75 2.75001H13.75C14.1642 2.75001 14.5 3.0858 14.5 3.50001C14.5 3.91423 14.1642 4.25001 13.75 4.25001H6.75C6.33579 4.25001 6 3.91423 6 3.50001Z"
        fill={colors[0]}
      />
      <path
        d="M6 8.00001C6 7.5858 6.33579 7.25001 6.75 7.25001H13.75C14.1642 7.25001 14.5 7.5858 14.5 8.00001C14.5 8.41423 14.1642 8.75001 13.75 8.75001H6.75C6.33579 8.75001 6 8.41423 6 8.00001Z"
        fill={colors[0]}
      />
      <path
        d="M6.75 11.75C6.33579 11.75 6 12.0858 6 12.5C6 12.9142 6.33579 13.25 6.75 13.25H13.75C14.1642 13.25 14.5 12.9142 14.5 12.5C14.5 12.0858 14.1642 11.75 13.75 11.75H6.75Z"
        fill={colors[0]}
      />
      <path
        d="M3 10.25C2.75384 10.25 2.5 10.4454 2.5 10.75C2.5 11.0262 2.27614 11.25 2 11.25C1.72386 11.25 1.5 11.0262 1.5 10.75C1.5 9.78801 2.31284 9.25001 3 9.25001C3.68718 9.25001 4.5 9.78802 4.5 10.75C4.5 11.1854 4.30875 11.5557 4.09061 11.853C3.87361 12.1487 3.59215 12.4217 3.34658 12.6579L3.31333 12.6899C3.09786 12.897 2.91137 13.0763 2.76497 13.25H4C4.27614 13.25 4.5 13.4739 4.5 13.75C4.5 14.0262 4.27614 14.25 4 14.25H2C1.72386 14.25 1.5 14.0262 1.5 13.75C1.5 13.3307 1.70566 12.9783 1.91868 12.706C2.11805 12.4511 2.37462 12.2048 2.60275 11.9858L2.65342 11.9371C2.90785 11.6924 3.12639 11.4767 3.28439 11.2614C3.44125 11.0476 3.5 10.8846 3.5 10.75C3.5 10.4454 3.24618 10.25 3 10.25Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'ordered_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M3.50005 2.25001C3.50005 2.04778 3.37823 1.86546 3.19139 1.78807C3.00455 1.71068 2.78949 1.75346 2.64649 1.89646L1.70406 2.8389C1.5088 3.03416 1.5088 3.35075 1.70407 3.54601C1.89933 3.74127 2.21591 3.74127 2.41117 3.54601L2.50005 3.45713V5.75001H2C1.72386 5.75001 1.5 5.97387 1.5 6.25001C1.5 6.52616 1.72386 6.75001 2 6.75001H4.00391C4.28005 6.75001 4.50391 6.52616 4.50391 6.25001C4.50391 5.97387 4.28005 5.75001 4.00391 5.75001H3.50005V2.25001Z',
    'M6 3.50001C6 3.0858 6.33579 2.75001 6.75 2.75001H13.75C14.1642 2.75001 14.5 3.0858 14.5 3.50001C14.5 3.91423 14.1642 4.25001 13.75 4.25001H6.75C6.33579 4.25001 6 3.91423 6 3.50001Z',
    'M6 8.00001C6 7.5858 6.33579 7.25001 6.75 7.25001H13.75C14.1642 7.25001 14.5 7.5858 14.5 8.00001C14.5 8.41423 14.1642 8.75001 13.75 8.75001H6.75C6.33579 8.75001 6 8.41423 6 8.00001Z',
    'M6.75 11.75C6.33579 11.75 6 12.0858 6 12.5C6 12.9142 6.33579 13.25 6.75 13.25H13.75C14.1642 13.25 14.5 12.9142 14.5 12.5C14.5 12.0858 14.1642 11.75 13.75 11.75H6.75Z',
    'M3 10.25C2.75384 10.25 2.5 10.4454 2.5 10.75C2.5 11.0262 2.27614 11.25 2 11.25C1.72386 11.25 1.5 11.0262 1.5 10.75C1.5 9.78801 2.31284 9.25001 3 9.25001C3.68718 9.25001 4.5 9.78802 4.5 10.75C4.5 11.1854 4.30875 11.5557 4.09061 11.853C3.87361 12.1487 3.59215 12.4217 3.34658 12.6579L3.31333 12.6899C3.09786 12.897 2.91137 13.0763 2.76497 13.25H4C4.27614 13.25 4.5 13.4739 4.5 13.75C4.5 14.0262 4.27614 14.25 4 14.25H2C1.72386 14.25 1.5 14.0262 1.5 13.75C1.5 13.3307 1.70566 12.9783 1.91868 12.706C2.11805 12.4511 2.37462 12.2048 2.60275 11.9858L2.65342 11.9371C2.90785 11.6924 3.12639 11.4767 3.28439 11.2614C3.44125 11.0476 3.5 10.8846 3.5 10.75C3.5 10.4454 3.24618 10.25 3 10.25Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
