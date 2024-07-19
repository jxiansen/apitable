

package com.apitable.internal.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * attachment capacity information view for spaces.
 */
@Data
@Schema(description = "Subscription information view for spaces")
public class InternalSpaceSubscriptionVo {

    @Schema(description = "Maximum number of rows in a single table (unit: row)")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxRowsPerSheet;

    @Schema(description = "Maximum number of archived rows in a single table (unit: row)")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxArchivedRowsPerSheet;

    @Schema(description = "The maximum number of rows of the space station (unit: row)")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxRowsInSpace;

    @Schema(description = "Maximum number of album views (unit: pieces)", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxGalleryViewsInSpace;

    @Schema(description = "Maximum number of Kanban views (unit: pieces)", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxKanbanViewsInSpace;

    @Schema(description = "Maximum number of Gantt views (unit: pieces)", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxGanttViewsInSpace;

    @Schema(description = "Maximum number of calendar views (unit: pieces)", example = "10")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxCalendarViewsInSpace;

    @Schema(description = "the maximum credit number for ai query(unit: int)", example = "1000")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxMessageCredits;

    @Schema(description = "Maximum number of widget of the space station")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxWidgetNums;

    @Schema(description = "Maximum number of automation runs of the space station")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxAutomationRunsNums;

    @Schema(description = "allow use embed", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowEmbed;

    @Schema(description = "allow use org api", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowOrgApi;
}
