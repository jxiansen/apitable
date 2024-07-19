

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Attachment URL Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Attachment Request Parameters")
public class AttachUrlOpRo {

    @Schema(description = "URL of uploaded file", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "File URL cannot be empty")
    private String url;

    @Schema(description = "Type (0: user profile 1: space logo 2: data table attachment)",
        example = "0", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Type cannot be empty")
    @Max(value = 2, message = "ERROR IN TYPE")
    private Integer type;

    @Schema(description = "Data meter node Id (data meter attachment must be transferred)",
        example = "dst10")
    private String nodeId;
}
