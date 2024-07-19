import { FC } from 'react';
import { DATASHEET_ID } from '@apitable/core';
import { ReportWeb } from '../feedback';
import styles from './style.module.less';

interface IProps {
  shareId?: string;
  datasheetId?: string;
}

export const SuspensionPanel: FC<React.PropsWithChildren<IProps>> = ({ shareId, datasheetId }) => {
  return (
    <div className={styles.suspensionPanel}>
      <div id={DATASHEET_ID.APPLICATION_JOIN_SPACE_BTN} />
      {shareId && datasheetId && <ReportWeb nodeId={datasheetId} />}
      <div id={DATASHEET_ID.ADD_RECORD_BTN} />
    </div>
  );
};
