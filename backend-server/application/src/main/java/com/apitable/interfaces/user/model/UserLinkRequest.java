

package com.apitable.interfaces.user.model;

import com.apitable.shared.cache.bean.SocialAuthInfo;

/**
 * user link request.
 */
public class UserLinkRequest {

    private Long userId;

    private SocialAuthInfo authInfo;

    public UserLinkRequest(Long userId, SocialAuthInfo authInfo) {
        this.userId = userId;
        this.authInfo = authInfo;
    }

    public Long getUserId() {
        return userId;
    }

    public SocialAuthInfo getAuthInfo() {
        return authInfo;
    }
}
