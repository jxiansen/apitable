

package com.apitable.organization.dto;

import lombok.Data;

/**
 * member base info dto.
 */
@Data
public class MemberBaseInfoDTO {

    private Long id;

    private String uuid;

    private String memberName;

    private String avatar;

    private Integer color;

    private String nickName;

    private String email;

    private Boolean isActive;

    private Boolean isDeleted;

    private Boolean isPaused = false;

    /**
     * whether the nickname of the user has been changed.
     */
    private Boolean isNickNameModified;

    /**
     * Whether the nickname of the member has been changed.
     */
    private Boolean isMemberNameModified;

}
