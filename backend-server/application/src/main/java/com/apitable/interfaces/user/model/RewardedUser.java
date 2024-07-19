

package com.apitable.interfaces.user.model;

/**
 * rewarded user.
 */
public class RewardedUser {

    private Long userId;

    private String nickName;

    public RewardedUser(Long userId, String nickName) {
        this.userId = userId;
        this.nickName = nickName;
    }

    public Long getUserId() {
        return userId;
    }

    public String getNickName() {
        return nickName;
    }
}
