

package com.apitable.interfaces.social.model;

/**
 * social user bind.
 */
public class SocialUserBind {

    private Long userId;

    private String unionId;

    public SocialUserBind(Long userId, String unionId) {
        this.userId = userId;
        this.unionId = unionId;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUnionId() {
        return unionId;
    }
}
