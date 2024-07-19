

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Collection;
import lombok.Data;

/**
 * <p>
 * User's resource information in the specified space.
 * </p>
 */
@Data
@Schema(description = "User's resource information view in the space")
public class UserSpaceVo {

    @Schema(description = "Space name", example = "My Workspace")
    private String spaceName;

    @Schema(description = "Primary administrator or not", example = "true")
    private Boolean mainAdmin;

    @Schema(description = "Permission", type = "List",
        example = "[\"MANAGE_TEAM\",\"MANAGE_MAIN_ADMIN\"]")
    @JsonSerialize(using = NullArraySerializer.class, nullsUsing = NullArraySerializer.class)
    private Collection<String> permissions;
}
