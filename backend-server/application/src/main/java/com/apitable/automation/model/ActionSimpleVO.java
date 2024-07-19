

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Comparator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * ActionSimpleVO.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActionSimpleVO {

    @Schema(description = "Action id", type = "java.lang.String", example = "***")
    private String actionId;

    @Schema(description = "Action type id", type = "java.lang.String", example = "***")
    private String actionTypeId;

    @Schema(description = "Prev action id", type = "java.lang.String", example = "***")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String prevActionId;

    public static Comparator<ActionSimpleVO> actionComparator = (o1, o2) -> {
        if (null == o1.prevActionId) {
            return -1;
        }
        if (null == o2.prevActionId) {
            return 1;
        }
        if (o1.actionId.equals(o2.prevActionId)) {
            return -1;
        }
        if (o2.actionId.equals(o1.prevActionId)) {
            return 1;
        }
        return 0;
    };
}
