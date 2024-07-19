

package com.apitable.base.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * widget upload token.
 */
@Data
@Schema(description = "widget upload toke require")
@Builder
public class WidgetUploadTokenVo {


    @Schema(description = "resource key", example = "widget/wpkXxx/icon.png")
    private String token;

    @Schema(description = "upload url", example = "https://bucket.s3.us-east-1.amazon"
        + ".com/resourceKey?X-Amz-Algorithm=AWS4-HMAC-SHA256")
    private String uploadUrl;

    @Schema(description = "upload request method", example = "POST")
    private String uploadRequestMethod;

}