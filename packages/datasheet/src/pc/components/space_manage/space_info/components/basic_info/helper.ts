import { getEnvVariables } from 'pc/utils/env';

export const buildSpaceCertSheetUrl = (spaceId: string) => {
  const formUrlTemplate = getEnvVariables().SPACE_OVERVIEW_SOCIAL_AD_URL!;
  return formUrlTemplate.replace('{spaceId}', spaceId);
};
