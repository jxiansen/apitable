import { FC } from 'react';
import { DATASHEET_ID } from '@apitable/core';
import style from './style.module.less';

export const ExpandRecordPanel: FC<React.PropsWithChildren<unknown>> = () => {
  return <div className={style.expandRecordPanel} id={DATASHEET_ID.SIDE_RECORD_PANEL} />;
};
