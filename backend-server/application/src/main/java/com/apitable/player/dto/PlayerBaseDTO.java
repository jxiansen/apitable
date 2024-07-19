

package com.apitable.player.dto;

import lombok.Data;

/**
 * player base dto.
 */
@Data
public class PlayerBaseDTO {
    private String uuid;

    private Long memberId;

    private String userName;

    private String memberName;

    private String avatar;

    private Integer color;

    private String nickName;

    private String team;

    private Boolean isNickNameModified;

    private Boolean isMemberNameModified;

    private String email;

    private Boolean isMemberDeleted;
}
