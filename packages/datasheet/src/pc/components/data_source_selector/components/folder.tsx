

import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { FolderNormalFilled } from '@apitable/icons';
import ArrowIcon from 'static/icon/datasheet/datasheet_icon_calender_right.svg';
import styles from './style.module.less';

// richContent: Search results are returned as rich text tags for display highlighting
export const Folder: React.FC<React.PropsWithChildren<{ id: string, onClick?: (id: string) => void, richContent?: boolean }>> = props => {
  const { children, id, richContent, onClick } = props;
  const colors = useThemeColors();
  return (
    <div className={styles.nodeContainerWrapper}>
      <div className={styles.nodeContainer} onClick={() => onClick && onClick(id)}>
        <FolderNormalFilled className={styles.leftIcon} color={colors.fourthLevelText} />
        {richContent ?
          <span className={styles.text} dangerouslySetInnerHTML={{ __html: children as string }} /> :
          <span className={styles.text}>{children}</span>
        }
        <ArrowIcon className={styles.rightIcon} fill={colors.thirdLevelText} />
      </div>
    </div>
  );
};