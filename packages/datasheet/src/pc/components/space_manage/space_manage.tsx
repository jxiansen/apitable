import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import SplitPane from 'react-split-pane';
import { Strings, t } from '@apitable/core';
import { useResponsive } from 'pc/hooks';
import { CommonSide } from '../common_side';
import { MobileBar } from '../mobile_bar';
import styles from './style.module.less';

const _SplitPane: any = SplitPane;

const SpaceManage: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  const router = useRouter();
  const { clientWidth } = useResponsive();
  const isMobile = clientWidth <= 800;

  useEffect(() => {
    if (router.pathname === '/management') {
      router.replace('/management/overview');
    }
  }, [router]);

  return (
    <div className={styles.spaceManage}>
      {!isMobile ? (
        <_SplitPane defaultSize={280} minSize={180} maxSize={800} className={styles.navSplit}>
          <CommonSide />
          {children}
        </_SplitPane>
      ) : (
        <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
          <MobileBar title={t(Strings.space_setting)} />
          {children}
        </div>
      )}
    </div>
  );
};

export default SpaceManage;
