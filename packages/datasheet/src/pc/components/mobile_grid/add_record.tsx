import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { ExecuteResult } from '@apitable/core';
import { AddOutlined } from '@apitable/icons';
import { appendRow } from 'modules/shared/shortcut_key/shortcut_actions/append_row';
import { getEnvVariables } from 'pc/utils/env';
import { expandRecordIdNavigate } from '../expand_record';
import styles from './styles.module.less';

interface IAddRecordProps {
  recordId?: string;
  size?: 'large' | 'default';
}

export const AddRecord: React.FC<React.PropsWithChildren<IAddRecordProps>> = (props) => {
  const colors = useThemeColors();
  const { recordId, size = 'default' } = props;

  const onClick = async () => {
    const result = await appendRow({ recordId });
    if (result.result === ExecuteResult.Success) {
      const _recordId = result.data && result.data[0];
      expandRecordIdNavigate(_recordId);
    }
  };

  const outerSize = size === 'large' ? 60 : 48;
  const innerSize = size === 'large' ? 24 : 16;

  return (
    <div
      className={styles.addRecordContainer}
      onClick={onClick}
      style={{
        width: outerSize,
        height: outerSize,
        background: getEnvVariables().ADD_RECORD_BUTTON_BG_COLOR,
        boxShadow: getEnvVariables().ADD_RECORD_BUTTON_BG_COLOR ? 'unset' : '',
      }}
    >
      <div className={styles.btnWrapper}>
        <AddOutlined size={innerSize} color={colors.black[50]} />
      </div>
    </div>
  );
};
