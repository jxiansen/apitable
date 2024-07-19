import classNames from 'classnames';
import { Box, Typography, useThemeColors } from '@apitable/components';
import { MemberType, Strings, t } from '@apitable/core';
import { Avatar, AvatarSize, AvatarType } from 'pc/components/common';

import { IMemberItem } from '../interface';
import styles from './style.module.less';

export const UnitItem: React.FC<React.PropsWithChildren<IMemberItem>> = (record) => {
  const colors = useThemeColors();

  return (
    <Box display={'flex'} alignItems={'center'}>
      <div className={classNames(styles.unitItem, record.unitType === MemberType.Team && styles.unitItemTeam)}>
        <Avatar
          src={record.avatar}
          id={record.unitId}
          title={record.nickName || record.unitName || t(Strings.unnamed)}
          avatarColor={record.avatarColor}
          size={AvatarSize.Size20}
          type={record.unitType === MemberType.Member ? AvatarType.Member : AvatarType.Team}
        />
        <Typography className={styles.unitName} variant="body4" ellipsis>
          {record.unitName}
        </Typography>
      </div>
      {record.isAdmin && (
        <div className={styles.unitTag}>
          <Typography color={colors.borderOnbrandDefault} variant="body4">
            {t(Strings.admin)}
          </Typography>
        </div>
      )}
    </Box>
  );
};
