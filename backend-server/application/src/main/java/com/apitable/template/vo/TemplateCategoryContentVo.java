

package com.apitable.template.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Center - Template Category Content View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Template Category Content View")
public class TemplateCategoryContentVo {

    @Schema(description = "Albums View List")
    private List<AlbumVo> albums;

    @Schema(description = "Template View List")
    private List<TemplateVo> templates;
}
