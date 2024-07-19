

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Image audit result request parameters.
 * </p>
 */
@Data
@Schema(description = "Image audit result request parameters")
public class AttachAuditItemsRo {


    @Schema(description = "Operation instructions for processing file results",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Operation instructions for processing file results")
    private String cmd;

    @Schema(description = "Operation status code of processing file results",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Operation status code of processing file results")
    private String code;

    @Schema(description = "Operation description of processing file results",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Operation description of processing file results")
    private String desc;

    @Schema(description = "Results of processing files", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Results of processing files")
    private AttachAuditResultDisableRo result;

}
