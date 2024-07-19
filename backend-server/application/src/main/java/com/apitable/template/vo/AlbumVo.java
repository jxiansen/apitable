

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Center - Albums View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Template Center - Albums View")
public class AlbumVo {

    @Schema(description = "Albums ID", example = "albxx")
    private String albumId;

    @Schema(description = "Albums Name", example = "Metaverse")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String name;

    @Schema(description = "Albums Cover", example = "https://xxx.com/cover001.jpg")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String cover;

    @Schema(description = "Albums Description", example = "This is a description about album.")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String description;
}
