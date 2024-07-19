

package com.apitable.space.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Working directory setting information view of a space.
 * </p>
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Schema(description = "Working directory setting information view of a space")
public class SpaceNodeVisibleStatusVo {

    @Schema(description = "Space ID", example = "spc10")
    private boolean visibleStatus;
}
