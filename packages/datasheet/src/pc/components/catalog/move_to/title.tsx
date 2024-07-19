

import { Button, Typography, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { ChevronLeftOutlined } from '@apitable/icons';
import styles from './style.module.less';

export const Title: React.FC<React.PropsWithChildren<{ nodeName: string }>> = (props) => {
  return (
    <div className={styles.title}>
      <Typography className={styles.titleFont} ellipsis variant="h6">
        {t(Strings.move_to_modal_title, { name: props.nodeName })}
      </Typography>
    </div>
  );
};

export const MobileTitle: React.FC<
  React.PropsWithChildren<{
    nodeName?: string;
    showBackIcon?: boolean;
    onClick: () => void;
  }>
> = (props) => {
  const { nodeName, showBackIcon, onClick } = props;
  const colors = useThemeColors();
  return (
    <>
      {showBackIcon && (
        <div className={styles.mobileTitleBack} onClick={onClick}>
          <ChevronLeftOutlined size={24} color={colors.textCommonTertiary} />
        </div>
      )}
      {nodeName}
    </>
  );
};

export const MobileFooter: React.FC<
  React.PropsWithChildren<{
    confirmLoading?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
  }>
> = (props) => {
  const { confirmLoading, onCancel, onConfirm } = props;
  return (
    <div className={styles.mobileFooter}>
      <Button variant="fill" size="large" onClick={onCancel}>
        {t(Strings.cancel)}
      </Button>
      <Button loading={confirmLoading} color="primary" size="large" onClick={onConfirm}>
        {t(Strings.move_to)}
      </Button>
    </div>
  );
};
