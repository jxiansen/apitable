

import { FC } from 'react';
import * as React from 'react';
import { TextButton } from '@apitable/components';
import { IMemberInfoInSpace, Strings, t, Api, ISpaceBasicInfo } from '@apitable/core';
import { InfoCircleOutlined } from '@apitable/icons';
// eslint-disable-next-line no-restricted-imports
import { Message, Popconfirm, Tooltip } from 'pc/components/common';
import { Identity } from '../../identity';
// @ts-ignore
import { getSocialWecomUnitName } from 'enterprise/home/social_platform/utils';
import styles from './style.module.less';

export const Reinvite: FC<React.PropsWithChildren<{ spaceId: string, record: IMemberInfoInSpace }>> = ({ spaceId, record }) => {
  const reSendEmail = (spaceId, record: IMemberInfoInSpace) => {
    Api.reSendInvite(spaceId, record.email).then((res) => {
      const { success, message } = res.data;
      if (success) {
        Message.success({ content: t(Strings.operate_success) });
      } else {
        Message.error({ content: message });
      }
    });
  };

  if (record.isActive) {
    return null;
  }
  return (
    <Popconfirm type="warning" content={t(Strings.send_again_toast)} onOk={() => reSendEmail(spaceId, record)} trigger="click">
      <InfoCircleOutlined />
    </Popconfirm>
  );
};

export const nameColRender = (value: string, record: IMemberInfoInSpace, spaceInfo: ISpaceBasicInfo | null, spaceId?: string) => {
  const { isPrimary, isSubAdmin, isActive, isMemberNameModified } = record;
  const name =
    getSocialWecomUnitName?.({
      name: value,
      isModified: isMemberNameModified,
      spaceInfo,
    }) || value;
  if (!isActive) {
    return (
      <span>
        {name || t(Strings.record_unnamed)}
        <Reinvite spaceId={spaceId!} record={record} />
      </span>
    );
  }

  const hasIdentity = isPrimary || isSubAdmin;

  return (
    <span className={styles.nameColRender}>
      <Tooltip title={name} textEllipsis>
        <div className={styles.tipText}>{name}</div>
      </Tooltip>
      {hasIdentity && <Identity type={isPrimary ? 'mainAdmin' : 'subAdmin'} className={styles.identity} />}
    </span>
  );
};

export const OperateCol: FC<
  React.PropsWithChildren<{
    prevBtnClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    prevBtnText?: string;
    nextBtnClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    nextBtnText?: string;
    disabledNextBtn?: boolean;
    hideNextBtn?: boolean;
  }>
> = ({ prevBtnClick, prevBtnText = t(Strings.edit), nextBtnClick, nextBtnText = t(Strings.remove_from_the_team), disabledNextBtn, hideNextBtn }) => {
  return (
    <div className={styles.operateCol}>
      <TextButton size="x-small" color="primary" onClick={prevBtnClick}>
        {prevBtnText}
      </TextButton>
      {!hideNextBtn && (
        <>
          <span className={styles.line}>|</span>
          <TextButton size="x-small" color="danger" onClick={nextBtnClick} disabled={disabledNextBtn}>
            {nextBtnText}
          </TextButton>
        </>
      )}
    </div>
  );
};
