

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Member list view of the tag.
 * </p>
 */
@Data
@Deprecated
@Schema(description = "Member list view of the tag")
public class TagMemberVo {

    @Schema(description = "Member ID", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long memberId;

    @Schema(description = "Member Name", example = "Zhang San")
    private String memberName;

    @Schema(description = "Job No", example = "000101")
    private String jobNumber;

    @Schema(description = "Phone number", example = "13610102020")
    private String mobile;

    @Schema(description = "Email", example = "example@qq.com")
    private String email;

    @Schema(description = "Department", example = "Design Department, Test Department and "
        + "Development Department")
    private String depts;
}
