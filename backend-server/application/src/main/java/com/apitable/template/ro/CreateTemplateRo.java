

package com.apitable.template.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * <p>
 * Create Template Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Create Template Request Parameters")
public class CreateTemplateRo {

    @Schema(description = "Template Name", requiredMode = RequiredMode.REQUIRED,
        example = "This is a template")
    @NotBlank(message = "Template name cannot be empty")
    @Size(max = 100, message = "The name length cannot exceed 100 bits")
    private String name;

    @Schema(description = "Node Id of template creation",
        requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "Node Id cannot be empty")
    private String nodeId;

    @Schema(description = "Whether to retain data", example = "true")
    private Boolean data = true;
}
