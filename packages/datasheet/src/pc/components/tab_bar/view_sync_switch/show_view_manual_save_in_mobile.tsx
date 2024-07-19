

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { MobilePopupContent } from './popup_content/mobile';

const VIEW_MANUAL_SAVE_TIP = 'VIEW_MANUAL_SAVE_TIP';
const DOM_IDDATASHEET_VIEW_CONTAINER_ID = 'DATASHEET_VIEW_CONTAINER_ID';

export const showViewManualSaveInMobile = () => {
  if (document.querySelector(`.${VIEW_MANUAL_SAVE_TIP}`)) {
    return;
  }
  const container = document.createElement('div');
  container.classList.add(VIEW_MANUAL_SAVE_TIP);
  document.body.appendChild(container);
  const root = createRoot(container);

  const datasheetContainer = document.body.querySelector(`#${DOM_IDDATASHEET_VIEW_CONTAINER_ID}`) as HTMLElement;

  if (datasheetContainer) {
    datasheetContainer.style.marginTop = '40px';
  }
  const modalClose = () => {
    root.unmount();
    if (datasheetContainer) {
      datasheetContainer.style.marginTop = '0px';
    }
    container.parentElement?.removeChild(container);
  };

  root.render(
    <Provider store={store}>
      <MobilePopupContent onClose={modalClose} />
    </Provider>,
  );
};
