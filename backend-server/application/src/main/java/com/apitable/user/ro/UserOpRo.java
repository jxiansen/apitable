

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * User Action Request Parameters.
 */
@Data
@Schema(description = "User Action Request Parameters")
public class UserOpRo {

    /**
     * nickName max size.
     */
    private final int maxSize = 32;

    /**
     * user avatar.
     */
    @Schema(description = "Avatar", example = "https://...")
    private String avatar;

    /**
     * default avatar color number.
     */
    @Schema(description = "default avatar color", example = "1")
    private Integer avatarColor;

    /**
     * user nickName.
     */
    @Schema(description = "Nickname", example = "This is a nickname")
    @Size(max = maxSize, message = "Nickname length cannot exceed 32 bits")
    private String nickName;

    /**
     * is init.
     */
    @Schema(description = "Whether it is a registered initialization nickname", example = "true")
    private Boolean init;

    /**
     * locale.
     */
    @Schema(description = "Language", example = "zh-CN")
    private String locale;

    /**
     * time zone.
     */
    @Schema(description = "Time Zone", example = "America/Toronto")
    private String timeZone;
}
