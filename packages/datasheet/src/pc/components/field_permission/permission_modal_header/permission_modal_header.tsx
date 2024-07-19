

import * as React from 'react';
import { Typography, useThemeColors } from '@apitable/components';
import { t, Strings } from '@apitable/core';
import { CloseOutlined } from '@apitable/icons';
import { ScreenSize } from 'pc/components/common/component_display';
import { TComponent } from 'pc/components/common/t_component';
import { useResponsive } from 'pc/hooks';
import styles from './styles.module.less';

interface IPermissionModalHeaderProps {
  typeName: string;
  targetName: string;
  docIcon?: JSX.Element;
  onModalClose?(): void;
  targetIcon?: JSX.Element;
}

export const PermissionModalHeader: React.FC<React.PropsWithChildren<IPermissionModalHeaderProps>> = (props) => {
  const colors = useThemeColors();
  const { typeName, targetName, targetIcon, onModalClose, docIcon } = props;

  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  return (
    <div className={styles.modalHeader}>
      <div className={styles.leftWrapper}>
        <Typography ellipsis variant={'body1'} component={'span'} className={styles.text}>
          <TComponent
            tkey={t(Strings.set_permission_modal_title)}
            params={{
              name: (
                <span className={styles.targetClx}>
                  {targetIcon}
                  <Typography variant={'h6'} component={'span'} ellipsis style={{ flex: 1, maxWidth: isMobile ? 95 : 180 }}>
                    {targetName}
                  </Typography>
                </span>
              ),
              type: typeName,
            }}
          />
        </Typography>
        {docIcon}
      </div>
      {onModalClose && <CloseOutlined color={colors.fourthLevelText} onClick={onModalClose} size={24} />}
    </div>
  );
};
