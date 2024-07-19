

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
 * Adjust member department request parameters.
 */
@Data
@Schema(description = "Adjust member department request parameters")
public class UpdateMemberTeamRo {

    @NotEmpty
    @Schema(description = "Member ID", requiredMode = RequiredMode.REQUIRED, type = "List",
        example = "[\"10101\",\"10102\",\"10103\",\"10104\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> memberIds;

    @Schema(description = "The original department ID list can be blank. If it is blank, it means"
        + " the root department", type = "java.lang.String", example = "271632")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long preTeamId;

    @NotEmpty
    @Schema(description = "Adjusted Department ID List", requiredMode = RequiredMode.REQUIRED,
        type = "List", example = "[\"10101\",\"10102\",\"10103\",\"10104\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> newTeamIds;
}
