

package com.apitable.organization.dto;

import lombok.Data;

/**
 * team base info dto.
 */
@Data
public class TeamBaseInfoDTO {

    private Long id;

    private String teamName;

    private Integer sequence;

    private Long parentId;

    private String spaceId;
}
