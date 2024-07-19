

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Edit member information request parameters.
 * </p>
 */
@Data
@Schema(description = "Edit member information request parameters")
public class UpdateMemberRo {

    @NotNull
    @Schema(description = "Member ID",
        requiredMode = RequiredMode.REQUIRED, type = "java.lang.String", example = "1")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long memberId;

    @Schema(description = "Member Name", example = "Zhang San")
    @Size(max = 32, message = "The length cannot exceed 32 bits")
    private String memberName;

    @Schema(description = "Position", example = "Manager")
    private String position;

    @Schema(description = "email", example = "example@qq.com")
    private String email;

    @Size(max = 60, message = "The job number cannot be more than 60 characters")
    @Schema(description = "Job No", example = "\"143613308\"")
    private String jobNumber;

    @Schema(description = "Department ID", type = "List", example = "[\"10101\",\"10102\","
        + "\"10103\",\"10104\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> teamIds;

    @Schema(description = "Department ID", type = "List", example = "[\"10101\",\"10102\","
        + "\"10103\",\"10104\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> roleIds;

    @Schema(description = "Attribution tag ID set", type = "List", example = "[\"10101\","
        + "\"10102\",\"10103\",\"10104\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> tagIds;
}
