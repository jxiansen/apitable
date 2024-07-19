

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.ChinaLocalDateTimeToUtcSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * <p>
 * Share operation records.
 * </p>
 */
@Data
@Schema(description = "Node sharing operation record view")
public class ShareOperateNoteVO {

    @Schema(description = "Operator", example = "Zhang San")
    private String operator;

    @Schema(description = "Denomination of dive", example = "Open｜Close｜Refresh")
    private String action;

    @Schema(description = "Operation event", example = "Share｜ Allow others to save ｜ Share Link")
    private String event;

    @Schema(description = "Operation time (UTC timestamp)", example = "2020-03-19T16:03:16.000")
    @JsonSerialize(using = ChinaLocalDateTimeToUtcSerializer.class)
    private LocalDateTime timestamp;
}
