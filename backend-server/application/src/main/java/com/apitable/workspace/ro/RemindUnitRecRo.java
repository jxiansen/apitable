

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Org Unit and Record Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Org Unit and Record Request Parameters")
public class RemindUnitRecRo {

    @Schema(description = "Record ID List", example = "[\"rec037CbsaKcN\",\"recFa9VgsXMrS\"]")
    private List<String> recordIds;

    @Schema(description = "Org Unit ID List", requiredMode = RequiredMode.REQUIRED,
        example = "[1217029304827183105,1217029304827183106]")
    @NotEmpty(message = "The organizational unit list cannot be empty")
    private List<Long> unitIds;

    @Schema(description = "Record Title", example = "This is a record")
    private String recordTitle;

    @Schema(description = "Column name", example = "This is a column name")
    private String fieldName;
}
