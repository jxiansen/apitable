/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const OrgZoomOutOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M2.25 7.25C1.83579 7.25 1.5 7.58579 1.5 8C1.5 8.41421 1.83579 8.75 2.25 8.75H13.75C14.1642 8.75 14.5 8.41421 14.5 8C14.5 7.58579 14.1642 7.25 13.75 7.25H2.25Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'org_zoom_out_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M2.25 7.25C1.83579 7.25 1.5 7.58579 1.5 8C1.5 8.41421 1.83579 8.75 2.25 8.75H13.75C14.1642 8.75 14.5 8.41421 14.5 8C14.5 7.58579 14.1642 7.25 13.75 7.25H2.25Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
