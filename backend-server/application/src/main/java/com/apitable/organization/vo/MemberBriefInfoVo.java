

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Basic member information view.
 * </p>
 */
@Data
@Schema(description = "Basic member information view")
public class MemberBriefInfoVo {

    @Schema(description = "Organizational Unit ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "Member ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long memberId;

    @Schema(description = "Member Name", example = "Zhang San")
    private String memberName;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

}
