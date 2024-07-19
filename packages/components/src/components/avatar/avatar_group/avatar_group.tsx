

import React, { cloneElement, FC, ReactElement } from 'react';
import { IAvatarGroup } from './interface';
import { AvatarGroupStyled } from './styled';
import { Avatar } from '../index';
import { Popover } from 'antd';

export const AvatarGroup: FC<React.PropsWithChildren<IAvatarGroup>> = ({ max = 5, children, maxStyle, size, popoverContent }) => {
  const childrenArr = (Array.isArray(children) ? children : [children]).map((child, index) =>
    cloneElement(child as ReactElement, {
      key: `avatar-key-${index}`,
      size,
    })
  );

  const numOfChildren = childrenArr.length;
  const isOverMax = numOfChildren > max;
  const childrenShow = isOverMax ? childrenArr.slice(0, max) : children;

  return (
    <AvatarGroupStyled size={size}>
      {childrenShow}
      {isOverMax && (
        <Popover trigger="click" placement="bottomRight" content={popoverContent}>
          <Avatar style={maxStyle} size={size}>
            +{numOfChildren - max}
          </Avatar>
        </Popover>
      )}
    </AvatarGroupStyled>
  );
};
