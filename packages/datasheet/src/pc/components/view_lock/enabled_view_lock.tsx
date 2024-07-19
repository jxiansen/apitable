

import { useMount } from 'ahooks';
import keyBy from 'lodash/keyBy';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Message, Typography } from '@apitable/components';
import { Api, CollaCommandName, ExecuteResult, IViewProperty, Selectors, StoreActions, Strings, t } from '@apitable/core';
import { IViewLockProps } from 'pc/components/view_lock/interface';
import styles from 'pc/components/view_lock/style.module.less';
import { resourceService } from 'pc/resource_service';

import { useAppSelector } from 'pc/store/react-redux';

type IEnabledViewLockProps = {
  view: IViewProperty;
} & Omit<IViewLockProps, 'viewId'>;

export const EnabledViewLock: React.FC<React.PropsWithChildren<IEnabledViewLockProps>> = (props) => {
  const { view, onModalClose, unlockHandle } = props;
  const dispatch = useDispatch();
  const unitMap = useAppSelector(Selectors.getUnitMap)!;
  const { manageable } = useAppSelector(Selectors.getPermissions);
  useMount(() => {
    if (!view.lockInfo?.description) {
      return;
    }
    Api.loadOrSearch({ unitIds: view.lockInfo.unitId }).then((res) => {
      const {
        data: { data: resData, success },
      } = res as any;
      if (!resData?.length || !success) {
        return;
      }
      dispatch(StoreActions.updateUnitMap(keyBy(resData, 'unitId')));
    });
  });

  const closeViewLock = () => {
    const { result } = resourceService.instance!.commandManager.execute({
      cmd: CollaCommandName.SetViewLockInfo,
      data: null,
      viewId: view.id,
    });
    if (ExecuteResult.Success === result) {
      Message.success({
        content: t(Strings.view_un_lock_success),
      });
      onModalClose();
      unlockHandle?.();
    }
  };

  return (
    <div>
      <Typography variant={'body2'}>{t(Strings.view_lock_note)}</Typography>
      {view.lockInfo?.description && view.lockInfo?.unitId && unitMap && unitMap[view.lockInfo?.unitId] && (
        <>
          <div className={styles.operator}>
            <Avatar size={'xxs'} src={unitMap[view.lockInfo.unitId].avatar}>
              {unitMap[view.lockInfo.unitId].avatar ? undefined : unitMap[view.lockInfo.unitId].name}
            </Avatar>
            <Typography variant={'body4'}>{unitMap[view.lockInfo.unitId].name}</Typography>
          </div>
          <Typography variant={'body2'} className={styles.desc}>
            {view.lockInfo?.description}
          </Typography>
        </>
      )}
      <div className={styles.buttonGroup}>
        <Button onClick={onModalClose}>{t(Strings.cancel)}</Button>
        <Button color={'primary'} onClick={closeViewLock} disabled={!manageable}>
          {t(Strings.un_lock)}
        </Button>
      </div>
    </div>
  );
};
