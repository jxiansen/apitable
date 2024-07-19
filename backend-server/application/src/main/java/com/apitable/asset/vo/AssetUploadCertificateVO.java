

package com.apitable.asset.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Attachment resource upload voucher result VO.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Attachment resource upload voucher result VO")
public class AssetUploadCertificateVO {

    @Schema(description = "File Access Path(possibly non-final value)",
        example = "spc10/2019/12/10/159.jpg")
    private String token;

    @Schema(description = "Upload request URL", example = "https://bucket.s3.us-east-1.amazon"
        + ".com/resourceKey?X-Amz-Algorithm=AWS4-HMAC-SHA256")
    private String uploadUrl;

    @Schema(description = "Upload request method", example = "POST")
    private String uploadRequestMethod;
}
