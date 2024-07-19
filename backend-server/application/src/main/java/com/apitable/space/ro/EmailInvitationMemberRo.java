

package com.apitable.space.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.apitable.shared.constants.PatternConstants;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * <p>
 * Email Invitation Member Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Email Invitation Member Request Parameters")
public class EmailInvitationMemberRo {

    @Schema(description = "Email address, strictly checked",
        requiredMode = RequiredMode.REQUIRED, example = "123456@qq.com")
    @Pattern(regexp = PatternConstants.EMAIL, flags = Pattern.Flag.CASE_INSENSITIVE,
        message = "Incorrect mailbox format")
    private String email;

    @Schema(description = "Assign department ID, optional. If it is not transferred, it will be "
        + "added under the root door of the space by default", type = "java.lang.String",
        example = "16272126")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long teamId;
}
