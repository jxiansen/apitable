

package com.apitable.space.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Internal test function status value object.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Internal test function status")
public class FeatureVo {

    @Schema(description = "Unique identification of laboratory function",
        type = "java.lang.String", example = "robot")
    private String key;

    @Schema(description = "Laboratory function category",
        type = "java.lang.String", example = "review")
    private String type;

    @Schema(description = "Laboratory function application internal test form url",
        type = "java.lang.String")
    private String url;

    @Schema(description = "Laboratory function opening status",
        type = "java.lang.Boolean", example = "true")
    private Boolean open;
}
