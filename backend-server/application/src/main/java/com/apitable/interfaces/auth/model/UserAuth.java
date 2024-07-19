

package com.apitable.interfaces.auth.model;

/**
 * user auth object.
 */
public class UserAuth {

    private Long userId;

    public UserAuth(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }
}
