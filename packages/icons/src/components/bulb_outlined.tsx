/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const BulbOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M2.5 6.475C2.5 3.44751 4.96617 1 8 1C11.0338 1 13.5 3.44751 13.5 6.475C13.5 8.00783 12.9663 8.89446 12.3489 9.65601C12.2229 9.81132 12.1 9.9557 11.9807 10.0957C11.5362 10.6175 11.1436 11.0784 10.845 11.817C10.6917 12.3676 10.1882 12.75 9.61401 12.75H6.49865C5.94059 12.75 5.4475 12.3885 5.28023 11.8592C4.94832 11.1283 4.54484 10.6759 4.09681 10.1735C3.95966 10.0197 3.81833 9.86121 3.6736 9.68863C3.36911 9.32555 3.06676 8.91051 2.84622 8.37955C2.62423 7.84511 2.5 7.22989 2.5 6.475ZM8 2.5C5.78712 2.5 4 4.28339 4 6.475C4 7.05813 4.09452 7.47443 4.23148 7.80417C4.36988 8.13738 4.56666 8.41917 4.82294 8.72477C4.921 8.8417 5.03128 8.96462 5.14936 9.09624C5.61907 9.6198 6.21221 10.2809 6.65099 11.25H7.25V9.06066L6.21967 8.03033C5.92678 7.73744 5.92678 7.26256 6.21967 6.96967C6.51256 6.67678 6.98744 6.67678 7.28033 6.96967L8 7.68934L8.71967 6.96967C9.01256 6.67678 9.48744 6.67678 9.78033 6.96967C10.0732 7.26256 10.0732 7.73744 9.78033 8.03033L8.75 9.06066V11.25H9.4563C9.85675 10.2639 10.4333 9.59198 10.8929 9.05632C10.9969 8.93504 11.095 8.82074 11.1837 8.71137C11.6587 8.12538 12 7.56201 12 6.475C12 4.28339 10.2129 2.5 8 2.5Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M6.5 13.5C6.08579 13.5 5.75 13.8358 5.75 14.25C5.75 14.6642 6.08579 15 6.5 15H9.5C9.91421 15 10.25 14.6642 10.25 14.25C10.25 13.8358 9.91421 13.5 9.5 13.5H6.5Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'bulb_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M2.5 6.475C2.5 3.44751 4.96617 1 8 1C11.0338 1 13.5 3.44751 13.5 6.475C13.5 8.00783 12.9663 8.89446 12.3489 9.65601C12.2229 9.81132 12.1 9.9557 11.9807 10.0957C11.5362 10.6175 11.1436 11.0784 10.845 11.817C10.6917 12.3676 10.1882 12.75 9.61401 12.75H6.49865C5.94059 12.75 5.4475 12.3885 5.28023 11.8592C4.94832 11.1283 4.54484 10.6759 4.09681 10.1735C3.95966 10.0197 3.81833 9.86121 3.6736 9.68863C3.36911 9.32555 3.06676 8.91051 2.84622 8.37955C2.62423 7.84511 2.5 7.22989 2.5 6.475ZM8 2.5C5.78712 2.5 4 4.28339 4 6.475C4 7.05813 4.09452 7.47443 4.23148 7.80417C4.36988 8.13738 4.56666 8.41917 4.82294 8.72477C4.921 8.8417 5.03128 8.96462 5.14936 9.09624C5.61907 9.6198 6.21221 10.2809 6.65099 11.25H7.25V9.06066L6.21967 8.03033C5.92678 7.73744 5.92678 7.26256 6.21967 6.96967C6.51256 6.67678 6.98744 6.67678 7.28033 6.96967L8 7.68934L8.71967 6.96967C9.01256 6.67678 9.48744 6.67678 9.78033 6.96967C10.0732 7.26256 10.0732 7.73744 9.78033 8.03033L8.75 9.06066V11.25H9.4563C9.85675 10.2639 10.4333 9.59198 10.8929 9.05632C10.9969 8.93504 11.095 8.82074 11.1837 8.71137C11.6587 8.12538 12 7.56201 12 6.475C12 4.28339 10.2129 2.5 8 2.5Z',
    'M6.5 13.5C6.08579 13.5 5.75 13.8358 5.75 14.25C5.75 14.6642 6.08579 15 6.5 15H9.5C9.91421 15 10.25 14.6642 10.25 14.25C10.25 13.8358 9.91421 13.5 9.5 13.5H6.5Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
