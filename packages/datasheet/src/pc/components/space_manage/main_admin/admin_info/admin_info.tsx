

import { FC } from 'react';
import { useThemeColors, Typography } from '@apitable/components';
import { IReduxState } from '@apitable/core';
import { Avatar, AvatarSize } from 'pc/components/common';
import { useAppSelector } from 'pc/store/react-redux';
// @ts-ignore
import { getSocialWecomUnitName } from 'enterprise/home/social_platform/utils';
import styles from './style.module.less';

export const AdminInfo: FC<React.PropsWithChildren<unknown>> = () => {
  const colors = useThemeColors();
  const mainAdminInfo = useAppSelector((state: IReduxState) => state.spacePermissionManage.mainAdminInfo);
  const spaceInfo = useAppSelector((state) => state.space.curSpaceInfo);
  const { name = '-', email = '-', isMemberNameModified, avatarColor, nickName } = mainAdminInfo || {};
  const displayName =
    getSocialWecomUnitName?.({
      name,
      isModified: isMemberNameModified,
      spaceInfo,
    }) || name;

  return (
    <div className={styles.adminInfoWrapper}>
      {mainAdminInfo && (
        <Avatar
          title={nickName || name}
          src={mainAdminInfo.avatar}
          avatarColor={avatarColor}
          size={AvatarSize.Size40}
          className={styles.portrait}
          id={mainAdminInfo.name}
        />
      )}
      <div className={styles.infoRight}>
        <Typography variant={'h6'} ellipsis={{ rows: 2 }} color={name === '-' ? colors.fourthLevelText : colors.firstLevelText}>
          {displayName}
        </Typography>
        <Typography variant={'body4'} color={email === '-' ? colors.fourthLevelText : colors.thirdLevelText}>
          {email}
        </Typography>
      </div>
    </div>
  );
};
