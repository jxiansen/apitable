import { EmojisConfig, integrateCdnHost } from '@apitable/core';

export const emojiUrl = (icon: string) => {
  const token = EmojisConfig[icon]?.token;
  return token ? integrateCdnHost(token) : null;
};
