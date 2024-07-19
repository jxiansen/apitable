

package com.apitable.user.dto;

import lombok.Data;

/**
 * User sensitive data DTO.
 */
@Data
public class UserSensitiveDTO {

    private Long id;

    private String code;

    private String mobilePhone;

    private String email;

    private String avatar;

}
