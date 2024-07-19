import { useKeyPress, useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeName, ThemeProvider } from '@apitable/components';
import { Selectors, StoreActions } from '@apitable/core';
import { SystemTheme } from 'pc/common/theme';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';

const ThemeWrapper: React.FC<React.PropsWithChildren<unknown>> = (props) => {
  const [theme, setTheme] = useLocalStorageState<ThemeName>('theme', {
    defaultValue: (getEnvVariables().SYSTEM_CONFIGURATION_DEFAULT_THEME as ThemeName) || ThemeName.Light,
  });
  const [systemTheme, setSystemTheme] = useLocalStorageState<SystemTheme>('systemTheme', { defaultValue: SystemTheme.Close });
  const dispatch = useDispatch();
  const cacheTheme = useAppSelector(Selectors.getTheme);

  useEffect(() => {
    const curTheme = theme || ThemeName.Light;
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', curTheme);
    dispatch(StoreActions.setTheme(curTheme));
  }, [dispatch, theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newSystemTheme: null | string = null;
      try {
        newSystemTheme = localStorage.getItem('systemTheme');
      } catch (e) {}
      if (newSystemTheme && JSON.parse(newSystemTheme) !== systemTheme) {
        setSystemTheme(systemTheme === SystemTheme.Close ? SystemTheme.Open : SystemTheme.Close);
      }
    }, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [setSystemTheme, systemTheme]);

  useEffect(() => {
    if (!systemTheme || systemTheme === SystemTheme.Close) return;
    const themeMedia = window.matchMedia('(prefers-color-scheme: light)');
    // Reset the theme when the systemTheme state changes to open
    setTheme(themeMedia.matches ? ThemeName.Light : ThemeName.Dark);
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTheme(ThemeName.Light);
      } else {
        setTheme(ThemeName.Dark);
      }
    };
    themeMedia.addEventListener('change', listener);
    return () => {
      themeMedia.removeEventListener('change', listener);
    };
  }, [setTheme, systemTheme]);

  useKeyPress(['shift.meta.l'], () => {
    theme === ThemeName.Light ? setTheme(ThemeName.Dark) : setTheme(ThemeName.Light);
  });

  return <ThemeProvider theme={cacheTheme}>{props.children}</ThemeProvider>;
};

export default ThemeWrapper;
