

package com.apitable.organization.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Subordinate Org Unit Result View.
 * </p>
 */
@Data
@Schema(description = "Subordinate Org Unit Result View")
public class SubUnitResultVo {

    @Schema(description = "Department List")
    private List<UnitTeamVo> teams = new ArrayList<>();

    @Schema(description = "Member List")
    private List<UnitMemberVo> members = new ArrayList<>();
}
