

import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { CheckOutlined } from '@apitable/icons';

interface ICheckProps {
  isChecked: boolean;
}

export const Check: React.FC<React.PropsWithChildren<ICheckProps>> = (props) => {
  const colors = useThemeColors();
  const { isChecked } = props;
  if (isChecked) {
    return <CheckOutlined size={16} color={colors.primaryColor} />;
  }
  return <></>;
};
