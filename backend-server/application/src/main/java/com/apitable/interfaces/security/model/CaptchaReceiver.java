

package com.apitable.interfaces.security.model;

import lombok.Getter;

/**
 * captcha receiver.
 */
@Getter
public class CaptchaReceiver {

    private final String receiver;

    private final String captchaCode;

    public CaptchaReceiver(String receiver, String captchaCode) {
        this.receiver = receiver;
        this.captchaCode = captchaCode;
    }

}
