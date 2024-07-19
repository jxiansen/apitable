

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * <p>
 * Upload Employee Template Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Upload Employee Template Request Parameters")
public class UploadMemberTemplateRo {

    @NotNull(message = "The import file cannot be empty")
    @Schema(description = "Import File", requiredMode = RequiredMode.REQUIRED)
    private MultipartFile file;

    @Schema(description = "Password login for human-machine verification, and the front end "
        + "obtains the value of get NVC Val function (human-machine verification will be "
        + "performed when not logged in)", example = "FutureIsComing")
    private String data;
}
