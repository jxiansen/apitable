

package com.apitable.interfaces.security.facade;

import com.apitable.interfaces.security.model.CaptchaReceiver;

/**
 * captcha service facade.
 */
public interface CaptchaServiceFacade {

    /**
     * send captcha.
     *
     * @param receiver receiver.
     */
    void sendCaptcha(CaptchaReceiver receiver);
}
