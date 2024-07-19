

package com.apitable.space.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Space public invitation link request parameters.
 * </p>
 */
@Data
@Schema(description = "Space public invitation link request parameters")
public class SpaceLinkOpRo {

    @NotNull(message = "Department ID cannot be empty")
    @Schema(description = "Department ID", requiredMode = RequiredMode.REQUIRED,
        type = "java.lang.String", example = "1254")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long teamId;

    @Schema(description = "nodeId", type = "java.lang.String", example = "dst***")
    private String nodeId;
}
