

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * ImportExcelOpRo.
 *
 * @author Chambers
 * @since 2019/11/6
 */
@Data
@Schema(description = "Import data table request parameters")
public class ImportExcelOpRo {

    @Schema(description = "Parent Node Id",
        requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "The parent node ID cannot be empty")
    private String parentId;

    @Schema(description = "Import File", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "The import file cannot be empty")
    private MultipartFile file;

    @Schema(description = "View Name", example = "nod10")
    private String viewName;

    @Schema(description = "Unit id", example = "234566")
    private String unitId;
}
