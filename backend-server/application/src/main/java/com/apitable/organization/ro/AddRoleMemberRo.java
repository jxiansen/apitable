

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Add role members request parameter.
 * </p>
 */
@Data
@Schema(description = "Add role members request")
public class AddRoleMemberRo {

    @NotEmpty
    @Schema(description = "team or member", requiredMode = RequiredMode.REQUIRED)
    private List<RoleMemberUnitRo> unitList;

}
