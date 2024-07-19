

import classNames from 'classnames';
import { FC } from 'react';
import * as React from 'react';
import { Strings, t } from '@apitable/core';
import styles from './style.module.less';

interface IIdentityProps {
  type: 'mainAdmin' | 'subAdmin' | 'inactive';
  className?: string;
  style?: React.CSSProperties;
}

export const Identity: FC<React.PropsWithChildren<IIdentityProps>> = ({ type, className, style }) => {
  const classes = classNames(
    styles.memberTag,
    {
      [styles.primaryTag]: type === 'mainAdmin',
      [styles.subTag]: type === 'subAdmin',
      [styles.inactiveTag]: type === 'inactive',
    },
    className,
  );
  const getName = () => {
    switch (type) {
      case 'mainAdmin':
        return t(Strings.primary_admin);
      case 'subAdmin':
        return t(Strings.admin);
      case 'inactive':
        return t(Strings.added_not_yet);
      default:
        return '';
    }
  };
  return (
    <span className={classes} style={style}>
      {getName()}
    </span>
  );
};
