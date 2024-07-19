

import { useEffect } from 'react';
import { Strings, t } from '@apitable/core';
import { showBannerAlert } from 'pc/components/notification/banner_alert';
import { useAppSelector } from 'pc/store/react-redux';
// @ts-ignore
import { goToUpgrade } from 'enterprise/subscribe_system/upgrade_method';

const BLACK_SPACE_BANNER_ALERT = 'BLACK_SPACE_BANNER_ALERT';

const _showBannerAlert = (destroyPrev = false) => {
  showBannerAlert({
    content: t(Strings.black_space_alert),
    upgrade: true,
    destroyPrev,
    onBtnClick: goToUpgrade,
    id: BLACK_SPACE_BANNER_ALERT,
  });
};

export const useBlackSpace = () => {
  const isBlackSpace = useAppSelector((state) => state.billing?.subscription?.blackSpace);

  useEffect(() => {
    if (!isBlackSpace || location.href.includes('upgrade')) {
      return;
    }

    _showBannerAlert();
    const MutationObserver = window.MutationObserver || (window as any).WebKitMutationObserver || (window as any).MozMutationObserver;
    const mutationObserver = new MutationObserver((list) => {
      list.forEach((item) => {
        if (item.target === document.body) {
          const result = [...item.removedNodes.values()].some((node) => {
            return node['id'] === BLACK_SPACE_BANNER_ALERT;
          });
          if (result) {
            _showBannerAlert();
          }
        }
        const dom = document.getElementById(BLACK_SPACE_BANNER_ALERT);
        if (dom && item.removedNodes.length && dom.contains(item.target)) {
          _showBannerAlert(true);
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const dom = document.getElementById(BLACK_SPACE_BANNER_ALERT);

    if (!dom) {
      return;
    }

    mutationObserver.observe(dom, {
      childList: true,
      subtree: true,
    });
  }, [isBlackSpace]);
};
