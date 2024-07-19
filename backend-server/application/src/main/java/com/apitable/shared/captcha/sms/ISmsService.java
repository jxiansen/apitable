

package com.apitable.shared.captcha.sms;

import com.apitable.base.enums.SmsCodeType;
import com.apitable.shared.captcha.ValidateTarget;

/**
 * <p>
 * sms service interface.
 * </p>
 *
 * @author Shawn Deng
 */
public interface ISmsService {

    /**
     * send sms verification code.
     *
     * @param target verification target
     * @param code   verification code
     * @param type   sms service type
     * @see SmsCodeType
     */
    void sendValidateCode(ValidateTarget target, String code, SmsCodeType type);

    /**
     * send notification sms.
     *
     * @param target verification target
     * @param type   sms service type
     */
    void sendMessage(ValidateTarget target, TencentConstants.SmsTemplate type);
}
