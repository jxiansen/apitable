

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Transfer sharing node request parameters.
 * </p>
 */
@Data
@Schema(description = "Transfer sharing node request parameters")
public class StoreShareNodeRo {

    @NotBlank(message = "Space ID cannot be empty")
    @Schema(description = "Space ID", example = "spc20cjiwis2")
    private String spaceId;

    @NotBlank(message = "The share ID cannot be empty")
    @Schema(description = "Share ID", example = "shrSJ921CNsj")
    private String shareId;
}
