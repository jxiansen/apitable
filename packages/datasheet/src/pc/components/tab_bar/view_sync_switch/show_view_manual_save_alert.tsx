import { useMount, useUpdateEffect } from 'ahooks';
import classnames from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@apitable/components';
import { Selectors } from '@apitable/core';
import { store } from 'pc/store';
import { useAppSelector } from 'pc/store/react-redux';
import { PopupContent } from './popup_content/pc';
import styles from './style.module.less';

const VIEW_MANUAL_SAVE_ALERT = 'VIEW_MANUAL_SAVE_ALERT';

export const ShowViewManualSaveAlert = () => {
  if (document.querySelector(`.${VIEW_MANUAL_SAVE_ALERT}`)) {
    return;
  }
  const container = document.createElement('div');
  container.classList.add(VIEW_MANUAL_SAVE_ALERT);
  document.body.appendChild(container);
  const root = createRoot(container);
  const modalClose = () => {
    root.unmount();
    container.parentElement?.removeChild(container);
  };

  root.render(
    <Provider store={store}>
      <ViewManualSaveAlertContentWithTheme modalClose={modalClose} />
    </Provider>,
  );
};

interface IShowViewManualSaveInPcContentProps {
  modalClose(): void;
}

const ViewManualSaveAlertContentWithTheme: React.FC<React.PropsWithChildren<IShowViewManualSaveInPcContentProps>> = (props) => {
  const cacheTheme = useAppSelector(Selectors.getTheme);
  return (
    <ThemeProvider theme={cacheTheme}>
      <ViewManualSaveAlertContent {...props} />
    </ThemeProvider>
  );
};

const ViewManualSaveAlertContent: React.FC<React.PropsWithChildren<IShowViewManualSaveInPcContentProps>> = (props) => {
  const { modalClose } = props;
  const { datasheetId, viewId } = useAppSelector((state) => state.pageParams);
  const currentView = useAppSelector((state) => Selectors.getCurrentView(state, datasheetId));
  const [show, setShow] = useState(false);
  const isViewLock = Boolean(currentView?.lockInfo);

  useMount(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  });

  useUpdateEffect(() => {
    // Switching datasheets and views requires destroying the component
    modalClose();
  }, [datasheetId, viewId]);

  return (
    <div className={classnames(styles.viewSyncAlert, show && styles.show)}>
      <PopupContent
        autoSave={Boolean(currentView?.autoSave)}
        datasheetId={datasheetId!}
        viewId={viewId!}
        onClose={modalClose}
        contentRef={null}
        isViewLock={isViewLock}
      />
    </div>
  );
};
