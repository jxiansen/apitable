

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * User LabsFeature Ro.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Laboratory function setting request object")
public class UserLabsFeatureRo {

    @Schema(description = "Space ID, if left blank, identify the user level function",
        type = "java.lang.String", example = "spc6e2CeZLBFN")
    private String spaceId;

    @Schema(description = "Unique identification of the laboratory function to be operated",
        type = "java.lang.String", example = "render_prompt")
    private String key;

    @Schema(description = "Whether to open", type = "java.lang.Boolean", example = "true")
    private Boolean isEnabled;
}
