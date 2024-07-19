

import { useMount } from 'ahooks';
import { FC, useEffect, useMemo, useState } from 'react';
import { Button, Typography, useThemeColors } from '@apitable/components';
import { Events, IReduxState, Player, StoreActions, Strings, t } from '@apitable/core';
import { useAppDispatch } from 'pc/hooks/use_app_dispatch';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
import { AdminInfo } from './admin_info';
import { MainAdminModal } from './main_admin_modal';
import styles from './style.module.less';

export const MainAdmin: FC<React.PropsWithChildren<unknown>> = () => {
  const colors = useThemeColors();
  const dispatch = useAppDispatch();
  const spaceResource = useAppSelector((state: IReduxState) => state.spacePermissionManage.spaceResource);
  const spaceInfo = useAppSelector((state: IReduxState) => state.space.curSpaceInfo);
  const product = useAppSelector((state: IReduxState) => state.billing?.subscription?.product);

  const [modalVisible, setModalVisible] = useState(false);
  useMount(() => {
    Player.doTrigger(Events.space_setting_main_admin_shown);
  });
  useEffect(() => {
    dispatch(StoreActions.getMainAdminInfo());
  }, [dispatch]);

  const ButtonComponent = useMemo(() => {
    if (!spaceInfo || !spaceResource || !spaceResource.mainAdmin || (product && product.includes('appsumo'))) return null;

    const env = getEnvVariables();

    if (!env.CHANGE_SPACE_ADMIN_VISIBLE) {
      return null;
    }

    return (
      <Button color={'primary'} onClick={() => setModalVisible(true)}>
        {t(Strings.change_primary_admin)}
      </Button>
    );
  }, [spaceResource, spaceInfo]);
  return (
    <div className={styles.superAdmin}>
      <Typography variant={'h6'}>{t(Strings.primary_admin)}</Typography>
      <Typography variant={'body4'} color={colors.thirdLevelText}>
        {t(Strings.main_admin_page_desc)}
      </Typography>
      <div className={styles.card}>
        <AdminInfo />
        {ButtonComponent}
      </div>
      {modalVisible && <MainAdminModal cancelModal={() => setModalVisible(false)} />}
    </div>
  );
};
