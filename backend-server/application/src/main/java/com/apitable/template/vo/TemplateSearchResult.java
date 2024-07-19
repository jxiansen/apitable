

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Template Search Results.
 * </p>
 */
@Data
@Schema(description = "Template Search Results")
public class TemplateSearchResult {

    @Schema(description = "Template ID", example = "tplHTbkg7qbNJ")
    private String templateId;

    @Schema(description = "Template Name", example = "This is a template")
    private String templateName;

    @Schema(description = "Template classification code", example = "tpcCq88sqNqEv")
    private String categoryCode;

    @Schema(description = "Template Classification Name", example = "TV play")
    private String categoryName;

    @Schema(description = "Label Name", example = "TV play")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<String> tags;

}
