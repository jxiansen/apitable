

package com.apitable.user.vo;

import cn.hutool.json.JSONObject;
import com.apitable.shared.support.serializer.LocalDateTimeToMilliSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * <p>
 * Integral Revenue&Expense Record View.
 * </p>
 */
@Data
@Schema(description = "Integral Revenue&Expense Record View")
public class IntegralRecordVO {

    /**
     * Action ID.
     */
    @Schema(description = "Action ID",
        example = "invitation_reward")
    private String action;

    /**
     * Alter type.
     */
    @Schema(description = "Change Type (0: Revenue, 1: Expense)",
        example = "0")
    private Integer alterType;

    /**
     * Alter Value.
     */
    @Schema(description = "Change value (unit: minutes)",
        example = "1000")
    private String alterValue;

    /**
     * Parameter.
     */
    @Schema(description = "Parameter")
    private JSONObject params;

    /**
     * Create Time.
     */
    @Schema(description = "Change time(millisecond)",
        example = "1573561644000")
    @JsonSerialize(using = LocalDateTimeToMilliSerializer.class)
    private LocalDateTime createdAt;
}
