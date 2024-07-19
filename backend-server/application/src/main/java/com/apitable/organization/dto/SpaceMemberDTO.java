

package com.apitable.organization.dto;

import lombok.Builder;
import lombok.Data;

/**
 * space member dto.
 */
@Data
@Builder
public class SpaceMemberDTO {

    private Long userId;

    private String spaceId;

    private String memberName;

    private Boolean isAdmin;
}
