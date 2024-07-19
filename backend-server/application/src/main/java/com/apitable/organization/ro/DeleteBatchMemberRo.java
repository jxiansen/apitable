

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Delete Member Request Parameter.
 * </p>
 */
@Data
@Schema(description = "Batch Delete Member Request Parameters")
public class DeleteBatchMemberRo {

    @Schema(description = "Delete action (0: delete this department, 1: delete from the "
        + "organization structure completely)", example = "0")
    private int action;

    @NotEmpty
    @Schema(description = "Member ID Collection", type = "List", example = "[\"10101\",\"10102\","
        + "\"10103\",\"10104\"]", requiredMode = RequiredMode.REQUIRED)
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> memberId;

    @Schema(description = "Department ID, if it is the root department, can not be transferred. "
        + "It is deleted from the root door by default,"
        + " consistent with the principle of removing members from the space",
        requiredMode = RequiredMode.REQUIRED, type = "java.lang.String", example = "1")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long teamId;
}
