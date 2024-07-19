

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Mention member request parameters.
 * </p>
 */
@Data
@Schema(description = "Mention member request parameters")
public class RemindMemberRo {

    @Schema(description = "Whether to enable notification",
        requiredMode = RequiredMode.REQUIRED, example = "true")
    @NotNull(message = "Whether to enable notification cannot be blank")
    private Boolean isNotify;

    @Schema(description = "Node ID", example = "dstiHMuQnhWkVxBKkU")
    private String nodeId;

    @Schema(description = "View ID", example = "viwwkxEZ3XaDg")
    private String viewId;

    @Schema(description = "Organizational Unit and Record List",
        requiredMode = RequiredMode.REQUIRED)
    @NotEmpty(message = "Organizational unit and record list cannot be empty")
    private List<RemindUnitRecRo> unitRecs;

    @Schema(description = "Association ID: node sharing ID, template ID",
        example = "shr8T8vAfehg3yj3McmDG")
    private String linkId;

    @Schema(description = "Type of notification: 1 member notification, 2 comment notification",
        example = "1")
    private Integer type = 1;

    @Schema(description = "Send additional content of email notification",
        example = "@aaa&nbsp;&nbsp;Incorrect")
    private RemindExtraRo extra = null;
}
