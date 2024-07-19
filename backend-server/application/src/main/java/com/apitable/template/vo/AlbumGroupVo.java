

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Center - Recommend Custom Albums Group View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Recommend Custom Albums Group View")
public class AlbumGroupVo {

    @Schema(description = "Albums Group Name", example = "Other Users Also Like")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String name;

    @Schema(description = "Albums View List")
    private List<AlbumVo> albums;
}
