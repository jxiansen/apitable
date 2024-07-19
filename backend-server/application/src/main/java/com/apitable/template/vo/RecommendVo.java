

package com.apitable.template.vo;

import com.apitable.shared.cache.bean.Banner;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * Template Center - Recommend View.
 *
 * @author Chambers
 */
@Data
@Schema(description = "Recommend View")
public class RecommendVo {

    @Schema(description = "Top Banner")
    private List<Banner> top;

    @Schema(description = "Custom Albums Groups")
    private List<AlbumGroupVo> albumGroups;

    @Schema(description = "Custom Template Groups")
    private List<TemplateGroupVo> templateGroups;
}
