

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * <p>
 * Invitation code reward request parameters.
 * </p>
 */
@Data
@Schema(description = "Invitation code reward request parameters")
public class InviteCodeRewardRo {

    @NotBlank(message = "The invitation code cannot be empty")
    @Size(min = 8, max = 8, message = "The invitation code can only be 8 digits long")
    @Schema(description = "Invitation code",
        requiredMode = RequiredMode.REQUIRED, example = "12345678")
    private String inviteCode;
}
