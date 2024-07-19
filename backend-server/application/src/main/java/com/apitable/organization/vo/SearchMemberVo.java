

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.MobilePhoneHideSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Search Member Result Set View.
 * </p>
 */
@Data
@Schema(description = "Search Member Results View")
public class SearchMemberVo {

    @Schema(description = "Member ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long memberId;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Head portrait address",
        example = "http://wwww.apitable.com/2019/11/12/17123187253.png")
    private String avatar;

    @Schema(description = "Member Name", example = "Zhang San")
    private String memberName;

    @Schema(description = "Member name (not highlighted)", example = "Zhang San")
    private String originName;

    @Schema(description = "Department", example = "Operation Department | Planning Department")
    private String team;

    @Schema(description = "Whether activated", example = "true")
    private Boolean isActive;

    @Schema(description = "Phone number", example = "13610102020")
    @JsonSerialize(nullsUsing = NullStringSerializer.class,
        using = MobilePhoneHideSerializer.class)
    private String mobile;

    @Schema(description = "Is the administrator already", example = "true")
    private Boolean isManager;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;
}
