

package com.apitable.interfaces.auth.model;

import lombok.Data;

/**
 * auth param.
 */
@Data
public class AuthParam {

    private String username;

    private String password;

    public AuthParam(String username, String password) {
        this.username = username;
        this.password = password;
    }

}
