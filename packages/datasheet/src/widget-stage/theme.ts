

import { ThemeName } from '@apitable/components';
import { getEnvVariables } from 'pc/utils/env';

export const initTheme = () => {
  const query = new URLSearchParams(window.location.search);
  let localTheme = localStorage.getItem('theme');
  localTheme = localTheme ? (localTheme.includes(ThemeName.Dark) ? ThemeName.Dark : ThemeName.Light) : null;
  const theme = query.get('theme') || localTheme || getEnvVariables().SYSTEM_CONFIGURATION_DEFAULT_THEME || ThemeName.Light;
  switchTheme(theme as ThemeName);
};

export const switchTheme = (theme?: ThemeName) => {
  if (!theme) {
    return;
  }
  const html = document.querySelector('html');
  html?.setAttribute('data-theme', theme);
};

export const getTheme = () => {
  const html = document.querySelector('html');
  return (html?.getAttribute('data-theme') as ThemeName) || getEnvVariables().SYSTEM_CONFIGURATION_DEFAULT_THEME || ThemeName.Light;
};
