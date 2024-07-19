

package com.apitable.interfaces.auth.facade;

import com.apitable.interfaces.auth.model.AuthParam;
import com.apitable.interfaces.auth.model.UserAuth;
import com.apitable.interfaces.auth.model.UserLogout;

/**
 * default auth service implement.
 */
public class DefaultAuthServiceFacadeImpl implements AuthServiceFacade {

    /**
     * user login.
     *
     * @param param login param
     * @return {@link UserAuth}
     */
    @Override
    public UserAuth ssoLogin(final AuthParam param) {
        return null;
    }

    /**
     * user logs out.
     *
     * @param userAuth {@link UserAuth}
     * @return {@link UserLogout}
     */
    @Override
    public UserLogout logout(final UserAuth userAuth) {
        return null;
    }
}
