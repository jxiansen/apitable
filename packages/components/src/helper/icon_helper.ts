import { InfoCircleFilled, WarnCircleFilled, CheckCircleFilled, WarnFilled } from '@apitable/icons';
import React from 'react';

export const IconMap: any = {
  default: InfoCircleFilled,
  error: WarnCircleFilled,
  warning: WarnFilled,
  success: CheckCircleFilled,
};

/**
 * Multicolor icons do not use currentColor
 * @param icon
 * @returns
 */
const shouldUseCurrentColor = (icon: React.ReactElement) => {
  if (Array.isArray(icon?.props?.color)) {
    return false;
  }
  return true;
};
export const getCurrentColorIcon = (icon?: React.ReactElement) => {
  return icon && shouldUseCurrentColor(icon) ? React.cloneElement(icon, { currentColor: true }) : icon;
};
