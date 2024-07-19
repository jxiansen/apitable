

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

/**
 * <p>
 * Node Description Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Node Description Request Parameters")
public class NodeDescOpRo {

    @NotBlank(message = "Node ID cannot be empty")
    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @Length(max = 65535, message = "Description length exceeds the upper limit")
    @Schema(description = "Node Description", example = "This is a node description")
    private String description;
}
