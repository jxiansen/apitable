

import { useEffect, useState } from 'react';
import { ThemeName, ThemeProvider } from '@apitable/components';
import { getTheme, switchTheme } from './theme';

export const ThemeWrap = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<ThemeName>(getTheme());
  useEffect(() => {
    const messageListener = (event: MessageEvent<any>) => {
      const { data } = event;
      if (data?.type === 'apitable_theme') {
        switchTheme(data?.apitable_theme);
        setTheme(getTheme());
      }
    };
    window.addEventListener('message', messageListener);
    return () => window.removeEventListener('message', messageListener);
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
