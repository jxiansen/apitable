

package com.apitable.widget.dto;

import com.apitable.workspace.dto.DatasheetWidgetDTO;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * widget dto.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class WidgetDTO extends DatasheetWidgetDTO {

    private String nodeId;
}
