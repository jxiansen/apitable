

package com.apitable.interfaces.eventbus.model;

import com.apitable.auth.enums.LoginType;
import com.apitable.shared.util.information.ClientOriginInfo;

/**
 * user login event.
 */
public class UserLoginEvent implements EventBusEvent {

    private final Long userId;

    private LoginType loginType;

    private String scene;

    private final boolean register;

    private final ClientOriginInfo clientOriginInfo;

    /**
     * constructs.
     *
     * @param userId           user id
     * @param loginType        login type
     * @param register         register
     * @param clientOriginInfo client origin info
     */
    public UserLoginEvent(Long userId, LoginType loginType, boolean register,
                          ClientOriginInfo clientOriginInfo) {
        this.userId = userId;
        this.loginType = loginType;
        this.register = register;
        this.clientOriginInfo = clientOriginInfo;
    }

    /**
     * constructs.
     *
     * @param userId           user id
     * @param scene            scene
     * @param register         whether is register
     * @param clientOriginInfo client origin info
     */
    public UserLoginEvent(Long userId, String scene, boolean register,
                          ClientOriginInfo clientOriginInfo) {
        this.userId = userId;
        this.scene = scene;
        this.register = register;
        this.clientOriginInfo = clientOriginInfo;
    }

    @Override
    public EventBusEventType getEventType() {
        return EventBusEventType.USER_LOGIN;
    }

    public Long getUserId() {
        return userId;
    }

    public LoginType getLoginType() {
        return loginType;
    }

    public String getScene() {
        return scene;
    }

    public boolean isRegister() {
        return register;
    }

    public ClientOriginInfo getClientOriginInfo() {
        return clientOriginInfo;
    }
}
