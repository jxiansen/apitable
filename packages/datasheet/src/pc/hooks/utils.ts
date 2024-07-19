import { StatusCode, Strings, t } from '@apitable/core';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { openSliderVerificationModal } from 'pc/components/common/slider_verification';
import { getEnvVariables } from 'pc/utils/env';

export const secondStepVerify = (code: number) => {
  const env = getEnvVariables();
  if (env.IS_SELFHOST) {
    return true;
  }
  if (code === StatusCode.SECONDARY_VALIDATION || code === StatusCode.NVC_FAIL) {
    openSliderVerificationModal();
  } else if (code === StatusCode.PHONE_VALIDATION) {
    Modal.confirm({
      title: t(Strings.warning),
      content: t(Strings.status_code_phone_validation),
      onOk: () => {
        if (!env.IS_SELFHOST) {
          window['nvc'].reset();
        }
      },
      type: 'warning',
      okText: t(Strings.got_it),
      cancelButtonProps: {
        style: { display: 'none' },
      },
    });
    return true;
  }
  return true;
};
