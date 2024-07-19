

package com.apitable.space.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Space vo.
 * </p>
 */
@Data
@Schema(description = "Space vo")
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class CreateSpaceResultVo {

    @Schema(description = "Space ID", example = "spc10")
    private String spaceId;
}
