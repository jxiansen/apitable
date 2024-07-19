

package com.apitable.base.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * widget upload file callback body.
 *
 * @author tao
 */
@Data
@Schema(description = "widget upload callback body")
public class WidgetUploadNotifyRO {

    @Schema(description = "file url. max: 20", example = "[\"widget/asset/adflkajadfj\"]")
    @NotEmpty(message = "resourceKeys no empty")
    private List<String> resourceKeys;

}