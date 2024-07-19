

/* eslint-disable @typescript-eslint/no-use-before-define */
import { getThemeName } from 'helper/colors';
import React from 'react';
import { ThemeProvider as Provider, ThemeContext as Context } from 'styled-components';
import { light, dark, ThemeName, ITheme } from 'theme';

interface IThemeContext {
  theme?: ThemeName | ITheme;
}

const _Provider: any = Provider;

export const ThemeProvider: React.FC<React.PropsWithChildren<IThemeContext>> = (props) => {
  const { theme } = props;
  const themeName = theme || getThemeName();
  if (typeof themeName !== 'string') {
    return <_Provider theme={themeName} >{props.children}</_Provider>;
  }
  const themeColor = themeName.includes(ThemeName.Dark) ? dark : light;
  return <_Provider theme={themeColor} >{props.children}</_Provider>;
};

export const ThemeContext = Context as IThemeContext;
