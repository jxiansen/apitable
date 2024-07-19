

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Department Modification Request Parameters.
 * </p>
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Modify department information request parameters")
public class UpdateTeamRo {

    @NotNull
    @Schema(description = "Department ID", requiredMode = RequiredMode.REQUIRED,
        type = "java.lang.String", example = "1")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long teamId;

    @Schema(description = "Department name", type = "string", example = "Design Department")
    private String teamName;

    @Schema(description = "Parent ID, 0 if the parent is root",
        requiredMode = RequiredMode.REQUIRED, type = "java.lang.String", example = "0")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long superId;
}
