

package com.apitable.organization.dto;

import java.util.List;
import lombok.Data;

/**
 * member team relation dto.
 */
@Data
public class MemberTeamRelDTO {


    private Long memberId;

    private List<MemberTeamDTO> teams;

}
