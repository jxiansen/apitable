

package com.apitable.internal.vo;

import com.apitable.shared.support.serializer.CreditUnitSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.math.BigDecimal;
import lombok.Data;

/**
 * Space usage information view.
 */
@Data
@Schema(description = "space usage information view")
public class InternalSpaceUsageVo {

    @Schema(description = "The total number of rows in all tables of the space", example = "5")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long recordNums;

    @Schema(description = "total album views", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long galleryViewNums;

    @Schema(description = "total kanban views", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long kanbanViewNums;

    @Schema(description = "total gantt views", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long ganttViewNums;

    @Schema(description = "total number of calendar views", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long calendarViewNums;

    @Schema(description = "Number of used credit", example = "5.0001", deprecated = true)
    @JsonSerialize(nullsUsing = CreditUnitSerializer.class)
    @Deprecated(since = "1.8.0", forRemoval = true)
    private BigDecimal usedCredit;
}
