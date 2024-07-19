

package com.apitable.space.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Administrator permission information view.
 * </p>
 */
@Data
@Schema(description = "Administrator permission information view")
public class SpaceRoleDetailVo {

    @Schema(description = "Administrator Name", example = "Zhang San")
    private String memberName;

    @Schema(description = "The permission code set owned by the administrator", type = "List",
        example = "[\"MANAGE_MEMBER\",\"MANAGE_TEAM\"]")
    private List<String> resources;
}
