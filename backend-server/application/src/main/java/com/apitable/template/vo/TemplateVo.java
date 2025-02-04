

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Template View")
public class TemplateVo {

    @Schema(description = "Template ID", example = "tplHTbkg7qbNJ")
    private String templateId;

    @Schema(description = "Template Name", example = "This is a template")
    private String templateName;

    @Schema(description = "Node Id of template mapping", example = "nod10")
    private String nodeId;

    @Schema(description = "Node Type", example = "1")
    private Integer nodeType;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Cover", example = "http://...")
    private String cover;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Describe", example = "This is a showcase")
    private String description;

    @Schema(description = "Creator user ID (the actual return is uuid)",
        type = "java.lang.String", example = "1")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String userId;

    @Schema(description = "Creator User UUID", type = "java.lang.String", example = "1")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String uuid;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Creator's avatar", example = "public/2020/...")
    private String avatar;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Creator nickname", example = "Zhang San")
    private String nickName;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Template label", example = "[\"aaa\", \"bbb\"]")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<String> tags;

}
