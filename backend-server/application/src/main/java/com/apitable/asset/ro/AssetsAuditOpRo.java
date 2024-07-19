

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * AssetsAuditOpRo.
 */
@Data
@Schema(description = "Attachment manual review results")
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class AssetsAuditOpRo {

    @NotBlank
    @Schema(description = "storage path", example = "space/2020/03/27/1243592950910349313")
    private String assetFileUrl;

    @NotBlank
    @Schema(description = "Review results recommendations", example = "block")
    private String auditResultSuggestion;
}
