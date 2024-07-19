

package com.apitable.space.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Request parameters of space joining application.
 * </p>
 */
@Data
@Schema(description = "Request parameters of space joining application")
public class SpaceJoinApplyRo {

    @Schema(description = "Space ID", requiredMode = RequiredMode.REQUIRED,
        example = "spczdmQDfBAn5")
    @NotBlank(message = "Space ID cannot be empty")
    private String spaceId;
}
