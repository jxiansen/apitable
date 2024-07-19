

package com.apitable.space.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Request parameters of space replacement master administrator.
 * </p>
 */
@Data
@Schema(description = "Request parameters of space replacement master administrator")
public class SpaceMainAdminChangeOpRo {

    @Schema(description = "Member ID of the new master administrator", example = "123456",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "The member ID of the new master administrator cannot be empty")
    private Long memberId;
}
