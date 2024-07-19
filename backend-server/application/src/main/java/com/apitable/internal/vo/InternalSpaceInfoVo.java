

package com.apitable.internal.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * space information.
 */
@Data
@Schema(description = "space information")
public class InternalSpaceInfoVo {

    @Schema(description = "space id", example = "spc***")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String spaceId;

    @Schema(description = "space labs", example = "{}")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class)
    private SpaceLabs labs;

    /**
     * space labs features.
     */
    @Data
    public static class SpaceLabs {
        @Schema(description = "view manual save", example = "false")
        @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
        private Boolean viewManualSave;

        @Schema(description = "robot", example = "false")
        @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
        private Boolean robot;
    }

}
