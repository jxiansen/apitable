

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.apitable.shared.support.serializer.StringToJsonObjectSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * TriggerSimpleVO.
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TriggerVO extends TriggerSimpleVO {

    @Schema(description = "Trigger input", type = "java.lang.String", example = "{}")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class, using = StringToJsonObjectSerializer.class)
    private String input;

    @Schema(description = "Trigger resource id", type = "java.lang.String", example = "dst***")
    private String relatedResourceId;
}
