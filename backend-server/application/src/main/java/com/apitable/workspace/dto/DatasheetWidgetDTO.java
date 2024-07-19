

package com.apitable.workspace.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * datasheet widget dto.
 */
@Data
@NoArgsConstructor
public class DatasheetWidgetDTO {

    private String dstId;

    private String widgetId;

    private String sourceId;

    public DatasheetWidgetDTO(String dstId, String sourceId) {
        this.dstId = dstId;
        this.sourceId = sourceId;
    }
}
