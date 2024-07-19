

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.IntegerToBooleanSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.apitable.user.vo.UserSimpleVO;
import com.apitable.workspace.vo.NodeSimpleVO;
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
public class AutomationVO {

    @Schema(description = "Robot id", type = "java.lang.String", example = "arb**")
    private String robotId;

    @Schema(description = "Robot name", type = "java.lang.String", example = "test")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String name;

    @Schema(description = "Robot description", type = "java.lang.String", example = "test")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String description;

    @Schema(description = "Robot resource id", type = "java.lang.String", example = "dst***")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String resourceId;

    @Schema(description = "Weather the robot is on use", type = "java.lang.Boolean", example = "true")
    @JsonSerialize(using = IntegerToBooleanSerializer.class)
    private Integer isActive;

    @Schema(description = "updated by", type = "java.lang.Long", example = "1573561644000")
    private UserSimpleVO updatedBy;

    @Schema(description = "updated time(millisecond)", type = "java.lang.Long", example = "1573561644000")
    private Long updatedAt;

    @Schema(description = "Automation props")
    private AutomationSimpleVO.AutomationPropertyVO props;

    @Schema(description = "Recently Run Count for month")
    private Long recentlyRunCount;

    @Schema(description = "Automation triggers list")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<TriggerVO> triggers;

    @Schema(description = "Automation actions list")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<ActionVO> actions;

    @Schema(description = "Automation related resource list")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<NodeSimpleVO> relatedResources;

    @Schema(description = "Automation run num is over limit")
    private Boolean isOverLimit;
}
