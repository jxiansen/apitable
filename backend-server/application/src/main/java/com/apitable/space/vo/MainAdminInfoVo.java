

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Primary administrator information vo.
 * </p>
 */
@Data
@Schema(description = "Primary administrator information vo")
public class MainAdminInfoVo {

    @Schema(description = "Name", example = "Zhang San")
    private String name;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Head portrait address",
        example = "http://wwww.apitable.com/2019/11/12/17123187253.png")
    private String avatar;

    @Schema(description = "Position", example = "Manager")
    private String position;

    @Schema(description = "Mobile phone area code", example = "+1")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String areaCode;

    @Schema(description = "Phone number", example = "13610102020")
    private String mobile;

    @Schema(description = "Email", example = "example@qq.com")
    private String email;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;

}
