

import { useMount } from 'ahooks';
import { FC } from 'react';
import { Modal, Typography, colorVars } from '@apitable/components';
import { ConfigConstant, Strings, t } from '@apitable/core';
import { getEnvVariables } from 'pc/utils/env';
import styles from './style.module.less';

export const SliderVerification: FC<React.PropsWithChildren<any>> = () => {
  useMount(() => {
    const env = getEnvVariables();
    if (!env.IS_SELFHOST) {
      window['nvc']?.getNC({
        renderTo: ConfigConstant.CaptchaIds.DEFAULT,
        upLang: {
          cn: {
            SLIDE: t(Strings.slider_verification_tips),
          },
        },
      });
    }
  });

  return <div id="nc" />;
};

export const openSliderVerificationModal = () => {
  Modal.confirm({
    className: styles.sliderVerificationModal,
    icon: '',
    title: t(Strings.safety_verification),
    content: (
      <div className={'vk-pb-6'}>
        <Typography variant="body2" color={colorVars.fc1} className={styles.tip}>
          {t(Strings.safety_verification_tip)}
        </Typography>
        <SliderVerification />
      </div>
    ),
    width: 388,
    cancelButtonProps: { style: { display: 'none' } },
    okButtonProps: { style: { display: 'none' } },
    closable: true,
    footer: null,
  });
};
