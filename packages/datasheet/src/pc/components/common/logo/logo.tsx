

import classnames from 'classnames';
import { ThemeName, useThemeColors } from '@apitable/components';
import { getLanguage, integrateCdnHost } from '@apitable/core';

import { getEnvVariables } from 'pc/utils/env';

import LogoTextZhCN from 'static/icon/common/common_logo_text.svg';
import LogoTextEnUS from 'static/icon/common/common_logo_text_en_us.svg';

import styles from './styles.module.less';

const LogoSize = {
  mini: {
    logoSize: 16,
    logoTextHeight: 16,
  },
  small: {
    logoSize: 24,
    logoTextHeight: 24,
  },
  large: {
    logoSize: 32,
    logoTextHeight: 32,
  },
};

interface ILogoProps {
  className?: string;
  text?: boolean;
  size?: 'mini' | 'small' | 'large' | number;
  theme?: ThemeName;
  type?:'LOGO'|'SHARE_LOGO'
}

export const LogoText: React.FunctionComponent<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>> = {
  'zh-CN': LogoTextZhCN,
  'en-US': LogoTextEnUS,
}[getLanguage()];

export const Logo: React.FC<React.PropsWithChildren<ILogoProps>> = (props) => {
  const colors = useThemeColors();

  const { size = 'small', text = true, className, theme = ThemeName.Light, type='LOGO' } = props;
  const isLightTheme = theme === ThemeName.Light;
  const logoSize = typeof size === 'number' ? {
    logoSize: size,
    logoTextHeight: size,
  } : LogoSize[size];

  const envVars = getEnvVariables();

  const renderLogo = () => {
    return (
      <img
        alt="logo"
        src={integrateCdnHost(envVars[type]||envVars.LOGO)}
        style={{ display: 'block', height: `${logoSize.logoSize}px` }}
        width={logoSize.logoSize}
      />
    );
  };

  const renderLogoText = () => {
    if (!text) return null;

    if (envVars.USE_CUSTOM_PUBLIC_FILES) {
      const lightSrc = integrateCdnHost(getEnvVariables().LOGO_TEXT_LIGHT!) || '/logo_text_light.svg';
      const darkSrc = integrateCdnHost(getEnvVariables().LOGO_TEXT_DARK!) || '/logo_text_dark.svg';
      return (
        <img alt="logoText" className={styles.logoText} style={{ height: `${logoSize.logoTextHeight}px` }} src={isLightTheme ? lightSrc : darkSrc} />
      );
    }

    return (
      LogoText && <LogoText fill={isLightTheme ? colors.primaryColor : colors.staticWhite0} width={undefined} height={logoSize.logoTextHeight} />
    );
  };

  return (
    <span className={classnames(styles.logo, className)}>
      <span style={{ width: logoSize.logoSize, height: logoSize.logoSize }}>{renderLogo()}</span>
      {renderLogoText()}
    </span>
  );
};
