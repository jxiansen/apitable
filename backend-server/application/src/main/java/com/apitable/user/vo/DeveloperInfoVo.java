

package com.apitable.user.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Developer Configuration Information View.
 * </p>
 */
@Data
@Schema(description = "Developer Configuration Information View")
public class DeveloperInfoVo {

    @Schema(description = "Access Token", example = "Zhang San")
    private String apiKey;
}
