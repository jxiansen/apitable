

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import lombok.Data;

/**
 * <p>
 * Delete Member Request Parameter.
 * </p>
 */
@Data
@Schema(description = "Delete Member Request Parameter")
public class DeleteMemberRo {

    @Schema(description = "Delete action (0: delete this department, 1: delete from the "
        + "organization structure completely)", example = "0")
    private int action;

    @Schema(description = "Member ID", type = "java.lang.String", example = "1",
        requiredMode = RequiredMode.REQUIRED)
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long memberId;

    @Schema(description = "Department ID, if it is the root department, can not be transferred. "
        + "It is deleted from the root door by default, consistent with the principle of removing"
        + " members from the space", type = "java.lang.String", example = "1",
        requiredMode = RequiredMode.REQUIRED)
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long teamId;
}
