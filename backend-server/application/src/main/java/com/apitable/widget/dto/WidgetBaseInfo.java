

package com.apitable.widget.dto;

import lombok.Data;

/**
 * widget base info.
 */
@Data
public class WidgetBaseInfo {

    private String nodeId;

    private String widgetPackageId;

    private String widgetId;

    private String name;

    private String storage;

    private Long revision;
}
