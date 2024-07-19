

package com.apitable.space.dto;

import lombok.Data;

/**
 * space admin info.
 */
@Data
public class SpaceAdminInfoDTO {

    private Long memberId;

    private String avatar;

    private String areaCode;

    private String mobile;

    private String email;

    private String memberName;

    private String spaceName;
}
