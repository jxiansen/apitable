

import { ConfigConstant } from '@apitable/core';
import { isMobileApp } from './env';

export const isWindowsOS = () => {
  const agent = navigator.userAgent.toLowerCase();
  if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
    return true;
  }
  if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
    return true;
  }
  return false;
};

export const isMac = () => {
  const agent = navigator.userAgent;
  return /macintosh/i.test(agent);
};

export const isWxWork = () => {
  const agent = navigator.userAgent;
  return /wxwork/i.test(agent);
};

export const isDesktop = () => {
  if (process.env.SSR) {
    return;
  }
  return (window as any).bowser.test(/VikaDesktop/);
};

export const getPlatformType = () => {
  if (isDesktop()) {
    return ConfigConstant.PlatFormTypes.Desktop;
  }
  if (isMobileApp()) {
    return ConfigConstant.PlatFormTypes.App;
  }

  return ConfigConstant.PlatFormTypes.Web;
};

export const browserIsDesktop = async () => {
  if (process.env.SSR) {
    return false;
  }
  const device = await import('current-device');
  return device.default.desktop();
};
