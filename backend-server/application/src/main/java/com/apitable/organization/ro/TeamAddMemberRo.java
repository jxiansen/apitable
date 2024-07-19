

package com.apitable.organization.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Department Add Member Information Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Department Add Member Information Request Parameters")
public class TeamAddMemberRo {

    @Schema(description = "Department ID, not required. If it is the root department, it can not "
        + "be transferred", type = "java.lang.String",
        requiredMode = RequiredMode.REQUIRED, example = "12032")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long teamId;

    @Schema(description = "Department or member list", requiredMode = RequiredMode.REQUIRED)
    private List<OrgUnitRo> unitList;
}
