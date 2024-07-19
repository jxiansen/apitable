

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.ChinaLocalDateTimeToUtcSerializer;
import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Administrator View.
 * </p>
 */
@Data
@Schema(description = "Administrator View")
public class SpaceRoleVo {

    @Schema(description = "Role ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    @Schema(description = "Member ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long memberId;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Head portrait address",
        example = "http://wwww.apitable.com/2019/11/12/17123187253.png")
    private String avatar;

    @Schema(description = "Member Name", example = "Zhang San")
    private String memberName;

    @Schema(description = "DEPARTMENT", example = "Technology Department/R&D Department")
    private String team;

    @Schema(description = "Phone number", example = "13610102020")
    private String mobile;

    @Schema(description = "Whether activated", example = "true")
    private Boolean isActive;

    @JsonIgnore
    private String tempResourceGroupCodes;

    @Schema(description = "Resource group code list",
        example = "[\"MANAGE_SECURITY\",\"MANAGE_TEAM\"]")
    private List<String> resourceGroupCodes;

    @Schema(description = "Creation time", example = "2020-03-18T15:29:59.000")
    @JsonSerialize(using = ChinaLocalDateTimeToUtcSerializer.class)
    private LocalDateTime createTime;

    @Schema(description = "Creation time", example = "2020-03-18T15:29:59.000")
    @JsonSerialize(using = ChinaLocalDateTimeToUtcSerializer.class)
    private LocalDateTime createdAt;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;
}
