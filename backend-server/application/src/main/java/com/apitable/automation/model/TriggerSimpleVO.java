

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Comparator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TriggerSimpleVO.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TriggerSimpleVO {

    @Schema(description = "Trigger id", type = "java.lang.String", example = "atr***")
    private String triggerId;

    @Schema(description = "Trigger type id", type = "java.lang.String", example = "***")
    private String triggerTypeId;

    @Schema(description = "Trigger type id", type = "java.lang.String", example = "***")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String prevTriggerId;

    public static Comparator<TriggerSimpleVO> triggerComparator = (o1, o2) -> {
        if (null == o1.prevTriggerId) {
            return -1;
        }
        if (null == o2.prevTriggerId) {
            return 1;
        }
        if (o1.triggerId.equals(o2.prevTriggerId)) {
            return -1;
        }
        if (o2.triggerId.equals(o1.prevTriggerId)) {
            return 1;
        }
        return 0;
    };

}
