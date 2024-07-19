// https://storybook.js.org/docs/react/essentials/controls

import React from 'react';
import { LockOutlined, ShareFilled, RankFilled, WebOutlined } from '@apitable/icons';

export const iconComponents = {
  LockOutlined: <LockOutlined currentColor />,
  ShareFilled: <ShareFilled currentColor />,
  RankFilled: <RankFilled currentColor />,
  WebOutlined: <WebOutlined currentColor />,
};

export const iconArg = {
  options: ['LockOutlined', 'ShareFilled', 'RankFilled', 'WebOutlined'],
  mapping: iconComponents,
};

export const icons = {
  LockOutlined,
  ShareFilled,
  RankFilled,
  WebOutlined,
};

export const iconPrimaryArg = {
  options: ['LockOutlined', 'ShareFilled', 'RankFilled', 'WebOutlined'],
  mapping: icons,
};
