

package com.apitable.interfaces.eventbus.model;

import com.apitable.shared.util.information.ClientOriginInfo;

/**
 * captcha event.
 */
public class CaptchaEvent implements EventBusEvent {

    private final ClientOriginInfo clientOriginInfo;

    public CaptchaEvent(ClientOriginInfo clientOriginInfo) {
        this.clientOriginInfo = clientOriginInfo;
    }

    @Override
    public EventBusEventType getEventType() {
        return EventBusEventType.CAPTCHA_GET;
    }

    public ClientOriginInfo getClientOriginInfo() {
        return clientOriginInfo;
    }
}
