import { useCallback } from 'react';
import { ConfigConstant } from '@apitable/core';
import { TriggerCommands } from 'modules/shared/apphook/trigger_commands';
import { navigationToUrl } from 'pc/components/route_manager/navigation_to_url';
import { getEnvVariables } from 'pc/utils/env';
// @ts-ignore
import { clearWizardsData } from 'enterprise/guide/utils';

export const useContactUs = () => {
  return useCallback(() => {
    const { HELP_MENU_CONTACT_US_URL, HELP_MENU_CONTACT_US_TYPE } = getEnvVariables();

    if (HELP_MENU_CONTACT_US_URL) {
      navigationToUrl(HELP_MENU_CONTACT_US_URL);
    }

    if (HELP_MENU_CONTACT_US_TYPE !== 'qrcode') {
      window.LiveChatWidget?.call('maximize');
    } else {
      clearWizardsData?.();
      localStorage.setItem('vika_guide_start', 'vikaby');
      TriggerCommands.open_guide_wizard?.(ConfigConstant.WizardIdConstant.CONTACT_US_GUIDE);
    }
  }, []);
};
