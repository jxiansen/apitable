

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Node Statistics View.
 */
@Data
@Schema(description = "Node Statistics View")
public class NodeStatisticsVo {

    @Schema(description = "Member name")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String memberName;

    @Schema(description = "Member id")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String memberId;

    @Schema(description = "avatar")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String avatar;

    @Schema(description = "avatar color, used for empty avatar")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private Integer avatarColor;

    @Schema(description = "team name, contact with & ")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String teamName;

    @Schema(description = "user's total Node counts")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer totalNodeCount;

    @Schema(description = "user's private node counts")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer privateNodeCount;

    @Schema(description = "team node counts, teamNodeCount = totalNodeCount - privateNodeCount")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer teamNodeCount;
}
