import { Progress } from 'antd';
import { FC } from 'react';
import { useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { Message } from 'pc/components/common';
import styles from './style.module.less';

interface IProcessing {
  percent: number;
  cancel: () => void;
  file: File | undefined;
}
export const Processing: FC<React.PropsWithChildren<IProcessing>> = ({ percent, cancel, file }) => {
  const colors = useThemeColors();
  const cancelImport = () => {
    Message.success({ content: t(Strings.upload_canceled) });
    cancel();
  };
  const fileName = file ? file.name : '';
  return (
    <div className={styles.processing}>
      <Progress type="circle" percent={percent - 1} width={80} strokeWidth={5} strokeColor={colors.primaryColor} />
      <div className={styles.fileName}>{fileName}</div>
      <div className={styles.cancelBtn} onClick={cancelImport}>
        {t(Strings.invite_outsider_import_cancel)}
      </div>
    </div>
  );
};
