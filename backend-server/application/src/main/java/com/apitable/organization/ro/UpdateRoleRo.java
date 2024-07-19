

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * <p>
 * update role members request parameter.
 * </p>
 *
 * @author tao
 */
@Data
@Schema(description = "Update role members request")
public class UpdateRoleRo {

    @NotBlank
    @Size(min = 1, max = 100, message = "The role name cannot exceed 100 characters")
    @Schema(description = "role name", requiredMode = RequiredMode.REQUIRED, example = "finance")
    private String roleName;

}
