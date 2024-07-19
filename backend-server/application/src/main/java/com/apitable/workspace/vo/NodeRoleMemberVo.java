

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * Node Member View.
 * </p>
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "Node Member View")
public class NodeRoleMemberVo extends ControlRoleMemberVo {

    @Schema(description = "Whether the member is the control owner")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isControlOwner;
}
