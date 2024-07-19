import { Typography, useThemeColors } from '@apitable/components';
import { FolderNormalFilled } from '@apitable/icons';
import { Emoji } from 'pc/components/common';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks';
import styles from './style.module.less';

export const FolderItem: React.FC<
  React.PropsWithChildren<{
    folderId: string;
    folderName: string;
    icon: string;
    onClick: (_folderId: string, _nodePrivate?: boolean) => void;
    level?: string;
    nodePrivate?: boolean;
  }>
> = (props) => {
  const { folderId, folderName, icon, onClick, level, nodePrivate } = props;
  const colors = useThemeColors();
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);
  const iconSize = isMobile ? 24 : 16;
  const fontVariant = isMobile ? 'body1' : 'body3';
  const levelVariant = isMobile ? 'body3' : 'body4';
  const Icon = icon ? (
    <Emoji emoji={icon} size={iconSize} className={styles.folderItemIcon} />
  ) : (
    <FolderNormalFilled size={iconSize} className={styles.folderItemIcon} />
  );
  return (
    <div className={styles.folderItem} onClick={() => onClick(folderId, nodePrivate)}>
      <div className={styles.folderItemContent}>
        {Icon}
        <Typography className={styles.folderName} variant={fontVariant} ellipsis>
          <span dangerouslySetInnerHTML={{ __html: folderName }} />
        </Typography>
      </div>
      {level && (
        <Typography color={colors.textCommonTertiary} variant={levelVariant} ellipsis>
          {level}
        </Typography>
      )}
    </div>
  );
};
