

package com.apitable.organization.dto;

import java.util.List;
import lombok.Data;

/**
 * team member dto.
 */
@Data
public class TeamMemberDTO {

    private Long teamId;

    private String teamName;

    private Long parentId;

    private List<Long> memberIds;

    private Integer sequence;
}
