

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * <p>
 * Bundle request parameters.
 * </p>
 */
@Data
@Schema(description = "Bundle request parameters")
public class NodeBundleOpRo {

    @Schema(description = "Upload files", required = true)
    @NotNull(message = "File cannot be empty")
    private MultipartFile file;

    @Schema(description = "Parent class node ID", example = "fodSf4PZBNwut")
    private String parentId;

    @Schema(description = "Predecessor node ID", example = "nod10")
    private String preNodeId;

    @Schema(description = "Password", example = "***")
    private String password;

    @Schema(description = "unit id", example = "111")
    private String unitId;
}
