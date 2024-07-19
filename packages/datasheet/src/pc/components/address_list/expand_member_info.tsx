

import { Drawer } from 'antd';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Strings, t } from '@apitable/core';
import { ChevronLeftOutlined } from '@apitable/icons';
import { store } from 'pc/store';
import { MemberInfo } from './member_info';
import styles from './style.module.less';

export const expandMemberInfo = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);

  function destroy() {
    root.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function close() {
    setTimeout(() => {
      destroy();
    }, 0);
  }

  function render() {
    setTimeout(() => {
      root.render(
        <Provider store={store}>
          <div className={styles.memberInfoDrawer}>
            <Drawer placement="right" height={'100%'} width={'100%'} visible closable={false}>
              <div className={styles.mobileBack} onClick={close}>
                <ChevronLeftOutlined color="currentColor" />
                <span>{t(Strings.back)}</span>
              </div>
              <MemberInfo />
            </Drawer>
          </div>
        </Provider>,
      );
    });
  }

  render();
};
