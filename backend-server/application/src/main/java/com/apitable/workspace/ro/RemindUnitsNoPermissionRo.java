

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.validation.annotation.Validated;

/**
 * <p>
 * Get members who have no permission on the specified node when mentioning people.
 * </p>
 */
@Schema(description = "Get members who have no permission on the specified node when mentioning "
    + "people")
@Setter
@Getter
@Builder
@ToString
@EqualsAndHashCode
@Validated
public class RemindUnitsNoPermissionRo {

    @Schema(description = "Node ID", requiredMode = RequiredMode.REQUIRED)
    @NotBlank
    private String nodeId;

    @Schema(description = "Organizational Unit ID List", requiredMode = RequiredMode.REQUIRED)
    @NotEmpty
    private List<Long> unitIds;

}
