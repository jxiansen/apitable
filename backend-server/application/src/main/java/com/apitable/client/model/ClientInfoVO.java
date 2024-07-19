

package com.apitable.client.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Application version information.
 */
@Data
@Schema(description = "Application version information")
public class ClientInfoVO {

    @Schema(description = "Client language set globally by the user", example = "zh-CN")
    private String locale;

    @Schema(description = "User information")
    private String userInfo;

    @Schema(description = "Novice guidance information")
    private String wizards;
}
