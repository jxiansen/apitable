

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * <p>
 * New department request parameter.
 * </p>
 */
@Data
@Schema(description = "New department request parameter")
public class CreateTeamRo {

    @NotBlank
    @Size(min = 1, max = 100, message = "Department name cannot exceed 100 characters")
    @Schema(description = "Department name",
        requiredMode = RequiredMode.REQUIRED, example = "Finance Department")
    private String name;

    @NotNull
    @Schema(description = "Parent ID, 0 if the parent is root", type = "java.lang.String",
        example = "0")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long superId;
}
