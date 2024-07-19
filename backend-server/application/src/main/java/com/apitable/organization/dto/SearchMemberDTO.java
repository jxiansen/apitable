

package com.apitable.organization.dto;

import java.util.List;
import lombok.Data;

/**
 * search member dto.
 */
@Data
public class SearchMemberDTO {

    private Long unitId;

    private Long memberId;

    private String memberName;

    private String avatar;

    private Integer color;

    private String nickName;

    private Boolean isActive;

    private List<MemberTeamDTO> team;

    private Boolean isNickNameModified;

    private Boolean isMemberNameModified;
}
