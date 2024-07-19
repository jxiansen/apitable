

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Template Widget Package Information View.
 * </p>
 */
@Data
@Schema(description = "Template Widget Package Extension Information View")
public class WidgetTemplatePackageExtraInfo {

    @Schema(description = "Open source address",
        example = "https://apitable.com/code/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String widgetOpenSource;

    @Schema(description = "Template Extension Cover",
        example = "https://apitable.com/code/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String templateCover;

}
