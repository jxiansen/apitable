

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Org Unit Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Org Unit Request Parameters")
public class OrgUnitRo {

    @Schema(description = "ID", type = "java.lang.String",
        requiredMode = RequiredMode.REQUIRED, example = "120322719823")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long id;

    @NotNull
    @Schema(description = "Classification, only the specified type can be received, 1=department,"
        + " 2=member", requiredMode = RequiredMode.REQUIRED, example = "1")
    private Integer type;
}
