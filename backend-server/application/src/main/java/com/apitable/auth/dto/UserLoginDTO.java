

package com.apitable.auth.dto;

import lombok.Data;

/**
 * user login dto.
 */
@Data
public class UserLoginDTO {

    private Long userId;

    private String unionId;

    private String nickName;

    private Boolean isSignUp;
}
