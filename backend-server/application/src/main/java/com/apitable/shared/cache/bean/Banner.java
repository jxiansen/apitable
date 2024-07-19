

package com.apitable.shared.cache.bean;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Center - Recommend Top Banner View.
 * </p>
 *
 * @author Chambers
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Banner View")
public class Banner {

    @Schema(description = "Template ID", example = "tplumddN5Cs5p")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String templateId;

    @Schema(description = "Banner Image", example = "https://xxx.com/cover001.jpg")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String image;

    @Schema(description = "Title", example = "OKR Tracking")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String title;

    @Schema(description = "Description", example = "It is an useful tool to keep tracking "
        + "everyone's OKRs on your team.")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String desc;

    @Schema(description = "Font Color", example = "#000000")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String color;
}
