

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * Batch Field Role Delete Ro.
 */
@Data
@Schema(description = "Batch data table field role deletion request parameter")
public class BatchFieldRoleDeleteRo {

    @NotEmpty(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID Set", type = "java.util.List",
        requiredMode = RequiredMode.REQUIRED, example = "[\"1\",\"2\",\"3\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;

}
