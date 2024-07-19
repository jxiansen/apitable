

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Unit role's member information.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@Schema(description = "Unit role's member")
public class UnitRoleMemberVo {

    @Schema(description = "Members under the role")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitMemberInfoVo> members;

    @Schema(description = "Teams under the role")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitTeamInfoVo> teams;
}
