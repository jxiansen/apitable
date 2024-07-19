

package com.apitable.space.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Get Space List Filter Condition.
 */
@Data
@Schema(description = "Space Filter Condition")
public class GetSpaceListFilterCondition {

    private Boolean manageable;
}
