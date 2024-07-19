

package com.apitable.automation.model;

import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * AutomationRunTaskVO.
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AutomationRunTaskVO  {
    @Schema(description = "id", type = "java.lang.String")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String id;

    @Schema(description = "taskId", type = "java.lang.String")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String taskId;

    @Schema(description = "robotId", type = "java.lang.String")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String robotId;

    @Schema(description = "spaceId", type = "java.lang.String")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String spaceId;

    @Schema(description = "status", type = "java.lang.Integer")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer status;

    @Schema(description = "createdAt", type = "java.lang.String", example = "{}")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private LocalDateTime createdAt;

    @Schema(description = "Action input", type = "java.lang.String", example = "{}")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class)
    private Object data;
}
