

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Search Member Results View.
 * </p>
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Search Member Results View")
public class SearchMemberResultVo {

    @Schema(description = "Member ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long memberId;

    @Schema(description = "Member Name", example = "Zhang San")
    private String memberName;

    @Schema(description = "Member name (not highlighted)", example = "Zhang San")
    private String originName;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Head portrait", example = "https://...")
    private String avatar;

    @Schema(description = "Department", example = "Technical team")
    private String team;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

    @Schema(description = "member is active")
    private Boolean isActive;

    @Schema(description = "team id and full hierarchy team path name")
    private List<MemberTeamPathInfo> teamData;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;
}
