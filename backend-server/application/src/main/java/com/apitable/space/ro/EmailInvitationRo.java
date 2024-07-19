

package com.apitable.space.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Email Invitation Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Email Invitation Request Parameters")
public class EmailInvitationRo {

    @Valid
    @NotEmpty
    @Size(max = 50, message = "Invite up to 50 members")
    @Schema(description = "Invite Member List", requiredMode = RequiredMode.REQUIRED)
    private List<EmailInvitationMemberRo> invite;

    @Schema(description = "Password login for human-machine verification, and the front end "
        + "obtains the value of get NVC Val function (human-machine verification will be "
        + "performed when not logged in)", example = "FutureIsComing")
    private String data;
}
