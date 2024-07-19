

package com.apitable.base.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * widget upload meta.
 */
@Data
@Schema(description = "widget upload meta")
@Builder
public class WidgetUploadMetaVo {

    @Schema(description = "cdn")
    private String endpoint;

}