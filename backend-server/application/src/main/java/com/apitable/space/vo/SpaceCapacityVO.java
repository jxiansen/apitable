

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Space Capacity VO.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Attachment capacity information view for spaces")
public class SpaceCapacityVO {

    @Schema(description = "used capacity unit byte", type = "java.lang.String", example = "1024")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long usedCapacity;

    @Schema(description = "current package capacity unit byte", type = "java.lang.String",
        example = "1024")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long currentBundleCapacity;
}
