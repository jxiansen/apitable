/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const UpAndDownOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M7.93707 4.90875C7.64417 5.20164 7.1693 5.20164 6.87641 4.90875L5.25 3.28234V14.375C5.25 14.7892 4.91421 15.125 4.5 15.125C4.08579 15.125 3.75 14.7892 3.75 14.375V3.43896L2.28021 4.90875C1.98732 5.20164 1.51245 5.20164 1.21955 4.90875C0.926661 4.61586 0.926661 4.14098 1.21955 3.84809L3.69443 1.37322C4.18258 0.88506 4.97404 0.88506 5.46219 1.37322L7.93707 3.84809C8.22996 4.14098 8.22996 4.61586 7.93707 4.90875Z"
        fill={colors[0]}
      />
      <path
        d="M14.7803 11.0983C14.4874 10.8054 14.0126 10.8054 13.7197 11.0983L12.25 12.568V2.5C12.25 2.08579 11.9142 1.75 11.5 1.75C11.0858 1.75 10.75 2.08579 10.75 2.5V12.7249L9.12348 11.0983C8.83058 10.8054 8.35571 10.8054 8.06282 11.0983C7.76992 11.3912 7.76992 11.8661 8.06282 12.159L10.5377 14.6339C10.7929 14.8891 11.1311 15.0109 11.4654 14.9992C11.4769 14.9997 11.4884 15 11.5 15C11.5922 15 11.6804 14.9834 11.762 14.953C11.961 14.8968 12.1488 14.7905 12.3055 14.6339L14.7803 12.159C15.0732 11.8661 15.0732 11.3912 14.7803 11.0983Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'up_and_down_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M7.93707 4.90875C7.64417 5.20164 7.1693 5.20164 6.87641 4.90875L5.25 3.28234V14.375C5.25 14.7892 4.91421 15.125 4.5 15.125C4.08579 15.125 3.75 14.7892 3.75 14.375V3.43896L2.28021 4.90875C1.98732 5.20164 1.51245 5.20164 1.21955 4.90875C0.926661 4.61586 0.926661 4.14098 1.21955 3.84809L3.69443 1.37322C4.18258 0.88506 4.97404 0.88506 5.46219 1.37322L7.93707 3.84809C8.22996 4.14098 8.22996 4.61586 7.93707 4.90875Z',
    'M14.7803 11.0983C14.4874 10.8054 14.0126 10.8054 13.7197 11.0983L12.25 12.568V2.5C12.25 2.08579 11.9142 1.75 11.5 1.75C11.0858 1.75 10.75 2.08579 10.75 2.5V12.7249L9.12348 11.0983C8.83058 10.8054 8.35571 10.8054 8.06282 11.0983C7.76992 11.3912 7.76992 11.8661 8.06282 12.159L10.5377 14.6339C10.7929 14.8891 11.1311 15.0109 11.4654 14.9992C11.4769 14.9997 11.4884 15 11.5 15C11.5922 15 11.6804 14.9834 11.762 14.953C11.961 14.8968 12.1488 14.7905 12.3055 14.6339L14.7803 12.159C15.0732 11.8661 15.0732 11.3912 14.7803 11.0983Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
