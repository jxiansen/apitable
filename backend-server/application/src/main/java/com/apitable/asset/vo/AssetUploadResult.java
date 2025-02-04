

package com.apitable.asset.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Resource upload result view.
 * </p>
 */
@Data
@Schema(description = "Resource upload result view")
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class AssetUploadResult {

    @Schema(description = "File Access Path", example = "spc10/2019/12/10/159.jpg")
    private String token;

    @Schema(description = "Preview Path", example = "spc10/2019/12/10/159.jpg")
    private String preview;

    @Schema(description = "MIME Type", example = "image/pdf")
    private String mimeType;

    @Schema(description = "File size", example = "1204")
    private Long size;

    @Schema(description = "Cloud storage type", example = "QNY")
    private String bucket;

    @Schema(description = "Document name", example = "image.jpg")
    private String name;

    @Schema(description = "Picture height", example = "100")
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private Integer height;

    @Schema(description = "Image width", example = "80")
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private Integer width;

    public AssetUploadResult(String token) {
        this.token = token;
    }
}
