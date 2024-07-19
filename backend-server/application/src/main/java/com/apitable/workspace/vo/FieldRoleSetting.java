

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Field Role Setting.
 */
@Data
@Schema(description = "Attribute View of Digital Table Field Role Configuration")
public class FieldRoleSetting {

    @Schema(description = "Enable Allow Collection Table Access",
        type = "java.lang.Boolean", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean formSheetAccessible;
}
