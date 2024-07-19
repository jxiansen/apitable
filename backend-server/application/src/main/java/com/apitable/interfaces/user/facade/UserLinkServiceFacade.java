

package com.apitable.interfaces.user.facade;

import com.apitable.interfaces.user.model.UserLinkRequest;
import com.apitable.shared.cache.bean.SocialAuthInfo;
import com.apitable.shared.cache.bean.UserLinkInfo;

/**
 * user link service facade.
 */
public interface UserLinkServiceFacade {

    void createUserLink(UserLinkRequest userLinkRequest);

    void wrapperSocialAuthInfo(SocialAuthInfo authInfo);

    UserLinkInfo getUserLinkInfo(Long userId);
}
