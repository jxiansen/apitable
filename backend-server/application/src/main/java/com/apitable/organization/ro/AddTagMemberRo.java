

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Add tag member request parameter.
 * </p>
 */
@Data
@Schema(description = "Add tag member request parameter")
public class AddTagMemberRo {

    @Schema(description = "Tag ID", type = "long", example = "12032")
    private Long tagId;

    @Schema(description = "Member ID List", type = "List", example = "[1,2,3,4]")
    private List<Long> memberIds;
}
