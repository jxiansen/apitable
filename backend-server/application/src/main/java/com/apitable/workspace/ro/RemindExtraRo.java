

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

/**
 * <p>
 * Comment on specific content.
 * </p>
 */
@Data
@Schema(description = "Other reminders")
public class RemindExtraRo {

    @Deprecated
    @Schema(description = "Record Title", requiredMode = RequiredMode.REQUIRED,
        example = "First column")
    private String recordTitle;

    @Schema(description = "Comments", requiredMode = RequiredMode.REQUIRED,
        example = "@zoe&nbsp;&nbsp;Comments")
    @NotEmpty(message = "Comments")
    private String content;

    @Deprecated
    @Schema(description = "Comment time", requiredMode = RequiredMode.REQUIRED,
        example = "2020.11.26 10:30:36")
    @NotEmpty(message = "Comment time")
    private String createdAt;

}
