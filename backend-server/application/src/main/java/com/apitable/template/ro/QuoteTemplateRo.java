

package com.apitable.template.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Reference Template Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Reference Template Request Parameters")
public class QuoteTemplateRo {

    @Schema(description = "Template ID", requiredMode = RequiredMode.REQUIRED,
        example = "tplHTbkg7qbNJ")
    @NotBlank(message = "Template ID cannot be empty")
    private String templateId;

    @Schema(description = "Parent node ID", requiredMode = RequiredMode.REQUIRED,
        example = "fodSf4PZBNwut")
    private String parentId;

    @Schema(description = "Whether to retain data", example = "true")
    private Boolean data = true;

    @Schema(description = "where to quote", example = "23445")
    private String unitId;

}
