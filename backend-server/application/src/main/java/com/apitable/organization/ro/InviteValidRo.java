

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Invitation link verification parameters.
 * </p>
 */
@Data
@Schema(description = "Invitation link verification parameters")
public class InviteValidRo {

    @NotBlank
    @Schema(description = "Invite link one-time token",
        example = "b10e5e36cd7249bdaeab3e424308deed")
    private String token;

    @Schema(description = "nodeId", example = "dst****")
    private String nodeId;

    @Schema(description = "Password login for human-machine verification, and the front end "
        + "obtains the value of get NVC Val function (human-machine verification will be "
        + "performed when not logged in)", example = "FutureIsComing")
    private String data;
}
