import { ReactElement } from 'react';
import { colorVars } from '@apitable/components';
import { FieldType } from '@apitable/core';
import { FieldIconMapFieldType } from '@apitable/widget-sdk';

export const getFieldTypeIconOrNull = (type: FieldType): ReactElement | null => {
  return FieldIconMapFieldType[type] as unknown as ReactElement;
};

export const getFieldTypeIcon = (type: FieldType, fillColor: string = colorVars.thirdLevelText, width = 16, height = 16): any => {
  const FieldIcon = FieldIconMapFieldType[type];
  if (!FieldIcon) {
    return <div />;
  }
  const size = width || height;
  return <FieldIcon size={size} color={fillColor} />;
};
