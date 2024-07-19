

package com.apitable.space.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Role Resource View.
 * </p>
 */
@Data
@Schema(description = "Role Resource View")
public class RoleResourceVo {

    @Schema(description = "Group Name", example = "Address book management")
    private String groupName;

    @Schema(description = "Resource list",
        example = "[\"Manage Members\",\"Administrative department\",\"Manage Labels\"]")
    private List<String> resourceNames;
}
