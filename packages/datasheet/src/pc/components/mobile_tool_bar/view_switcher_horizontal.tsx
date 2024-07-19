

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { Selectors } from '@apitable/core';
import { AutosaveOutlined } from '@apitable/icons';
import { ViewIcon } from 'pc/components/tool_bar/view_switcher/view_icon';
import { changeView } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { isInContainer } from 'pc/utils';
import styles from './style.module.less';

export const ViewSwitcherHorizontal: React.FC<React.PropsWithChildren<unknown>> = () => {
  const snapshot = useAppSelector((state) => Selectors.getSnapshot(state));
  const activeViewId = useAppSelector((state) => Selectors.getActiveViewId(state));
  const colors = useThemeColors();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeItemTarget = document.querySelector(`.${styles.active}`);
    if (!activeItemTarget || !containerRef.current) {
      return;
    }
    const scrollLeft = (activeItemTarget as HTMLDivElement).offsetLeft;
    if (!isInContainer(activeItemTarget, containerRef.current)) {
      containerRef.current.scrollLeft = scrollLeft;
    }
  });

  return (
    <div className={styles.viewList} ref={containerRef}>
      {snapshot &&
        snapshot.meta.views.map((item) => {
          const active = item.id === activeViewId;
          const fillColor = active ? colors.black[50] : colors.secondLevelText;
          return (
            <div
              key={item.id}
              className={classNames(styles.viewItem, {
                [styles.active]: active,
              })}
              onClick={() => changeView(item.id)}
            >
              <ViewIcon viewType={item.type} color={fillColor} />
              <span className={styles.viewItemName}>{item.name}</span>
              {active && item.autoSave && (
                <span
                  style={{
                    marginLeft: 4,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AutosaveOutlined color={'white'} />
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
};
