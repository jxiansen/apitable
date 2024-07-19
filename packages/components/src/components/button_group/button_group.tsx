

import React from 'react';
import { IButtonGroupProps } from './interface';
import { ButtonGroupBase } from './styled';

export const ButtonGroup = React.forwardRef(({
  children,
}:IButtonGroupProps, _ref: React.Ref<HTMLButtonElement>) => {
  return (
    <ButtonGroupBase >
      {children}
    </ButtonGroupBase>
  );
});
