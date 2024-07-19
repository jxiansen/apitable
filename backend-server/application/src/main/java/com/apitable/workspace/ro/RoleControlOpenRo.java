

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Node and field role control opening request parameters.
 */
@Data
@Schema(description = "Space Management - Node and Field Role Control Open Request Parameters")
public class RoleControlOpenRo {

    @Schema(description = "Inherit role when opening", example = "true")
    private Boolean includeExtend;

}
