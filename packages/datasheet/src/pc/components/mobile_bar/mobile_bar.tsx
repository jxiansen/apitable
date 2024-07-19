

import { useRouter } from 'next/router';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { Selectors, Strings, t } from '@apitable/core';
import { ListOutlined } from '@apitable/icons';
import { useSideBarVisible } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import styles from './style.module.less';

export const MobileBar: React.FC<React.PropsWithChildren<{ title?: string }>> = ({ title }) => {
  const { datasheetId } = useAppSelector((state) => state.pageParams);
  const colors = useThemeColors();
  const currentView = useAppSelector((state) => Selectors.getCurrentView(state))!;
  const { setSideBarVisible } = useSideBarVisible();
  const router = useRouter();
  const pathname = router.asPath;

  const matchedOrganization = pathname.includes('/org');

  const matchedWorkSpace = datasheetId && currentView;

  const matchedTemplateCentre = pathname.includes('/template');

  return (
    <div className={styles.shareMobileBar}>
      <div
        onClick={() => {
          setSideBarVisible && setSideBarVisible(true);
        }}
        className={styles.side}
      >
        <ListOutlined size={24} color={colors.firstLevelText} />
      </div>

      <div className={styles.middle}>
        {(matchedOrganization || title) && (
          <div className={styles.matchedOrganization}>
            <span>{title || t(Strings.contacts)}</span>
          </div>
        )}

        {matchedTemplateCentre && !matchedWorkSpace && (
          <div className={styles.matchedOrganization}>
            <span>{t(Strings.nav_templates)}</span>
          </div>
        )}
      </div>
      <div className={styles.right} />
    </div>
  );
};
