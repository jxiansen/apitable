

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Node Share Setting Parameter View.
 * </p>
 */
@Data
@Schema(description = "Node Share Setting Parameter View")
public class NodeShareSettingPropsVO {

    @Schema(description = "Can only view", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean onlyRead;

    @Schema(description = "Allow edit", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean canBeEdited;

    @Schema(description = "Allow to be transferred", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean canBeStored;
}
