

package com.apitable.internal.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * attachment capacity information view for spaces.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Attachment capacity information view for spaces")
public class InternalSpaceCapacityVo {

    @Schema(description = "whether to allow over limiting", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isAllowOverLimit;

    @Schema(description = "used capacity unit byte", type = "java.lang.String", example = "1024")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long usedCapacity;

    @Schema(description = "total capacity unit byte", type = "java.lang.String", example = "1024")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long totalCapacity;

    @Schema(description = "current package capacity unit byte", type = "java.lang.String",
        example = "1024")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long currentBundleCapacity;

    @Schema(description = "gift unexpired capacity unit byte", type = "java.lang.String",
        example = "1024")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long unExpireGiftCapacity;
}
