

package com.apitable.interfaces.user.model;

import lombok.Getter;

/**
 * invitation code.
 */
@Getter
public class InvitationCode {

    private String code;

    public InvitationCode() {
    }

    public InvitationCode(String code) {
        this.code = code;
    }

}
