

package com.apitable.interfaces.user.facade;

import com.apitable.interfaces.user.model.UserLinkRequest;
import com.apitable.shared.cache.bean.SocialAuthInfo;
import com.apitable.shared.cache.bean.UserLinkInfo;

/**
 * default user link service facade implementation.
 */
public class DefaultUserLinkServiceFacadeImpl implements UserLinkServiceFacade {

    @Override
    public void createUserLink(UserLinkRequest userLinkRequest) {

    }

    @Override
    public void wrapperSocialAuthInfo(SocialAuthInfo authInfo) {

    }

    @Override
    public UserLinkInfo getUserLinkInfo(Long userId) {
        return null;
    }
}
