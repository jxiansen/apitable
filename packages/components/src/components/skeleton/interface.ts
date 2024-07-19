import React from 'react';

export interface ISkeletonProps {
  count?: number;
  wrapper?: React.FunctionComponent<React.PropsWithChildren<unknown>>;
  width?: string;
  height?: string;
  circle?: boolean;
  image?: boolean;
  style?: React.CSSProperties;
  className?: string;
  type?: 'text' | 'circle';
  disabledAnimation?: boolean;
}
