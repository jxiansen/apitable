

package com.apitable.interfaces.eventbus.model;

import com.apitable.shared.util.information.ClientOriginInfo;

/**
 * user info change event.
 */
public class UserInfoChangeEvent implements EventBusEvent {

    private Long userId;

    private ClientOriginInfo clientOriginInfo;

    public UserInfoChangeEvent(Long userId, ClientOriginInfo clientOriginInfo) {
        this.userId = userId;
        this.clientOriginInfo = clientOriginInfo;
    }

    @Override
    public EventBusEventType getEventType() {
        return EventBusEventType.USER_INFO_CHANGE;
    }

    public Long getUserId() {
        return userId;
    }

    public ClientOriginInfo getClientOriginInfo() {
        return clientOriginInfo;
    }
}
