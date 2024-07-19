

import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { BasicValueType } from '@apitable/core';
import { NumberOutlined, CheckboxOutlined, TextOutlined, CalendarOutlined } from '@apitable/icons';

const IconMap = {
  [BasicValueType.Array]: TextOutlined,
  [BasicValueType.DateTime]: CalendarOutlined,
  [BasicValueType.Number]: NumberOutlined,
  [BasicValueType.String]: TextOutlined,
  [BasicValueType.Boolean]: CheckboxOutlined,
};

interface IViewIcon {
  valueType: BasicValueType;
  size?: number;
  fill?: string;
  onClick?: () => void;
}

export const ValueTypeIcon: React.FC<React.PropsWithChildren<IViewIcon>> = (props) => {
  const colors = useThemeColors();
  const { valueType, size = 16, fill = colors.thirdLevelText, onClick } = props;
  const ComponentIcon = valueType && IconMap[valueType];
  if (ComponentIcon) {
    return <ComponentIcon size={size} color={fill} onClick={onClick} />;
  }
  return null;
};
