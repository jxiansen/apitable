import { ThemeName } from '@apitable/components';
import { store } from 'pc/store';

let preTheme: ThemeName;

store.subscribe(() => {
  const state = store.getState();
  const theme = state.theme;
  if (theme !== preTheme) {
    preTheme = theme;
    const iframeList = Array.from(document.getElementsByTagName('iframe'));
    iframeList.forEach((v) => {
      v.contentWindow?.postMessage({ type: 'apitable_theme', apitable_theme: theme }, '*');
    });
  }
});
