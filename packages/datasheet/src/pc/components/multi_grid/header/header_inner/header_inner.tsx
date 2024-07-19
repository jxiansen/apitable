

import * as React from 'react';
import { colorVars } from '@apitable/components';
import { Field, IField } from '@apitable/core';
import { WarnCircleFilled } from '@apitable/icons';
// eslint-disable-next-line no-restricted-imports
import { Tooltip } from 'pc/components/common';
import styles from '../styles.module.less';

export function renderComputeFieldError(field: IField, errText: string, isMobile?: boolean, warnText?: string) {
  if (!field) {
    return;
  }
  const isError = Field.bindModel(field).hasError;
  if (isError || warnText) {
    return (
      <Tooltip title={isError ? errText : warnText} placement={isMobile ? 'topLeft' : 'top'} overlayClassName={styles.errorTip}>
        <WarnCircleFilled color={colorVars.warningColor} size={15} className={styles.warningIcon} />
      </Tooltip>
    );
  }
  return;
}

export function compatible(text: string | object) {
  if (typeof text !== 'string') {
    return '';
  }
  return text.trim();
}
