

import classNames from 'classnames';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { Selectors, t, Strings } from '@apitable/core';
import { CheckCircleFilled } from '@apitable/icons';
import { ViewIcon } from 'pc/components/tool_bar/view_switcher/view_icon';
import { changeView } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import styles from './style.module.less';

interface IViewListBox {
  displayState: boolean;
  hideViewList: () => void;
}

export const ViewListBox: React.FC<React.PropsWithChildren<IViewListBox>> = (props) => {
  const colors = useThemeColors();
  const { hideViewList, displayState } = props;
  const snapshot = useAppSelector((state) => Selectors.getSnapshot(state));
  const activeViewId = useAppSelector((state) => Selectors.getActiveViewId(state));

  const switchView = (id: string) => {
    if (activeViewId === id) {
      hideViewList();
      return;
    }
    changeView(id);
    hideViewList();
  };

  return (
    <>
      <div
        className={classNames({
          [styles.active]: displayState,
          [styles.viewList]: true,
        })}
      >
        <h2>{t(Strings.view_list)}</h2>
        {snapshot &&
          snapshot.meta.views.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => switchView(item.id)}
                className={classNames({
                  [styles.viewItem]: true,
                  [styles.active]: item.id === activeViewId,
                })}
              >
                <ViewIcon viewType={item.type} />
                <span>{item.name}</span>
                {item.id === activeViewId && <CheckCircleFilled color={colors.primaryColor} />}
              </div>
            );
          })}
      </div>
      <div className={classNames({ [styles.active]: displayState, [styles.mask]: true })} onClick={hideViewList} />
    </>
  );
};
