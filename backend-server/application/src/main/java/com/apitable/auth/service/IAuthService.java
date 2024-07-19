

package com.apitable.auth.service;

import com.apitable.auth.dto.UserLoginDTO;
import com.apitable.auth.ro.LoginRo;

/**
 * Authorization related service interface.
 */
public interface IAuthService {

    /**
     * Register.
     *
     * @param username username
     * @param password password
     * @return user id
     */
    Long register(String username, String password);

    /**
     * Register.
     *
     * @param username username
     * @param password password
     * @param lang language code
     * @return user id
     */
    Long register(String username, String password, String lang);

    /**
     * Password login, only log in existing users, no need to automatically register an account.
     *
     * @param loginRo request parameters
     * @return user id
     */
    Long loginUsingPassword(LoginRo loginRo);

    /**
     * Login with mobile phone verification code, if it does not exist, the account will be
     * registered automatically.
     *
     * @param loginRo request parameters
     * @return user id
     */
    UserLoginDTO loginUsingSmsCode(LoginRo loginRo);

    /**
     * Email login, only log in existing users, no need to automatically register an account.
     *
     * @param loginRo request parameters
     * @return user id
     */
    UserLoginDTO loginUsingEmailCode(LoginRo loginRo);
}
