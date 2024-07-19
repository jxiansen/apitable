

package com.apitable.base.service;

/**
 * Parameter validation related service interface.
 */
public interface ParamVerificationService {

    /**
     * verify phone number.
     *
     * @param phone phone number
     */
    void verifyPhone(String phone);

    /**
     * verify password.
     *
     * @param password password
     */
    void verifyPassword(String password);
}
