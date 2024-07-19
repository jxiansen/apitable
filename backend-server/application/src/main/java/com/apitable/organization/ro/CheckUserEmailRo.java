

package com.apitable.organization.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * <p>
 * User verification and comparison of invited mailbox parameters.
 * </p>
 */
@Data
@Deprecated(since = "v1.10.0")
@Schema(description = "User verification and comparison of invited mailbox parameters")
public class CheckUserEmailRo {

    @Schema(description = "Email address, strictly checked",
        requiredMode = RequiredMode.REQUIRED, example = "123456@qq.com")
    @Pattern(regexp = PatternConstants.EMAIL, flags = Pattern.Flag.CASE_INSENSITIVE,
        message = "Incorrect mailbox format")
    private String email;
}
