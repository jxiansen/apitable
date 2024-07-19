

package com.apitable.organization.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * <p>
 * User Association Invited Mailbox Parameters.
 * </p>
 */
@Data
@Schema(description = "User Association Invited Mailbox Parameters")
public class UserLinkEmailRo {

    @Schema(description = "Email address, strictly checked",
        requiredMode = RequiredMode.REQUIRED, example = "123456@qq.com")
    @Pattern(regexp = PatternConstants.EMAIL, flags = Pattern.Flag.CASE_INSENSITIVE,
        message = "Incorrect mailbox format")
    private String email;

    @Schema(description = "Invited workspace", example = "spcyQkKp9XJEl")
    private String spaceId;
}
