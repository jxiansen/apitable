

package com.apitable.player.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Message statistics.
 * </p>
 */
@Data
@Builder
@Schema(description = "Message statistics")
public class NotificationStatisticsVo {

    @Schema(description = "Number of messages read", example = "1")
    private Integer readCount;

    @Schema(description = "Total number of messages", example = "1")
    private Integer totalCount;

    @Schema(description = "Number of unread messages", example = "1")
    private Integer unReadCount;
}
