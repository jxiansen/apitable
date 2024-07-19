

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * role member unit request parameter.
 * </p>
 */
@Data
@Schema(description = "role member unit request parameter")
public class RoleMemberUnitRo {

    @Schema(description = "ID", type = "java.lang.String",
        requiredMode = RequiredMode.REQUIRED, example = "120322719823")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long id;

    @NotNull
    @Schema(description = "unit type，1 = team，3 = member",
        requiredMode = RequiredMode.REQUIRED, example = "1")
    private Integer type;
}
