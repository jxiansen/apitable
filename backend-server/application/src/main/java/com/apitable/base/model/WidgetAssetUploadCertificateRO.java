

package com.apitable.base.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * widget file upload certificate ro.
 * </p>
 *
 * @author tao
 */
@Data
@Schema(description = "widget file upload certificate ro")
public class WidgetAssetUploadCertificateRO {

    @Schema(description = "the file names， max: 20. when fileType asset, it need")
    private List<String> filenames;

    @Schema(description = "file type：0：asset; 1：package; 2: public")
    @NotNull
    private Integer fileType;

    @Schema(description = "the amount of token, max: 20. when fileType no asset, it need")
    private Integer count;

    @Schema(description = "the package's version. when fileType package, it need")
    private String version;

    @Schema(description = "the file extend name. when fileType package, it optional, such as: .js")
    private List<String> fileExtName;

}
