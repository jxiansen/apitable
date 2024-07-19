

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Center - Template Category Menu View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Template Category Menu View")
public class TemplateCategoryMenuVo {

    @Schema(description = "Template classification code", example = "tpcCq88sqNqEv")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String categoryCode;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Template Classification Name", example = "TV play")
    private String categoryName;
}
