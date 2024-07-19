

package com.apitable.workspace.vo;

import com.apitable.organization.vo.UnitMemberVo;
import com.apitable.organization.vo.UnitTagVo;
import com.apitable.organization.vo.UnitTeamVo;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Node Role View.
 * </p>
 */
@Data
@Deprecated
@Schema(description = "Node Role View")
public class NodeRoleVo implements Serializable {

    private static final long serialVersionUID = -3532750242987274847L;

    @Schema(description = "Role", example = "manager")
    private String role;

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
