

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * ActionSimpleVO.
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ActionVO extends ActionSimpleVO {
    @Schema(description = "Action input", type = "java.lang.String", example = "{}")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class)
    private Object input;
}
