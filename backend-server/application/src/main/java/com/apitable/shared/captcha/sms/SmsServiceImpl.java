

package com.apitable.shared.captcha.sms;

import cn.hutool.core.util.StrUtil;
import com.apitable.base.enums.SmsCodeType;
import com.apitable.core.exception.BusinessException;
import com.apitable.interfaces.security.facade.CaptchaServiceFacade;
import com.apitable.interfaces.security.model.CaptchaReceiver;
import com.apitable.shared.captcha.ValidateTarget;
import com.apitable.starter.sms.core.SmsMessage;
import com.apitable.starter.sms.core.SmsSenderTemplate;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * SMS Service Implement.
 * </p>
 *
 * @author Shawn Deng
 */
@Service
@Slf4j
public class SmsServiceImpl implements ISmsService {

    @Autowired(required = false)
    private SmsSenderTemplate smsSenderTemplate;

    @Resource
    private CaptchaServiceFacade captchaServiceFacade;

    @Override
    public void sendValidateCode(ValidateTarget target, String code, SmsCodeType type) {
        if (smsSenderTemplate == null) {
            log.warn("sms service is disabled");
            captchaServiceFacade.sendCaptcha(new CaptchaReceiver(target.getTarget(), code));
            return;
        }
        SmsMessage smsMessage = new SmsMessage();
        smsMessage.setAreaCode(target.getAreaCode());
        smsMessage.setMobile(target.getTarget());
        // International SMS
        if (!smsSenderTemplate.getLocalAreaCode().equals(smsMessage.getAreaCode())) {
            smsMessage.setText(
                StrUtil.format(YunpianTemplate.INTERNATION_GENERAL.getContent(), code));
            smsSenderTemplate.send(smsMessage);
            return;
        }
        // Chinese SMS
        smsMessage.setParams(new String[] {code});
        String smsTemplateCode = type.getTemplate().getTemplateCode();
        if (!TencentConstants.SmsTemplate.isSmsTemplate(smsTemplateCode)) {
            throw new BusinessException("Without SMS template");
        }
        smsMessage.setTemplateCode(smsTemplateCode);
        smsSenderTemplate.send(smsMessage);
    }

    @Override
    public void sendMessage(ValidateTarget target, TencentConstants.SmsTemplate type) {
        if (smsSenderTemplate == null) {
            log.warn("sms service is disabled");
            return;
        }
        SmsMessage smsMessage = new SmsMessage();
        smsMessage.setMobile(target.getTarget());
        smsMessage.setAreaCode(target.getAreaCode());
        // International SMS
        if (!smsSenderTemplate.getLocalAreaCode().equals(smsMessage.getAreaCode())) {
            smsMessage.setText(YunpianTemplate.UPDATE_PASSWORD_SUCCESS_NOTICE.getContent());
            smsSenderTemplate.send(smsMessage);
            return;
        }
        // Chinese SMS
        smsMessage.setTemplateCode(type.getTemplateCode());
        smsMessage.setParams(new String[0]);
        smsSenderTemplate.send(smsMessage);
    }
}
