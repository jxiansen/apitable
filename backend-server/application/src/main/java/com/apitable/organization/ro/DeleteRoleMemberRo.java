

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Remove role members request parameter.
 * </p>
 *
 * @author tao
 */
@Data
@Schema(description = "Remove role members request")
public class DeleteRoleMemberRo {

    @NotEmpty
    @Schema(description = "role member's unit id", requiredMode = RequiredMode.REQUIRED)
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;

}
