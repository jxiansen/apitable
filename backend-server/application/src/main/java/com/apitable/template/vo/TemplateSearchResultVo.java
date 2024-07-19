

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Center - Template Search Result View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Template Search Result View")
public class TemplateSearchResultVo {

    @Schema(description = "Albums View List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<AlbumVo> albums;

    @Schema(description = "Template View List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<TemplateSearchResult> templates;

}
