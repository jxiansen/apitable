import { configResponsive, useResponsive } from 'ahooks';
import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { IReduxState, Navigation } from '@apitable/core';
import { Router } from 'pc/components/route_manager/router';
import { useAppSelector } from 'pc/store/react-redux';
import { getSearchParams } from 'pc/utils';
import { getEnvVariables } from 'pc/utils/env';
import { MobileHome } from './mobile_home';
import { PcHome } from './pc_home';
//@ts-ignore
import { Home as EnterpriseHome } from 'enterprise/home/home';
import styles from './style.module.less';

configResponsive({
  large: 1023.98,
});

const HomeBase: FC<React.PropsWithChildren<unknown>> = () => {
  configResponsive({
    large: 1023.98,
  });
  const responsive = useResponsive();
  const urlParams = getSearchParams();
  const reference = urlParams.get('reference') || undefined;

  const { isLogin } = useAppSelector((state: IReduxState) => ({ isLogin: state.user.isLogin, user: state.user }), shallowEqual);

  if (isLogin) {
    if (reference) {
      Router.redirect(Navigation.HOME, {
        query: {
          reference,
        },
      });
    } else {
      Router.redirect(Navigation.WORKBENCH);
    }
  }

  return (
    <>
      <div className={styles.homeWrapper}>{responsive?.large || process.env.SSR ? <PcHome /> : <MobileHome />}</div>
    </>
  );
};

export const Home = () => {
  return Boolean(EnterpriseHome) && !getEnvVariables().USE_CE_LOGIN_PAGE ? <EnterpriseHome /> : <HomeBase />;
};
