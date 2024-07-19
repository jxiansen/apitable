

package com.apitable.player.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Undo notification parameters.
 * </p>
 */
@Data
@Schema(description = "Undo notification parameters")
public class NotificationRevokeRo {

    @Schema(description = "Uuid of the notified user (optional)")
    private List<String> uuid;

    @Schema(description = "Space ID (optional, either uuid or space ID)", example = "spcHKrd0liUcl")
    protected String spaceId = null;

    @NotBlank(message = "Template ID cannot be empty")
    @Schema(description = "Template ID", requiredMode = RequiredMode.REQUIRED, example = "tplxx")
    private String templateId;

    @Schema(description = "Version number (optional)", example = "v0.12.1.release")
    private String version;

    @Schema(description = "Expiration time (optional) accurate to milliseconds",
        example = "1614587900000")
    private String expireAt;

    @Schema(description = "Undo type: 1 read, 2 delete, read by default", example = "1614587900000")
    private int revokeType = 1;
}
