

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SidescreenOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M10 4.5C9.72386 4.5 9.5 4.72386 9.5 5V11C9.5 11.2761 9.72386 11.5 10 11.5H12C12.2761 11.5 12.5 11.2761 12.5 11V5C12.5 4.72386 12.2761 4.5 12 4.5H10Z" fill={ colors[0] }/>
    <path d="M2.25 2C1.55964 2 1 2.55964 1 3.25V12.75C1 13.4404 1.55964 14 2.25 14H13.75C14.4404 14 15 13.4404 15 12.75V3.25C15 2.55964 14.4404 2 13.75 2H2.25ZM2.5 12.5V3.5H13.5V12.5H2.5Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'sidescreen_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M10 4.5C9.72386 4.5 9.5 4.72386 9.5 5V11C9.5 11.2761 9.72386 11.5 10 11.5H12C12.2761 11.5 12.5 11.2761 12.5 11V5C12.5 4.72386 12.2761 4.5 12 4.5H10Z', 'M2.25 2C1.55964 2 1 2.55964 1 3.25V12.75C1 13.4404 1.55964 14 2.25 14H13.75C14.4404 14 15 13.4404 15 12.75V3.25C15 2.55964 14.4404 2 13.75 2H2.25ZM2.5 12.5V3.5H13.5V12.5H2.5Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
