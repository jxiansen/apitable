

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * Node Information View.
 * </p>
 */
@Data
@Schema(description = "Node Information View")
@EqualsAndHashCode(callSuper = true)
public class NodeInfo extends BaseNodeInfo {

    @Schema(description = "Node icon", example = ":smile")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String icon;

    @Schema(description = "parent node id", example = "fldXxx")
    private String parentId;

    @Schema(description = "role", example = "manager")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String role;

    @Schema(description = "favorite", example = "true")
    private boolean nodeFavorite;
}
