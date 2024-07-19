

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * DataSheet field role deletion request parameter.
 * </p>
 */
@Data
@Schema(description = "DataSheet field role deletion request parameter")
public class FieldRoleDeleteRo {

    @NotNull(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID", type = "java.lang.String", required = true, example =
        "761263712638")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long unitId;
}
