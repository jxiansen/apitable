

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Remove tag member request parameters.
 * </p>
 */
@Data
@Schema(description = "Remove tag member request parameters")
public class DeleteTagMemberRo {

    @NotNull
    @Schema(description = "Member ID", example = "1", requiredMode = RequiredMode.REQUIRED)
    private Long tagId;

    @NotEmpty
    @Size(max = 100)
    @Schema(description = "Member ID Collection", type = "List", example = "[1,2,3,4]",
        requiredMode = RequiredMode.REQUIRED)
    private List<Long> memberId;
}
