

package com.apitable.space.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Space request parameters.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Space request parameters")
public class SpaceOpRo {

    @Schema(description = "Name", example = "This is a space", requiredMode = RequiredMode.REQUIRED)
    @NotBlank(message = "Name cannot be empty")
    @Size(min = 2, max = 100, message = "The space name must be 2-100 characters in length")
    private String name;

}
