import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { CloseOutlined } from '@apitable/icons';
import { MoreTool } from '../tool_bar/mobile/more_tool';
import styles from './style.module.less';

interface IHeader {
  fileName: string;
  readonly: boolean;
  downloadSrc: string;
  onDelete(): void;
  onClose(): void;
  disabledDownload?: boolean;
}

export const Header: React.FC<React.PropsWithChildren<IHeader>> = (props) => {
  const { fileName, readonly, downloadSrc, onDelete, onClose, disabledDownload } = props;
  const colors = useThemeColors();
  return (
    <header className={styles.previewHeader}>
      <div className={styles.headerLeft}>
        <div className={styles.toolClose} onClick={onClose}>
          <CloseOutlined color={colors.staticWhite0} size={16} />
        </div>
      </div>
      <span className={styles.fileName}>{fileName}</span>
      <div className={styles.headerRight}>
        <MoreTool readonly={readonly} onDelete={onDelete} downloadSrc={downloadSrc} disabledDownload={disabledDownload} />
      </div>
    </header>
  );
};
