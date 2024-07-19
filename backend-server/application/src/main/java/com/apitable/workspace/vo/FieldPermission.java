

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Field permission set.
 * </p>
 */
@Data
public class FieldPermission {

    @Schema(description = "Viewable", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean readable;

    @Schema(description = "Editable", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean editable;
}
