

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * Node Search Results.
 * </p>
 */
@Data
@Schema(description = "Node Search Results")
@EqualsAndHashCode(callSuper = true)
public class NodeSearchResult extends NodeInfoVo {

    @Schema(description = "Parent Path", example = "nod11")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String superiorPath;
}
