

package com.apitable.widget.dto;

import lombok.Data;

/**
 * node widget dto.
 */
@Data
public class NodeWidgetDto {

    /**
     * widget name.
     */
    private String widgetName;

    /**
     * widget reference datasheet.
     */
    private String dstId;

    /**
     * node id.
     */
    private String nodeId;
}
