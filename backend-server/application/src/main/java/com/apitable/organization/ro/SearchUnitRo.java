

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Search Org Unit Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Search Org Unit Request Parameters")
public class SearchUnitRo {

    @Schema(description = "Name List",
        requiredMode = RequiredMode.REQUIRED, example = "Zhang San, Li Si")
    @NotBlank(message = "Name list cannot be empty")
    private String names;

    @Schema(description = "Association ID: node sharing ID, template ID", type = "java.lang"
        + ".String", example = "shr8T8vAfehg3yj3McmDG")
    private String linkId;
}
