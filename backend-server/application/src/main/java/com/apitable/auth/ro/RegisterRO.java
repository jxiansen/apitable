

package com.apitable.auth.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import lombok.Data;

/**
 * Login Request Parameters.
 *
 * @author Chambers
 */
@Data
@Schema(description = "Authorization Sign Up Request Parameters")
public class RegisterRO {

    @Schema(description = "Username(email/telephone...)",
        example = "xxxx@apitable.com", requiredMode = RequiredMode.REQUIRED)
    private String username;

    @Schema(description = "Credential(password/verify code...)",
        example = "qwer1234 || 261527", requiredMode = RequiredMode.REQUIRED)
    private String credential;

    @Schema(description = "Language",
        example = "en-US", requiredMode = RequiredMode.NOT_REQUIRED)
    private String lang;
}
