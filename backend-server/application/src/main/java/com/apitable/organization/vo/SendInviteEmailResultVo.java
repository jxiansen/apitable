

package com.apitable.organization.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Send Invitation Message Result View.
 * </p>
 */
@Data
@Schema(description = "Send Invitation Message Result View")
public class SendInviteEmailResultVo {

    @Schema(description = "Total sent", example = "1")
    private int total;

    @Schema(description = "Number of successful sending", example = "1")
    private int success;

    @Schema(description = "Number of sending failures", example = "1")
    private int error;

    @Schema(description = "Whether the mailbox has been bound", example = "true")
    private Boolean isBound;
}
