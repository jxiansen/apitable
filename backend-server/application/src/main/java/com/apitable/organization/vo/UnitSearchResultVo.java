

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Organizational Unit Search Results View.
 * </p>
 */
@Data
@Schema(description = "Organizational Unit Search Results View")
public class UnitSearchResultVo {

    @Schema(description = "Department List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitTeamVo> teams;

    @Schema(description = "Tag List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitTagVo> tags;

    @Schema(description = "Member List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitMemberVo> members;
}
