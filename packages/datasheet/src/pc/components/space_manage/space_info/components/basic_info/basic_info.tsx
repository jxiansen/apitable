

import dayjs from 'dayjs';
import { useMemo } from 'react';
import { shallowEqual } from 'react-redux';
import { Skeleton, Typography } from '@apitable/components';
import { IReduxState, Strings, t } from '@apitable/core';
import { CopyOutlined } from '@apitable/icons';
import { Message } from 'pc/components/common';
import { useAppSelector } from 'pc/store/react-redux';
import { copy2clipBoard } from 'pc/utils';
// @ts-ignore
import { getSocialWecomUnitName } from 'enterprise/home/social_platform/utils';
import styles from './style.module.less';

export const BasicInfo = () => {
  const { spaceInfo, spaceId } = useAppSelector((state: IReduxState) => {
    return {
      spaceInfo: state.space.curSpaceInfo,
      spaceId: state.space.activeId,
    };
  }, shallowEqual);

  const copySuccess = () => {
    Message.success({ content: t(Strings.copy_success) });
  };

  const info = useMemo(() => {
    if (!spaceInfo) return [];

    const { creatorName, createTime, ownerName, isCreatorNameModified, isOwnerNameModified } = spaceInfo;
    const displayCreatorName =
      getSocialWecomUnitName?.({
        name: creatorName,
        isModified: isCreatorNameModified,
        spaceInfo,
      }) || creatorName;
    const displayOwnerName =
      getSocialWecomUnitName?.({
        name: ownerName,
        isModified: isOwnerNameModified,
        spaceInfo,
      }) || ownerName;

    return [
      {
        label: t(Strings.creator),
        value: (
          <Typography variant="body3" className={styles.textEllipsis} ellipsis>
            {displayCreatorName}
          </Typography>
        ),
      },
      {
        label: t(Strings.create_date),
        value: <span>{createTime && dayjs.tz(new Date(createTime)).format('YYYY-MM-DD')}</span>,
      },
      {
        label: t(Strings.primary_admin),
        value: (
          <Typography variant="body3" className={styles.textEllipsis} ellipsis>
            {displayOwnerName}
          </Typography>
        ),
      },
      {
        label: t(Strings.space_id),
        value: (
          <span className={styles.otherApp}>
            {spaceId}
            <span className={styles.copy} onClick={() => copy2clipBoard(spaceId!, copySuccess)}>
              <CopyOutlined />
            </span>
          </span>
        ),
      },
    ];
  }, [spaceId, spaceInfo]);

  if (!spaceInfo) {
    return (
      <>
        <Skeleton count={2} />
        <Skeleton width="61%" />
      </>
    );
  }

  return (
    <div className={styles.basicInfo}>
      <div style={{ maxWidth: '100%' }}>
        {info.map((item) => (
          <Typography variant="body3" className={styles.item} key={item.label}>
            <span className={styles.label}>{item.label}：</span>
            {item.value}
          </Typography>
        ))}
      </div>
    </div>
  );
};
