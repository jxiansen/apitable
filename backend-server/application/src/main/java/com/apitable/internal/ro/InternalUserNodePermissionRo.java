

package com.apitable.internal.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * Internal User Node Permission Ro.
 */
@Data
@Schema(description = "Internal Interface - User's Node Permission Request Parameters")
public class InternalUserNodePermissionRo {

    @Schema(description = "User Id List", requiredMode = Schema.RequiredMode.REQUIRED,
        example = "[\"132143242\", \"4324242\"]")
    private List<String> userIds;
}
