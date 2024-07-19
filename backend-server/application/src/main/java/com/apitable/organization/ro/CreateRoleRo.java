

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * <p>
 * add role request parameter.
 * </p>
 *
 * @author wuyitao
 */
@Data
@Schema(description = "add role request")
public class CreateRoleRo {

    @NotBlank
    @Size(min = 1, max = 100, message = "The role name cannot exceed 100 characters")
    @Schema(description = "role name", requiredMode = RequiredMode.REQUIRED, example = "Finance")
    private String roleName;

    @Schema(description = "role position", example = "2000")
    private Integer position;

}
