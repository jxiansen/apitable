

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * Favorite node information.
 * </p>
 */
@Data
@Schema(description = "Favorite node information")
@EqualsAndHashCode(callSuper = true)
public class FavoriteNodeInfo extends NodeInfoVo {

    @Schema(description = "The predecessor node ID of the favorite node", example = "nod11")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String preFavoriteNodeId;
}
