

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Users and all experimental functional status value objects of the space station.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "All available laboratory function status value objects of user space "
    + "station")
public class UserSpaceLabsFeatureVo {

    @Schema(description = "State set of all available lab functions")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class)
    private Map<String, List<FeatureVo>> features;

}
