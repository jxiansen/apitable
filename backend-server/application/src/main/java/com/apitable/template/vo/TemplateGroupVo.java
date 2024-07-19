

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
 * Template Center - Recommend Custom Template Group View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Recommend Custom Template Group View")
public class TemplateGroupVo {

    @Schema(description = "Template Group Name", example = "Other Users Also Like")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String name;

    @Schema(description = "Template View List")
    private List<TemplateVo> templates;
}
