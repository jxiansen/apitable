

package com.apitable.template.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.LocalDateTimeToMilliSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * Template Center - Template Album Content View.
 * </p>
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "Template Album Content View")
public class AlbumContentVo extends AlbumVo {

    @Schema(description = "Albums Content", example = "This is the content about album.")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String content;

    @Schema(description = "Author Name", type = "java.lang.String", example = "1")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String authorName;

    @Schema(description = "Author Logo", example = "https://xxx.com/avator001.jpg")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String authorLogo;

    @Schema(description = "Author Description", example = "This is a description about author.")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String authorDesc;

    @Schema(description = "Template Tag List", example = "[\"aaa\", \"bbb\"]")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<String> tags;

    @Schema(description = "creation time millisecond timestamp",
        type = "java.lang.Long", example = "1573561644000")
    @JsonSerialize(using = LocalDateTimeToMilliSerializer.class,
        nullsUsing = NullNumberSerializer.class)
    private LocalDateTime createdAt;

}
