

package com.apitable.organization.dto;

import lombok.Data;

/**
 * member dto.
 */
@Data
public class MemberDTO {

    private Long id;

    private String spaceId;

    private Long userId;

    private Long unitId;

    private String memberName;

    private String openId;

    private String avatar;

    private Integer color;

    private String nickName;

    private Boolean isActive;

    private Boolean isDeleted;

    private Integer isSocialNameModified;
}
