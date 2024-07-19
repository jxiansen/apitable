

package com.apitable.user.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * User simple vo.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "User simple vo.")
public class UserSimpleVO {

    /**
     * uuid.
     */
    @Schema(description = "User UUID", example = "1261273764218")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String uuid;

    /**
     * nickName.
     */
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Nickname", example = "Zhang San")
    private String nickName;

    /**
     * user avtar.
     */
    @JsonSerialize(nullsUsing = NullStringSerializer.class,
        using = ImageSerializer.class)
    @Schema(description = "Avatar", example = "null")
    private String avatar;
}
