

package com.apitable.space.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Request parameters for space joining application processing.
 * </p>
 */
@Data
@Schema(description = "Request parameters for space joining application processing")
public class SpaceJoinProcessRo {

    @Schema(description = "Notification ID", requiredMode = RequiredMode.REQUIRED,
        type = "java.lang.String", example = "761263712638")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    @NotNull(message = "Notification ID cannot be empty")
    private Long notifyId;

    @Schema(description = "Agree or not", requiredMode = RequiredMode.REQUIRED,
        type = "java.lang.Boolean", example = "true")
    @NotNull(message = "Agree or not cannot be blank")
    private Boolean agree;
}
