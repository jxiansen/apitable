

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.IntegerToBooleanSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Builder;
import lombok.Data;

/**
 * AutomationSimpleVO.
 */
@Data
@Builder(toBuilder = true)
@Schema(description = "Automation Vo")
public class AutomationSimpleVO {

    @Schema(description = "Robot id", type = "java.lang.String", example = "arb**")
    private String robotId;

    @Schema(description = "Robot name", type = "java.lang.String", example = "test")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String name;

    @Schema(description = "Robot description", type = "java.lang.String", example = "test")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String description;

    @Schema(description = "Robot resource id", type = "java.lang.String", example = "test")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String resourceId;

    @Schema(description = "Weather the robot is on use", type = "java.lang.Boolean", example = "true")
    @JsonSerialize(using = IntegerToBooleanSerializer.class)
    private Integer isActive;

    @Schema(description = "Automation triggers list")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<TriggerSimpleVO> triggers;

    @Schema(description = "Automation actions list")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<ActionSimpleVO> actions;

    /**
     * AutomationPropertyVO.
     */
    @Data
    @Builder(toBuilder = true)
    public static class AutomationPropertyVO {

        @Schema(description = "Automation actions list")
        @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
        private Boolean failureNotifyEnable;
    }

    @Schema(description = "Automation run num is over limit")
    private Boolean isOverLimit;
}
