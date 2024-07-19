

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * List of experimental functions.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "List of experimental function information")
public class LabsFeatureVo {

    private static final String FEATURES = "[\"RENDER_PROMPT\", \"ASYNC_COMPUTE\", \"ROBOT\"]";

    @Schema(description = "List of experimental functions",
        type = "java.util.List", example = FEATURES)
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<String> keys;
}
