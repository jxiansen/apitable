

package com.apitable.space.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Space Edit Request Parameters.
 */
@Schema(description = "Space Edit Request Parameters")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class SpaceUpdateOpRo {

    @Schema(description = "Name", example = "This is a new space name")
    @Size(max = 100, message = "The space name must be 2-100 characters in length")
    private String name;

    @Schema(description = "Icon", example = "https://...")
    private String logo;
}
