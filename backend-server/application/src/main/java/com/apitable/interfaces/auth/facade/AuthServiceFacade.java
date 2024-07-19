

package com.apitable.interfaces.auth.facade;

import com.apitable.interfaces.auth.model.AuthParam;
import com.apitable.interfaces.auth.model.UserAuth;
import com.apitable.interfaces.auth.model.UserLogout;

/**
 * Auth Service Facade.
 */
public interface AuthServiceFacade {

    /**
     * user login.
     *
     * @param param login param
     * @return {@link UserAuth}
     */
    UserAuth ssoLogin(AuthParam param);

    /**
     * user logs out.
     *
     * @param userAuth {@link UserAuth}
     * @return {@link UserLogout}
     */
    UserLogout logout(UserAuth userAuth);
}
