

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * AssetsAuditRo.
 */
@Data
@Schema(description = "Attachment manual review results request")
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class AssetsAuditRo {

    private List<AssetsAuditOpRo> assetlist;

    @NotBlank
    @Schema(description = "audit user id", example = "0122454826077721")
    private String auditorUserId;

    @NotBlank
    @Schema(description = "audit user name", example = "name")
    private String auditorName;

}
